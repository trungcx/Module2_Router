import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Product from "./Product";
import Contact from "./Contact";
import News from "./News";
import NewsEco from "./NewsEco";
import NewsSport from "./NewsSport";
function Home(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
            <ul>
              <li>
                <Link to="/news/eco">News Eco</Link>
              </li>
              <li>
                <Link to="/news/sport">News Sport</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
      {/*  */}
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/news" element={<News />}>
          <Route path="/news/eco" element={<NewsEco />}></Route>
          <Route path="/news/sport" element={<NewsSport />}></Route>
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default Home;
