import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/todo")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
      });
  }, [todo, setTodo]);
  return (
    <div className="my-5">
      <h5 className="text-center text-secondary">Total Item: {todo.length}</h5>
      <div className=" mx-5">
        {" "}
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th scope="col-6">NAME</th>
              <th scope="col-4">DETAIL</th>
            </tr>
          </thead>
          {todo?.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.detail}</td>
              <td className="d-flex justify-content-center align-items-center py-2">
                {" "}
                <button className="btn btn-outline-success me-2">
                  COMPLETED
                </button>
                <button className="btn btn-outline-danger">DELETE</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Todos;
