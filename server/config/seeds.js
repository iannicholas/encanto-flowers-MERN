const db = require('./connection');
const { Category, Product, User } = require('../models');

db.once('open', async () => {
    // Delete any existing category entries
    await Category.deleteMany();
    // Add the predefined new ones to the dataabase
    const categories = await Category.insertMany([
        { Name: 'Seasonal' },
        { Name: 'Sympathy' },
        { Name: 'Friendship' },
        { Name: 'Funerals' },
        { Name: 'Get Well' },
        { Name: 'Romance'}
    ])
    // Notify the user that the categories have been seeded
    console.log('categories seeded');

    await Product.deleteMany();
    const products = await Product.insertMany([
        {
            name: 'Lavender Garden Bouquet',
            description: 'Share a lovely lavender garden with someone special. Our farm-fresh bouquet is gathered with a mix of blooms in the sweetest shades to deliver your most heartfelt sentiments.',
            price: 29.99,
            image: [{name: 'Friendship Bouquet', description: 'Purple Roses', img: '/images/Bouquet01.jpg' }],
            categories: [categories[0]._id , categories[2]._id,  categories[5]._id ]
        },
        {
            name: 'Healing Blue & White',
            description: 'Soothe their tears as they mourn the loss of a loved one with the serenity of blue and white. Our sympathy arrangement of fresh blue delphinium, white roses and lilies, expertly gathered together in a clear glass cube lined with Ti leaf ribbon, makes for an exquisite gesture of comfort and healing.',
            price: 29.99,
            image: [{name: 'Healing Blue & White', description: 'white flowers with a touch of blue', img: '/images/Bouquet02.jpg' }],
            categories: categories[1]._id 
        },
        {
            name: 'Spring Sentiment Bouquet',
            description: 'Spring is a time to refresh and reach out. Our spring bouquet celebrates that sentiment. Soft pink and yellow blooms are loosely gathered with lush greenery for style and texture. Designed in our rustic, grey-washed wooden cube, it’s a gift that delivers on your feelings in the most beautiful way.',
            price: 35.99,
            image: [{name: 'Spring Sentiment Bouquet', description: 'spring flowers', img: '/images/Bouquet03.jpg' }],
            categories: [categories[0]._id , categories[2]._id ]
        },
        {
            name: 'Floral Embrace',
            description: 'Like a warm embrace, our vibrant flower bouquet delivers your sentiments to someone special. A rich gathering of yellow and orange blooms, with pops of bright pink and purple.',
            price: 48.99,
            image: [{name: 'Floral Embrace', description: 'yellow and orange blooms', img: '/images/Bouquet04.jpg' }],
            categories: [categories[0]._id , categories[2]._id , categories[5]._id]
        },
        {
            name: 'Garden Pathway',
            description: 'A fresh-from-the meadow design makes our Garden Pathway bouquet a true delight. Vibrant blooms and lush greenery are brought together for a rich contrast of color. Arranged in a clear vase to let its beauty shine, this summertime standout deserves to be put on display.',
            price: 35.99,
            image: [{name: 'Garden Pathway', description: 'Vibrant blooms', img: '/images/Bouquet05.jpg' }],
            categories: [categories[0]._id , categories[2]._id , categories[4]._id]
        },
        {
            name: 'Peace, Prayers & Blessings',
            description: 'Offer peace and comforting prayers during times of loss with elegant blue and yellow blooms. Artistically designed inside a keepsake willow basket, our arrangement of heavenly blue delphinium and white roses is a touching way to convey your sincerest blessings.',
            price: 59.99,
            image: [{name: 'Peace, Prayers & Blessings', description: 'blue and yellow blooms', img: '/images/Bouquet06.jpg' }],
            categories: [categories[3]._id , categories[1]._id ]
        },
        {
            name: 'Cherished Memories',
            description: 'White flowers have a certain timelessness and elegance, perfect for expressing your heartfelt condolences during times of sorrow. Pristine white roses, lilies and snapdragons are hand-gathered by our florists with touches of lush greenery inside a sleek cylinder vase. It’s a classic and comforting gesture that conveys the purity of your sentiment.',
            price: 39.99,
            image: [{name: 'Cherished Memories', description: 'White flowers', img: '/images/Bouquet07.jpg' }],
            categories: [categories[3]._id , categories[1]._id ]
        },
        {
            name: 'Vibrant Floral Medley',
            description: 'Putting a bright start in somebody’s day starts with a beautiful gift. Our delightfully vibrant bouquet is filled with a medley of blooms in cheerful pops of orange, pink and yellow, with plenty of lush greenery mixed in. ',
            price: 35.99,
            image: [{name: 'Vibrant Floral Medley', description: 'orange, pink and yellow', img: '/images/Bouquet09.jpg' }],
            categories: [categories[0]._id , categories[2]._id , categories[4]._id ]
        },
        {
            name: 'Simply Pink',
            description: 'Simply pink. Simply spectacular! It’s the perfect gift to celebrate and connect with the people you care about.',
            price: 39.99,
            image: [{name: 'Simply Pink', description: 'pink flowers', img: '/images/Bouquet10.jpg' }],
            categories: [categories[0]._id , categories[2]._id , categories[5]._id ]
        },
        {
            name: 'Daydream Bouquet',
            description: 'An exquisite gift with beautifully bespoke style. Our vibrant gathering of blooms is arranged in our signature European hatbox: an elegant, new dove gray container finished with a matching ribbon. Its versatile design is perfect for displaying a variety of colors, adding to the custom feeling of this special keepsake.',
            price: 45.99,
            image: [{name: 'Daydream Bouquet', description: 'pink flowers', img: '/images/Bouquet11.jpg' }],
            categories: [categories[0]._id , categories[2]._id , categories[4]._id  , categories[5]._id]
        },
        {
            name: 'Bright as Day',
            description: 'Featuring emerald green Hydrangea, California Sunflowers, pink South American Roses, purple Stock, orange Spray Roses, and more, this arrangement is a blast of color in a vase. This arrangement is perfect for any occasion!',
            price: 39.99,
            image: [{name: 'Bright as Day', description: 'pink flowers', img: '/images/Bouquet12.jpg' }],
            categories: [categories[0]._id , categories[2]._id , categories[4]._id ]
        },
        {
            name: 'Let the sun shine',
            description: 'California-grown sunflowers, bright yellow spray roses, premium accent flowers and more.',
            price: 55.99,
            image: [{name: 'Let the sun shine', description: 'sunflowers', img: '/images/Bouquet13.jpg' }],
            categories: [categories[0]._id , categories[2]._id , categories[5]._id ]
        },
        {
            name: 'The Angels',
            description: 'Our pink roses are full of life and natural beauty. They truly are a heavenly bunch! Sustainably grown in California, these flowers are some of the freshest, most vibrant roses you will find.',
            price: 59.99,
            image: [{name: 'The Angels', description: 'pink roses', img: '/images/Bouquet14.jpg' }],
            categories: [categories[0]._id , categories[2]._id , categories[4]._id , categories[5]._id  ]
        },
        {
            name: 'Queen Bee',
            description: 'Get these bright, beautiful sunflowers, white spray roses, yellow billy balls, and mini hydrangeas in formation for that person in your life who’s irreplaceable.',
            price: 49.99,
            image: [{name: 'Queen Bee', description: 'yellow sunflowers', img: '/images/Bouquet15.jpg' }],
            categories: [categories[0]._id , categories[2]._id , categories[4]._id , categories[5]._id  ]
        }

    ])
    console.log('products seeded');

    await User.deleteMany();
    const users = await User.create(
        {
            userName: 'Ian Nicholas',
            email: 'inicholas8686@gmail.com',
            password: 'password',
            role: 1
        }
    )
    console.log('users seeded');
    
});