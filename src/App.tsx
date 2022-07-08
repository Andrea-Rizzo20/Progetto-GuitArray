import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import Homepage from "./Pages/Homepage";
import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [login, setLogin] = useState(false)
  useEffect(()=>{
      console.log(login)
  },[login])

  return (
    <>
    <Navbar login={login} setLogin={setLogin}  />
    <Routes>
      <Route index element={<Homepage/>}/>
      <Route path="/" element={<Homepage/>}/>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
