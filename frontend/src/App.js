import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddStartUp from "./components/AddStartUp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addstartup" element={<AddStartUp />} />
      </Routes>
    </>
  );
}

export default App;
