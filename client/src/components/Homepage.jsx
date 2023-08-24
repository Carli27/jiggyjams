import React from "react";
import homepage_scotch from "../assets/homepage_scotch.png";
import { Link } from "react-router-dom"; // need to import the link

export default function Homepage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">Homepage</div>
        <img
          src={homepage_scotch}
          alt="scotch bonnet chilli jam"
          className="img-fluid"
        />
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <Link to={`/products`}>
          <button
            type="button"
            className="btn btn-secondary btn-lg btn btn-dark"
          >
            SHOP THE JAM
          </button>
        </Link>
      </div>
    </div>
  );
}

/*To do
- change products url to shop 
*/
