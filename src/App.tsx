import * as React from "react";
import { Router } from "./router";
import { SignIn } from "./screens/signin";
import { SignUp } from "./screens/signup";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
    </BrowserRouter>
  );
}
