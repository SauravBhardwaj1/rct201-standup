import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import Mens from "./Mens";
import ReqAuth from "../HOC/ReqAuth";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/mens"
        element={
          <ReqAuth>
            <Mens />
          </ReqAuth>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
