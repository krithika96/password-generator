import "./styles.css";
import { React, useEffect, useState } from "react";
import { Routes, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";
import Profile from "./Profile";

export default function App() {
  // const [login, setLogin] = useState(false);

  useEffect(() => {
    console.log("ComponentDidMount App");
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}
