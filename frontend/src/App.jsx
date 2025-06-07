import { Routes, Route } from "react-router";
import { Element } from "react-scroll";
import NavBar from "./components/ui_components/NavBar";
import Footer from "./components/ui_components/Footer";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <NavBar
        content={
          <Routes>
            <Route path="" element={<Home />} />
          </Routes>
        }
      />
      <Element name="footer" className="active">
        <Footer />
      </Element>
    </>
  );
}

export default App;
