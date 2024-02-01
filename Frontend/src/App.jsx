
import { useState } from "react"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar/Navbar"


function App() {
  const [category, setCategory] = useState('men');
const changeCategory = (cate)=>{
  setCategory(cate)
}
  return (
    <div className="w-[95%] mx-auto"> 
      <Navbar category={category} changeCategory={changeCategory} />
      <Hero category={category}/>
    </div>
  )
}

export default App