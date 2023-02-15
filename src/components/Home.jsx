import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Notes from "./Notes";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("Authorization") === null) navigate("/login");
  }, []);

  return (
    <div className="container">
      {sessionStorage.getItem("Authorization") !== null && <Notes />}
    </div>
  );
}

export default Home;
