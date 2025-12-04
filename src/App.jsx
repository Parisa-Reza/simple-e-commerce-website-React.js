
// import "./App.css";
import { LeftPanel } from "./Components/leftPanel/LeftPanel";
import { RightPanel } from "./Components/RightPanel";

function App() {

  return (
 
    <div className="flex gap-4 mt-5">
      <LeftPanel/>
      <RightPanel/>
    </div>

  );
}

export default App;
