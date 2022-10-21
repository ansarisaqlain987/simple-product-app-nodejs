const { Product } = require('./../models');

const addProduct = (data) => {
    return (new Product(data)).save();
};

const updateProduct = (id, data) => {
    return Product.updateMany({ _id: id }, data).exec();
};

const getProductList = () => {
    return Product.find({ isDeleted: false, isActive: true }).select("_id name price").exec();
};

const getProduct = (id) => {
    return Product.find({ _id: id }).select("_id name price").exec();
};

const deleteProduct = (id) => {
    return Product.updateMany({ _id: id }, { isDeleted: true }).exec();
};

module.exports = {
    addProduct, updateProduct, getProduct, getProductList, deleteProduct
}