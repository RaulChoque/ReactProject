import { useState } from "react";
import Navbar from "./components/layout/navbar";
import Home from "./components/page/home/Home";
import ItemList from "./components/page/home/itemList/ItemList";

function App() {

  const [saludo, setSaludo] = useState ("Hola como estas?")

  return (
    <div>
      <Navbar />
      <h1>hola mundo</h1>
      <Home nombre={"juancito"} apellido={"perez"} />
      <ItemList saludo={saludo} />
    </div>
  )
}

export default App
