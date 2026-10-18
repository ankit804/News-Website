import { useState } from "react";
import Navbar from "./Components/Nav/Nav"
import NewsBoard from "./Components/Newsboard";

function App(){
  const [category,setCategory] = useState("general")
  return(<>
    <Navbar setCategory={setCategory}/>
    <NewsBoard category={category}/>

  </>)
}

export default App;