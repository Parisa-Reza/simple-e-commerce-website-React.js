import { CartProvider } from "./contexts/CartContext";
import { LeftPanel } from "./Components/leftPanel";
import { RightPanel } from "./Components/rightPanel";

// export const CartContext = createContext();

function App() {
  // const [cart, setCart] = useState([]);

  return (
    <CartProvider>
      <div className=" bg-gray-200 flex gap-4 ">
        <div className="lg:w-3/4">
          <LeftPanel />
        </div>
        <div className="lg:w-1/4 lg:ml-8">
          <RightPanel />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
