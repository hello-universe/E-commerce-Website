
import { useState } from "react"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar/Navbar"
import { CartContextProvider } from "./Context/cartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";

function App() {
  const [category, setCategory] = useState('men');
const changeCategory = (cate)=>{
  setCategory(cate)
}
  return (
    <BrowserRouter>
    <CartContextProvider>
    <div className="w-[95%] mx-auto"> 
      <Navbar category={category} changeCategory={changeCategory} />
      <Routes>
        <Route path="/" element={<Hero category={category} />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App