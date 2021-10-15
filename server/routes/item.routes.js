const ItemControllers = require("../controllers/item.controllers");

module.exports= (app) => {
    app.get('/api/items', ItemControllers.getAllItems);
    app.post('/api/items', ItemControllers.createItem);
    app.get('/api/items/myCart', ItemControllers.myCart);
    app.get('/api/items/mensClothing', ItemControllers.getAllMensClothing);
    app.get('/api/items/womensClothing', ItemControllers.getAllWomensClothing);
    app.get('/api/items/reviewOrder', ItemControllers.reviewOrder);
}