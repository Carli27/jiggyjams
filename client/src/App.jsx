import { useState, useEffect } from "react";
import "./App.css";
// if not in use/doesn't exist don't import e.g. vite logo and react logo

// import child components
import Homepage from "./components/Homepage"; // already in source so ./ then components
import { response } from "express";

function App() {
  useEffect(() => {
    getallJams();
  }, []);

  const getallJams = () => {
    console.log("hey");
    // fetch("/")
    //   .then((response) => response.json())
    //   .then((jam) => {});
  };
  return <div>Test</div>;
}
//1st component
// different component not this file - homepage or prpduct list - DONE
// state for list of all jams
// use effect to get all jams
// map through the state to display the jams
// 2nd step
//new component - jam (single jam)
//state for a jam
// use effect to get jam by id - hard code the id to get the first jam only
// display the jam

// when this is working - add the router next...
export default App;

// need to do cd client
// npm run dev... from slides
// then add to package json
// add to main.jsx the browser routes
// then app.jsx import routes from react router dom
// this is front end routing
// can create nested routes  e.g. show full list of students then individual student

// need to import any components e.g. home page, product page

// e.g. students - Link to a new page
