import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";
import Add from "./src/pages/Add";

const AllRouts = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Add" element={<Add/>} />
      </Routes>
    </div>
  );
};

export default AllRouts;
