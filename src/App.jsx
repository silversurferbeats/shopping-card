import "./App.css";
import {Routes ,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <div>
        <Navbar className="" />
      </div>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
