const { Schema, model } = require("mongoose");



const productSchema = new Schema({
    id: {
        type: Number,
        default: 0
    },
    ownerId: {
        type: Number,
        default: 1,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    locationId: {
        type: String,
        required: true,
        default: "-1"
    },
    imageName: {
        type: String,
        default: null
    },
    photosNames: {
        type: [String],
        required: true
    }
});

productSchema.pre("save", async function (next) {
    if (this.id !== 0) return next();

    const obj = await productModel.find().sort({ field: 'desc', id: -1 }).limit(1);
    this.id = obj[0] ? obj[0].id + 1 : 0;
    next();
});

const productModel = model("Products", productSchema);

exports.createProduct = (ownerId, title, description, price, category, locationId, imageName, photosNames) =>
    productModel.create({ ownerId, title, description, price, category, locationId, imageName, photosNames });

exports.getProductById = (id) => productModel.findOne({ id: +id });
exports.getProductsByIds = (ids) => productModel.find({ id: { $in: ids } });

exports.getAllProducts = (titlePattern, category, locationId, priceFrom, priceTo) => productModel.find({
    title: { $regex: titlePattern },
    ...(() => locationId !== "-1" && { locationId })(),
    ...parsePrice(priceFrom, priceTo),
    ...(() => category && category !== 'any' && { category })()
});

const parsePrice = (priceFrom, priceTo) => {
    let price = undefined;

    if (priceFrom !== -1) price = { $gte: priceFrom }
    if (priceTo !== -1) price = { ...(() => price && (price))(), $lte: priceTo }

    if (price) return { price };

    return undefined;
}
