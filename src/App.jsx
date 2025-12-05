import { useState } from "react";
import { LeftPanel } from "./Components/leftPanel";
import { RightPanel } from "./Components/rightPanel";

function App() {

  const [cart,setCart]= useState([])
  return (
 
    <div className="flex gap-4 mt-5">
      <LeftPanel setCart={setCart}/>
      <RightPanel cart={cart}/>
    </div>

  );
}

export default App;
