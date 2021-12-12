import Navbar from "./pages/Navbar";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import "./pages/SignUp";
import HomeScreen from "./pages/HomeScreen";
import Games from "./pages/Games";
import { auth } from "./firebase-config";
import Footer from "./pages/Footer";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import Logout from "./pages/Logout";
import Dev from "./pages/Dev";
import Curso from "./pages/Curso";
import Consulta from "./pages/Consulta";
import OneSignal from 'react-onesignal';


function App() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(()=>{
      OneSignal.init({appId: 'ab823725-65e6-4473-b36f-53769b127239'})
  });


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {
          !user&&
            <>
              <Route path="/" element={<SignIn />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
            </>
        }
        {
          user&&
            <>
              <Route path="/home" element={<HomeScreen />}></Route>
              <Route path="/games" element={<Games />}></Route>
              <Route path="/dev" element={<Dev />}></Route>
              <Route path="/curso" element={<Curso />}></Route>
              <Route path="/consulta" element={<Consulta />}></Route>
            </>
        }
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
