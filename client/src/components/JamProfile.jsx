import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function JamProfile() {
  // type rfc to create the start of the file
  // below breaks the code
  const { id } = useParams(); // useparams lets you reach into the url - part of react router method
  const [JamProfile, setJamProfile] = useState(null); // need initate as null to check later

  useEffect(() => {
    // always runs when your pages loads  - e.g. allJams function
    // have to call getAllJams as you can't name the same as the state e.g. allJams which holding the data
    getJamProfile();
  }, []);

  const getJamProfile = async () => {
    const response = await fetch(`http://localhost:4000/products/${id}`);
    const data = await response.json();
    console.log(data);
    setJamProfile(data);
  };
  return (
    <div>
      {JamProfile && (
        <div>
          <p>{JamProfile[0].name}</p>
          <p>{JamProfile[0].description}</p>
          <p>{JamProfile[0].ingredients}</p>
        </div>
      )}
    </div>
  );
}
