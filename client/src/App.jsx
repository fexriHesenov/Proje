import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import BillPage from "./pages/BillPage";
import Statistika from "./pages/Statistika";
import CoustumerPage from "./pages/CoustumerPage";
import Register from "./pages/Register";
import Login from "./pages/Login";




function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/bills" element={<BillPage/>}/>
            <Route path="/custumer" element={<CoustumerPage/>}/>
            <Route path="/statistika" element={<Statistika/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
   </BrowserRouter>
  );
}

export default App;
