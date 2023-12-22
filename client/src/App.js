import axios from "axios";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Add from "./page/Add";
import Blog from "./page/Blog";
import Edit from "./page/Edit";
import Home from "./page/Home";
import Login from "./page/Login";
import About from "./page/About";
import Delete from "./page/Delete";
import Logout from "./page/Logout";
import Contact from "./page/Contact";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const timestamp = 1000 * 60 * 3 - 5;

    let interval = setInterval(() => {
      if (token !== null) {
        updateToken();
      }
    }, timestamp);

    return () => {
      clearInterval(interval);
    };
  }, [token]);

  const updateToken = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_AUTH_API}/private/refreshtoken`;

      const response = await axios.get(apiUrl, {
        headers: {
          token: window.localStorage.getItem("token"),
        },
      });

      if (response.status === 200) {
        const data = await response.data;
        window.localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.log(error);
      window.localStorage.removeItem("token");
    }

    console.log("Inside update token");
  }
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/delete/:id" element={<Delete />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
