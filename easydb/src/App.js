import "./App.css";
import Canvas from "./canvas";
import TopMenuBar from "./topMenuBar";
import { useState } from "react";

function App() {
  const [flag, setFlag] = useState(false);

  return (
    <div className="App">
      <TopMenuBar setFlag={setFlag} flag={flag} />

      <Canvas setFlag={setFlag} flag={flag} />
    </div>
  );
}
export default App;
