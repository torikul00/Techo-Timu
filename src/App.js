import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import SingleBlogInfo from "./components/SingleBLogInfo/SingleBlogInfo";
import { createContext, useState } from "react";
import SignUp from "./components/SignUp/SignUp";
import  { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer/Footer";
import ResetPassword from "./components/Login/ResetPassword";

export const LoadBlog = createContext();
function App() {
  const [blogs, setBLogs] = useState([]);
  return (
    <div>
      <Navbar />
      <Toaster />
      <LoadBlog.Provider value={[blogs, setBLogs]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/blog/:blogID" element={<SingleBlogInfo />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Routes>
      </LoadBlog.Provider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
 