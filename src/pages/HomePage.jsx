import { LeftPanel } from "../Components/leftPanel";
import { RightPanel } from "../Components/rightPanel";
import { CartProvider } from "../contexts";

export const HomePage = () => {
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
};
