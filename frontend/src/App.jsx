import { Routes, Route } from "react-router";
import Home from "./components/layout/home_route/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
