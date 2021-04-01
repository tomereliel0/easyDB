import "./App.css";
import Block from "./block";
import Canvas from "./canvas";
import TopMenuBar from "./topMenuBar";
import Draggable from "react-draggable";
function App() {
  return (
    <div className="App">
      <TopMenuBar />
      <Canvas />
    </div>
  );
}

export default App;
