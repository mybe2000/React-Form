import Authenticate from "./components/Authenticate/Authenticate";
import SignupForm from "./components/SignupForm/SignupForm";
import { useState } from "react";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      {token}
      <Authenticate token={token} />
      <SignupForm setToken={setToken} />
    </>
  );
}

export default App;
