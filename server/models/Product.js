const {Schema, model} = require('mongoose');

const imageSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img:
        {
            type: String,
            required: true,
        }

    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: [imageSchema],
        categories: [
            {
                type: Schema.Types.String,
                ref: 'Category',
            }
        ],
        featured: {
            type: Boolean,
            default: false},
        seasonal: {
            type: Boolean,
            default: false}
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = model ('Product', productSchema);