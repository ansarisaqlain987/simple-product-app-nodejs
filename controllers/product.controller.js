const { ProductService } = require('../services');
const { addproductSchema } = require('../validation/product.validation.schema');
const { ValidateData } = require('./../utils/validate');

const getProductList = async (req, res) => {
    try {
        let data = await ProductService.getProductList();
        return res.send({ statusCode: 200, status: 'SUCCESS', message: 'Data Fetched', data });
    } catch (err) {
        return res.send({ statusCode: 500, status: 'FAILED', message: 'Unable to fetch the details', data: {} });
    }
};

const getProductById = async (req, res) => {
    try {
        let id = req.params.id;
        let details = await ProductService.getProduct(id);
        return res.send({ statusCode: 200, status: 'SUCCESS', message: 'Product Fetched Successfully', data: details });
    } catch (err) {
        return res.send({ statusCode: 500, status: 'FAILED', message: 'Unable to fetch the details', data: {} });
    }
};

const addProduct = async (req, res) => {
    try {
        let jsonData = req.body;
        let valid = ValidateData(jsonData, addproductSchema);
        if (valid.errors) return res.send({ statusCode: 400, status: 'BAD_REQUEST', message: 'Bad request body', data: { erros: valid.errors } })
        await ProductService.addProduct(jsonData);
        return res.send({ statusCode: 201, status: 'SUCCESS', message: 'Product Added Successfully', data: {} });
    } catch (err) {
        return res.send({ statusCode: 500, status: 'FAILED', message: 'Unable to add Product', data: {} });
    }
};

const deleteProduct = async (req, res) => {
    try {
        let id = req.params.id;
        await ProductService.deleteProduct(id);
        return res.send({ statusCode: 200, status: 'SUCCESS', message: 'Product Deleted Successfully', data: {} });
    } catch (err) {
        return res.send({ statusCode: 500, status: 'FAILED', message: 'Unable to delete product', data: {} });
    }
};

const updateProduct = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        let valid = ValidateData(data, addproductSchema);
        if (valid.errors) return res.send({ statusCode: 400, status: 'BAD_REQUEST', message: 'Bad request body', data: { erros: valid.errors } })
        await ProductService.updateProduct(id, data);
        return res.send({ statusCode: 200, status: 'SUCCESS', message: 'Product Updated Successfully', data: {} });
    } catch (err) {
        return res.send({ statusCode: 500, status: 'FAILED', message: 'Unable to update roduct', data: {} });
    }
};

module.exports = {
    getProductById, getProductList, addProduct, deleteProduct, updateProduct
}
