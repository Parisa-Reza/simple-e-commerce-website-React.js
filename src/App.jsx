import { createContext, useState } from "react";
import { LeftPanel } from "./Components/leftPanel";
import { RightPanel } from "./Components/rightPanel";

export const CartContext = createContext();

function App() {
  
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="flex gap-4 mt-5">
        <LeftPanel />
        <RightPanel />
      </div>
    </CartContext.Provider>
  );
}

export default App;
