import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// pages
import Home from "./Pages/Home";
import Mint from "./Pages/Mint";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mint />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
