import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Todos = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/todo")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
      });
  }, [todo, setTodo]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/todo/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          const remaining = todo.filter((value) => value._id !== id);
          setTodo(remaining);
          toast("Successfully Delete");
        });
    }
  };
  const handleComplete = (index) => {
    const v = todo[index];
    console.log(v);
  };

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
          {todo?.map((item, index) => (
            <tr>
              <td class="myElement">{item.name}</td>
              <td class="myElement">{item.detail}</td>
              <td className="d-flex justify-content-center align-items-center py-2">
                {" "}
                <button
                  className="btn btn-outline-success me-2"
                  onClick={() => handleComplete(index)}
                >
                  COMPLETED
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Todos;
