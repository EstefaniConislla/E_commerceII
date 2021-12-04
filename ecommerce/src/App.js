/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemList from "./Components/Item";
import ItemList2 from "./Components/ItemList2";
import NavBar from "./Components/NavBar";
import { CartProvider } from "./Views/CartContext";
import Home from "./Views/Home";
import ItemListContainer from "./Views/ItemListContainer";
import Login from "./Views/Login";
import Register from "./Views/Register";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<ItemListContainer />} />
        <Route path="/Products/:id" element={<ItemList2 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
     
    </BrowserRouter>
  );
};

export default App;
