import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container" mx-3>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
}

export default NotFound;
