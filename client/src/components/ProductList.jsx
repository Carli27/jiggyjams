import { useEffect, useState } from "react"; // this  isn't working
import App from "../App"; // is this correct

// can't pass a prop that doesn't exist - only in the brackets () not the body of the function//

function ProductList() {
  // showJamProfile or currentJamProfile doesn't work here not sure why
  const [allJams, setAllJams] = useState([]); // holds all data for all jams, if you look at postman you will see the data is in an array []

  const showJamProfile = (id) => {
    console.log(id);
  };

  useEffect(() => {
    // always runs when your pages loads  - e.g. allJams function
    // have to call getAllJams as you can't name the same as the state e.g. allJams which holding the data
    getAllJams();
  }, []);

  const getAllJams = () => {
    console.log("hey");
    fetch("http://localhost:4000/products") // as in postman include http://
      .then((response) => response.json()) // converts in javascript from json in postman
      .then((jams) => {
        console.log(jams);
        setAllJams(jams);
      })
      .catch((error) => {
        console.log(error);
      }); //
  };

  return (
    <div>
      <div className="text-bg-warning p-3">Product List</div>
      Testing
      <div className="row">
        {allJams.map((jam) => (
          <span onClick={() => handleClick((key = jam.id))}>
            <div className="col-4 p-4" key={jam.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={jam.image} className="card-img-top rounded" />
                <div className="card-body">
                  <p className="card-text">{jam.name}</p>
                  <p className="card-text">{jam.description}</p>
                  <p className="card-text">Ingredients: {jam.ingredients}</p>
                  <p className="card-text">Quantity: {jam.quantity}</p>
                  <p className="card-text">£ {jam.price}</p>
                  <p className="card-text">{jam.size} grams</p>
                </div>
              </div>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}

//css tricks
// router student profile watch again
// control c - stop front end
// can I show the name of the value?

export default ProductList; // always have to export the file called same as filename and function name
