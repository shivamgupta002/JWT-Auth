import "./App.css";
import Controller from "./Controller";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Controller />
      </BrowserRouter>
    </>
  );
}

export default App;
