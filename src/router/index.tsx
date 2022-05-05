import React from "react";
import { SignIn } from "../screens/signin";
import { SignUp } from "../screens/signup";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
    </BrowserRouter>
  );
};