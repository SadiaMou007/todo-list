import React, { useRef } from "react";

const Todo = () => {
  const nameRef = useRef("");
  const detailRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const detail = detailRef.current.value;

    console.log(name, detail);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto my-5 border p-3 rounded">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div class="my-auto col-lg-3">
              <input
                placeholder="Name"
                type="text"
                name="name"
                class="form-control border-info"
                id="name"
                ref={nameRef}
                required
              />
            </div>
            <div class="my-2 col-lg-6">
              <textarea
                placeholder="Task Details"
                ref={detailRef}
                required
                class="form-control border-info"
                name="description"
                id="des"
                rows="3"
              ></textarea>
            </div>
            <div className="col-lg-3 my-auto">
              <button type="submit" class="btn btn-outline-success ">
                ADD TASK
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Todo;
