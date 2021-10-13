const ShoppingCartControllers = require(`../controllers/shoppingCart.controllers`);

module.exports= (app) => {
    app.get('/api/shoppingCart', ShoppingCartControllers.getAllCartItems);
    app.post('/api/shoppingCart', ShoppingCartControllers.getAllCartItems);
    app.post('/api/shoppingCart/phoneNumber', ShoppingCartControllers.sendShippingMessage);
}