import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import Homepage from "./Pages/Homepage";
import React from "react";

const App: React.FC = () => {


  return (
    <>
    <Navbar />
    <Routes>
      <Route index element={<Homepage/>}/>
      <Route path="/" element={<Homepage/>}/>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
