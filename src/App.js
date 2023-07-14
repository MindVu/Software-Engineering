import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./routes/Header";
import Footer from "./routes/Footer";
import LogIn from "./routes/LogIn";
import Register from "./routes/Register";
import "./css/style.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/login" element={<></>}></Route>
        <Route path="/register" element={<></>}></Route>
      </Routes>
      <Container
        className="d-flex justify-content-center"
        style={{ minHeight: "80vh", width: "60vw" }}
      >
        <Routes>
          <Route path="/" element={<>Home</>}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
