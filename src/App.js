import Navbar from "./pages/Navbar";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import "./pages/SignUp";
import HomeScreen from "./pages/HomeScreen";
import Games from "./pages/Games";
import { auth } from "./firebase-config";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Link to="/" />
      <Link to="/signup" />
      <Link to="/home" />

      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<HomeScreen />}></Route>
        <Route path="/games" element={<Games />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
