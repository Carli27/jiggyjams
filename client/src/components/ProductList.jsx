import { useEffect, useState } from "react"; // this  isn't working
import App from "../App"; // is this correct
import { Link } from "react-router-dom"; // need to import the link

// can't pass a prop that doesn't exist - only in the brackets () not the body of the function//
// To access this component on front end http://localhost:5173/products (number 5173 may change if running another project - the reason for this is in app.jsx (src) )
function ProductList() {
  // showJamProfile or currentJamProfile doesn't work here not sure why
  const [allJams, setAllJams] = useState([]); // holds all data for all jams, if you look at postman you will see the data is in an array []
  // const showJamProfile = (id) => {
  //   jam.id;
  //   console.log(id, "test");
  // }; // works on console

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
      });
  };

  return (
    <div>
      <div className="text-bg-warning p-3">Jiggy Jams</div>
      <p>
        {/* Calling all music lovers! Are you ready to groove and jam to the rhythm
        of delicious flavors? Look no further than JiggyJams, your one-stop
        online shop for jammin' goodness! 🎶 Get ready to tantalize your taste
        buds with a symphony of fruity sensations that will have you dancing in
        your kitchen. From classic melodies like strawberry and blueberry to
        funky fusions like pineapple and mango, JiggyJams has got your jam
        cravings covered. So join the jam revolution and let the tasty beats of
        JiggyJams transport you to a whole new level of fruity euphoria! */}
      </p>
      <div className="container">
        <div className="row">
          {allJams.map((jam) => (
            <div className="col-md-3 m-1" key={jam.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={jam.image}
                  className="card-img-top rounded"
                  alt={jam.name}
                />
                <div className="card-body">
                  <p className="card-text">{jam.name}</p>
                  <p className="card-text">{jam.description}</p>
                  <p className="card-text">Ingredients: {jam.ingredients}</p>
                  <p className="card-text">Quantity: {jam.quantity}</p>
                  <p className="card-text">£ {jam.price}</p>
                  <p className="card-text">{jam.size} grams</p>
                  <Link to={`/products/${jam.id}`}>
                    <button>View More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//css tricks
// router student profile watch again
// control c - stop front end
// can I show the name of the value?

export default ProductList; // always have to export the file called same as filename and function name
