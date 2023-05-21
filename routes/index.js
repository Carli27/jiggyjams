var express = require("express");
var router = express.Router();
const db = require("../model/database"); // is this correct?

/* GET all product list/ jams - can I change this file to be called product list? what should it be called*/
//NOT TESTED in postman can't get any of the below to work
router.get("/", async function (req, res, next) {
  try {
    const result = await db("SELECT * FROM product_list;");
    res.send(result.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get jam by ID
// Not tested in postman
router.get("/:id", async (req, res, next) => {
  try {
    const result = await db(
      `SELECT * FROM product_list WHERE id = ${req.params.id};`
    );
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// post a new jam
// Not tested in postman
router.post("/", async function (req, res, next) {
  console.log("REQ.BODY"); // req.body is an object not needed
  try {
    await db(
      `INSERT INTO product_list (name, ingredients, description, quantity, price) VALUES ("${req.body.name}","${req.body.ingredients}","${req.body.description}", "${req.body.quantity}", "${req.body.price}");` // need to pass both values with own brackets and $ seperated by comma
    );
    const result = await db("SELECT * FROM product_list ORDER BY id ASC;");
    res.send(result.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
