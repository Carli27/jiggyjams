var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var productsRouter = require("./routes/products");
var usersRouter = require("./routes/users");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/client/dist"))); // need for deploying
//dont this right now
//this is where I specify the route on the back end
app.use("/products", productsRouter);
app.use("/api/users", usersRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/dist/index.html")); // added for deployment
});
module.exports = app;

// this example works for mysql
// {
// "name": "Scotch Bonnet Chilli Jam",
// "ingredients":"Sugar, Scotch Bonnet, Salt, Dried Apricot, Red Peppers, Garlic, Ginger, Cider Vinegar",
// "description":"Super spicy jam that goes great on burgers, fries, cold meats, with cheese or to add a spicy kick to sauce or marinade. Jiggy Jams will always have you spicing up your life (can you tell I’m a Spice girls fan). Store in a cool dry place, once opened keep refrigerated and consume within 8 weeks.",
// "quantity": 10,
// "price": 4.99,
// "size": "340g"
// }
// // [
// //     {
// "id": 3,
// "name": "Scotch Bonnet Chilli Jam",
// "ingredients": "Sugar, Scotch Bonnet, Salt, Dried Apricot, Red Peppers, Garlic, Ginger, Cider Vinegar",
// "description": "Super spicy jam that goes great on burgers, fries, cold meats, with cheese or to add a spicy kick to sauce or marinade. Jiggy Jams will always have you spicing up your life (can you tell I’m a Spice girls fan). Store in a cool dry place, once opened keep refrigerated and consume within 8 weeks.",
// "quantity": 10,
// "price": 5
// //     },
// //     {
// //         "id": 4,
// //         "name": "Scotch Bonnet Chilli Jam",
// //         "ingredients": "Sugar, Scotch Bonnet, Salt, Dried Apricot, Red Peppers, Garlic, Ginger, Cider Vinegar",
// //         "description": "Super spicy jam that goes great on burgers, fries, cold meats, with cheese or to add a spicy kick to sauce or marinade. Jiggy Jams will always have you spicing up your life (can you tell I’m a Spice girls fan). Store in a cool dry place, once opened keep refrigerated and consume within 8 weeks.",
// //         "quantity": 240,
// //         "price": 5
