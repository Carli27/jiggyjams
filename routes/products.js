var express = require("express");
var router = express.Router();
const db = require("../model/helper"); // is this correct?

//GET all product list/ jams - can I change this file to be called products in the init_bd file?
// to test make sure are connected to the server do this by going into the terminal enter the project folder code .  then type npm start
// to test on postman localhost:4000/products
//WORKING - post the mysql database name to products and addig size
router.get("/", async function (req, res, next) {
  try {
    const result = await db("SELECT * FROM products;");
    res.send(result.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get jam by ID
// to test in postman type: localhost:4000/products/3 or 4 (typing 3 or 4 replaces :id)
// WORKING - post the mysql database name to products and addig size
router.get("/:id", async (req, res, next) => {
  try {
    const result = await db(
      `SELECT * FROM products WHERE id = ${req.params.id};`
    );
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// post a new jam
// WORKING - post the mysql database name to products and addig size
// UPDATE size - DONE
// tested my sql: INSERT INTO products (name, ingredients, description, quantity, price, size) VALUES
router.post("/", async function (req, res, next) {
  console.log("REQ.BODY"); // req.body is an object not needed
  try {
    await db(
      `INSERT INTO products (name, ingredients, description, quantity, price, size) VALUES ("${req.body.name}","${req.body.ingredients}","${req.body.description}", "${req.body.quantity}", "${req.body.price}", "${req.body.size}");` // need to pass both values with own brackets and $ seperated by comma
    );
    const result = await db("SELECT * FROM products ORDER BY id ASC;");
    res.send(result.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Delete a jam - added new since Monday 22nd May
//WORKS
router.delete("/:id", async (req, res, next) => {
  try {
    await db(`DELETE FROM products WHERE id = ${req.params.id}`);
    const result = await db("SELECT * FROM products ORDER BY id ASC");
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
