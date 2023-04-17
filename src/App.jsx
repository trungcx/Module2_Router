// import React, { Component } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
// {import Bai2 from "./components/Bai2/Bai2";
import Bai3 from "./components/Bai3/Bai3";
import Bai4_parent from "./components/Bai4/Bai4_parent";
import Test from "./components/Test";
import Parent_Comp from "./components/ParentChildDataExchange/Parent_Comp";
import Child_Comp from "./components/ParentChildDataExchange/Child_Comp";
import Child_Func_Comp from "./components/ParentChildDataExchange/Child_Func_Comp";
import Form from "./components/Lifecycle/Exercise/Form";
import DemoBootstrap from "./components/UI/DemoBootstrap";
import DemouseState from "./components/Hook/DemouseState";
import ThucHanh from "./components/Hook/ThucHanh";
import OrderForm from "./components/Hook/OrderForm";
import TemperatureConverter from "./components/Hook/TemperatureConverter";
import DemoUseEffect from "./components/Hook/DemoUseEffect";
import DemoUseContext from "./components/Hook/DemoUseContext";
import DemoUseReducer from "./components/Hook/DemoUseReducer";
import TodoList from "./components/Hook/TodoList";
// import Calculator from "./components/Calculator/Calculator";}

import Home from "./components/RouterSecond/Home";
import About from "./components/RouterSecond/About";
import Contact from "./components/RouterSecond/Contact";
import ContactUser from "./components/RouterSecond/ContactUser";
import ContactItem from "./components/RouterSecond/ContactItem";
import ContactIndex from "./components/RouterSecond/ContactIndex";
import NotFound from "./components/RouterSecond/NotFound";
import Product from "./components/RouterSecond/Product";
import Checkout from "./components/RouterSecond/Checkout";
import Login from "./components/RouterSecond/Login";
import Course from "./components/RouterSecond/Course";
import CourseDetail from "./components/RouterSecond/CourseDetail";
import CourseDetailByTypeId from "./components/RouterSecond/CourseDetailByTypeId";
function App() {
  const navLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "red" : "aqua",
    color: isActive ? "aqua" : "red",
  });
  return (
    <div className="App" style={{ padding: 20 }}>
      {/* Su dung Link */}
      {/* <div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
            <ul>
              <li>
                <Link to="/contact/contactUser">contact User</Link>
              </li>
              <li>
                <Link to="/contact/contactItem">contact Item</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div> */}
      {/* Su dung navLink */}
      <div>
        <ul>
          <li>
            <NavLink to="/" style={navLinkStyle}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={navLinkStyle}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={navLinkStyle}>
              CONTACT
            </NavLink>
            <ul>
              <li>
                <Link to="/contact/contactUser">contact User</Link>
              </li>
              <li>
                <Link to="/contact/contactItem">contact Item</Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/product" style={navLinkStyle}>
              PRODUCT
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />}>
          {/* Nested route */}
          <Route index element={<ContactIndex />}></Route>
          <Route path="contactUser" element={<ContactUser />}></Route>
          <Route path="contactItem" element={<ContactItem />}></Route>
        </Route>
        <Route path="/product" element={<Product />} />
        {/*  */}
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* Dynamic router */}
        <Route path="/course" element={<Course />}></Route>
        <Route path="/course/:courseId" element={<CourseDetail />}></Route>
        <Route
          path="/course/:courseType/:courseId"
          element={<CourseDetailByTypeId />}
        ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Bai2 /> */}
      {/* <Bai3 /> */}
      {/* <Bai4 /> */}
      {/* <Bai4_tryClass /> */}
      {/* <Bai4_parent /> */}
      {/* <Test /> */}
      {/* <Parent_Comp /> */}
      {/* <Child_Comp /> */}

      {/* <Lifecycle_Comp /> */}
      {/* <Form /> */}
      {/* <DemoBootstrap /> */}
      {/* <DemouseState /> */}
      {/* <ThucHanh /> */}
      {/* <OrderForm /> */}
      {/* <TemperatureConverter /> */}
      {/* <DemoUseEffect /> */}
      {/* <DemoUseContext /> */}
      {/* <DemoUseReducer /> */}
      {/* <TodoList /> */}
      {/* <Calculator /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
