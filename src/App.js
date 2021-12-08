import Navbar from "./pages/Navbar";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import "./pages/SignUp";
import HomeScreen from "./pages/HomeScreen";
import Games from "./pages/Games";
import { auth } from "./firebase-config";
import Footer from "./pages/Footer";
import { useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import Logout from "./pages/Logout";
import Dev from "./pages/Dev";
import Curso from "./pages/Curso";


function App() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
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
            </>
        }
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
