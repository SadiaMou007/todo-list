import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/todo");
  };
  return (
    <div className="container my-5">
      <div className="w-25 mx-auto">
        {" "}
        <button
          onClick={handleNavigate}
          className="w-100 p-2 btn btn-outline-info"
        >
          MANAGE TODO
        </button>
      </div>
    </div>
  );
};

export default Home;
