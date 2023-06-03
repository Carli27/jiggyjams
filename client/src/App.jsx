import { useState, useEffect } from "react";
import "./App.css";
// if not in use/doesn't exist don't import e.g. vite logo and react logo

// import child components
import ProductList from "./components/ProductList"; // already in source so ./ then components

import JamProfile from "./components/JamProfile";

export default function App() {
  const [currentJamProfile, setCurrentJamProfile] = useState(null);

  const showJamProfile = async (id) => {
    //present from fetching the same jam twice
    if (currentJamProfile && currentJamProfile.id === id) return;
    try {
      const result = await fetch(`http://localhost:4000/products/${id}`);
      if (result.ok) {
        const data = await result.json();
        setCurrentJamProfile(data[0]);
      } else {
        console.log(`server error: ${result.status}`);
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <ProductList currentJamProfile={currentJamProfile} />
      <JamProfile />
    </div>
  );
}
//1st component
// different component not this file - homepage or product list - DONE
// state for list of all jams
// use effect to get all jams
// map through the state to display the jams
// 2nd step
//new component - jam (single jam)
//state for a jam
// use effect to get jam by id - hard code the id to get the first jam only
// display the jam

// when this is working - add the router next...
// export default App;

// need to do cd client
// npm run dev... from slides
// then add to package json
// add to main.jsx the browser routes
// then app.jsx import routes from react router dom
// this is front end routing
// can create nested routes  e.g. show full list of students then individual student

// need to import any components e.g. home page, product page

// e.g. students - Link to a new page
