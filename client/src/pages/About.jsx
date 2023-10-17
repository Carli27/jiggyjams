import React from "react";
import "./about.css";
import placeholder_image from "../assets/placeholder_image.png";

export default function About() {
  return (
    <div>
      <div className="div-box1">
        <div className="container py-2">
          <h1 className="text-center py-2">About Us</h1>
          <h4 className="text-center pb-2 my-4">Welcome to Jiggy Jams</h4>
          <div className="row">
            <div className="col">
              <div className="img-fade">
                <img
                  src={placeholder_image}
                  className="img-about img-fluid mb-4"
                  alt="food"
                />
              </div>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <p>TEST</p>
            </div>
          </div>
        </div>
      </div>
      About
    </div>
  );
}
