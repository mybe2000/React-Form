import React from "react";
import { useState } from "react";

function SignupForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("please enter a valid username or password");
    } else
      try {
        const res = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/signup",
          {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {
              "Content-type": "Application/json",
            },
          }
        );
        const json = await res.json();
        if (json.success) {
          setError(null);
          setUsername("");
          setPassword("");
          setToken(json.token);
          alert("successfully signed up");
        }
        console.log(json);
      } catch (error) {
        console.log(error);
        setError(true);
      }
  };

  return (
    <div>
      {error && <p>Something went wrong, please try again later</p>}
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
