const { ProductController } = require('./../controllers');

module.exports = (router) => {
    router.get('/', ProductController.getProductList);
    router.get('/:id', ProductController.getProductById);
    router.post('/', ProductController.addProduct);
    router.post('/delete/:id', ProductController.deleteProduct);
    router.post('/:id', ProductController.updateProduct);
    return router;
}