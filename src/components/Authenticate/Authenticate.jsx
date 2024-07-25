import React, { useState } from "react";

function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const handleClick = async () => {
    try {
      const res = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await res.json();
      setSuccessMessage(json.message);
      console.log(json);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <>
      {error && <p>Could not authenticate</p>}
      {successMessage && <p>{successMessage}</p>}
      <h2>Authenticate</h2>
      <button onClick={handleClick}>authenticate</button>
    </>
  );
}

export default Authenticate;
