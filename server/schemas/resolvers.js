const { AuthenticationError } = require('apollo-server-express');
const { Product, Category, Order,  User } = require('../models');
const { signToken } = require('../utils/auth');
const dotenv = require('dotenv');
dotenv.config();
const stripe = require('stripe')(process.env.STRIPE_SK);

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.products',
                    populate: 'categories'
                    });

                    user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
                    return user;
            }
            throw new AuthenticationError('Not logged in');
        },
        categories: async () => {
            return Category.find();
        },

        products: async () => {
            return await Product.find({}).populate('categories');
        },
        product: async (parent, { _id }) => {
            return Product.findById( _id ).populate("categories");
        },

        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.products',
                    populate: 'categories'
                    });
                return user.orders.id(_id);
            }
            throw new AuthenticationError('Not logged in');
        },
        checkout: async (parent, { products, total }, context) => {
            const url = new URL(context.headers.referer).origin;    
            const order = new Order({ products: products, total: parseFloat(total) });
            const line_items = [];
            const { products: checkoutProducts } = await order.populate('products');
            for (let i = 0; i < checkoutProducts.length; i++) {
                const product = await stripe.products.create({
                    name: checkoutProducts[i].name,
                    description: checkoutProducts[i].description,
                    images: checkoutProducts[i].images,
                });
                const price = await stripe.prices.create({
                    product: product.id,
                    unit_amount: checkoutProducts[i].price * 100,
                    currency: 'usd',
                });
                line_items.push({
                    price: price.id,
                    quantity: 1
                });
            }
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/cart`,
            });
            return { session: session.id };
        }

    },
    Mutation: {
        addUser: async (parent,{userName, email, password, role}) => {
            const user = await User.create({userName, email, password, role});
            const token = signToken(user);
            return { token, user };
        },
        deleteUser: async (parent, {id}) => {
            const user = await User.findByIdAndDelete(id);
            return user;
        },
        updateUser: async (parent, {id, name, email, password}) => {
            const user = await User.findByIdAndUpdate(id, {userName, email, password});
            return user;
        },
        // this one
        addOrder: async (parent, { products, total }, context) => {
            if (context.user) {
                const order = await Order.create({ products, total });
                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
                return order;
            }
            throw new AuthenticationError('Not logged in');
        },
        addCategory: async (parent, { Name }) => {
            const category = await Category.create({
                Name
            })

            return category;
        },
        addProduct: async (parent, {name, description, price, categories, image}) => {
            const product = await Product.create({name, description, price, categories, image});
            return product.populate('categories');
        },
        deleteProduct: async (parent, { productId }) => {
            const product = await Product.findByIdAndDelete({ _id: productId });
            return product
        },

        updateProduct: async (parent, {productId, name, description, price, categories, image}) => {
            const product = await Product.findByIdAndUpdate(productId, {name, description, price, categories, image});
            return product
        },

        removeCategory: async (parent, { categoryId }) => {
            const category = await Category.findByIdAndDelete({ _id: categoryId });
            return category;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Invalid credentials');
            }
            const isValid = await user.isCorrectPassword(password);
            if (!isValid) {
                throw new AuthenticationError('Invalid credentials');
            }
            const token = signToken(user);
            console.log(user);
            return { user, token };
        }
    }
};


module.exports = resolvers;