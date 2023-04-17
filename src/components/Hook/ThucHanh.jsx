import React, { useState } from "react";

function ThucHanh(props) {
  //*** useState */
  // Thuc hanh 2
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);
  // Thuc hanh 3
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  // Thuc hanh 4
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([
    { name: "John", age: 25 },
    { name: "Mary", age: 30 },
    { name: "Peter", age: 35 },
    { name: "Jane", age: 40 },
  ]);

  //   ****function***//
  // Thuc hanh 3
  function handleChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    setTasks([...tasks, newTask]);
    setNewTask("");
    console.log(tasks);
  }
  // Thuc hanh 4
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };
  const filteredData = data.filter(
    (people) => people.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );
  //
  return (
    <div>
      {/* [Thực hành] 2. */}
      <div>
        <h4>
          [Thực hành] 2. Sử dụng useState để làm ứng dụng hiển thị danh sách sản
          phẩm bằng React Hook
        </h4>
        {products.map((product) => (
          <ul key={product.id}>
            <li>{product.name}</li>
            <li>{product.price}</li>
          </ul>
        ))}
      </div>
      {/* [Thực hành] 3. */}
      <div>
        <h4>[Thực hành] 3. Sử dụng useState tạo các task bằng React Hook</h4>
        <ul>
          {tasks.map((task, index) => {
            <li key={index}>{task}</li>;
          })}
        </ul>
        <input type="text" value={newTask} onChange={handleChange} />
        <p>{tasks.toString()}</p>
        <button onClick={addTask}>Add Task</button>
      </div>
      {/* [Thực hành] 4. */}
      <div>
        <h4>
          [Thực hành] 4. Sử dụng useState viết ứng dụng tìm kiếm bằng React Hook
        </h4>
        <input
          type="text"
          value={filter}
          onChange={handleFilter}
          placeholder="Search"
        />
        <ul>
          {filteredData.map((people, index) => (
            <li key={index}>
              {people.name} ({people.age})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ThucHanh;
