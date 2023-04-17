import React, { useState } from "react";

function TodoList(props) {
  const [todoList, setToDoList] = useState([]);
  const [data, setData] = useState("");

  const [editIndex, setEditIndex] = useState(-1);
  const [editData, setEditData] = useState("");
  //
  const handleAddJob = () => {
    setToDoList([...todoList, data]);
    setData("");
  };
  const handleDelete = (jobIndex) => {
    // console.log(index);
    let newTodoList = [...todoList];
    newTodoList.splice(jobIndex, 1);
    setToDoList(newTodoList);
  };
  const handleEdit = (jobIndex) => {
    setEditIndex(jobIndex);
    setEditData(todoList[jobIndex]);
  };
  const handleSaveEdit = (jobIndex) => {
    let nextTodoList = [...todoList];
    nextTodoList[jobIndex] = editData;
    setToDoList(nextTodoList);
    setEditIndex(-1);
  };
  //
  //Main render
  return (
    <div>
      <h2>To do list</h2>
      <input
        type="text"
        value={data}
        onChange={(event) => setData(event.target.value)}
      />
      <button onClick={handleAddJob}>Add job</button>
      {/* render todoList */}
      {!todoList.length ? (
        <p>Nothing in todoList. Make it!</p>
      ) : (
        <div>
          <br />
          {todoList.map((job, jobIndex) => {
            return (
              <div key={jobIndex}>
                {jobIndex == editIndex ? (
                  <>
                    <input
                      type="text"
                      value={editData}
                      onChange={(event) => setEditData(event.target.value)}
                    />
                    <button onClick={() => handleSaveEdit(jobIndex)}>
                      Save
                    </button>
                    <button onClick={() => setEditIndex(-1)}>Cancel</button>
                    <br />
                  </>
                ) : (
                  <>
                    {job}{" "}
                    <button onClick={() => handleEdit(jobIndex)}>Edit</button>
                    <button onClick={() => handleDelete(jobIndex)}>
                      Delete
                    </button>
                    <br />
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TodoList;
