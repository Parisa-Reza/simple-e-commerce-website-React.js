import { CartProvider } from "./contexts/CartContext";
import { LeftPanel } from "./Components/leftPanel";
import { RightPanel } from "./Components/rightPanel";

// export const CartContext = createContext();

function App() {

  // const [cart, setCart] = useState([]);

  return (
    <CartProvider >
      <div className="flex gap-4 mt-5">
        <LeftPanel />
        <RightPanel />
      </div>
    </CartProvider>
  );
}

export default App;
