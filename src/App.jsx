import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { Usage } from "./components/sections/Usage";
import { Custom } from "./components/sections/Custom";
import "./index.css";
import  Model  from "./components/sections/Model";

// Helper component for main sections on home tab
function MainContent({ menuOpen, setMenuOpen }) {
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Usage />
      <Custom />
    </>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  if (!isLoaded) {
    return <LoadingScreen onComplete={() => setIsLoaded(true)} />;
  }

  return (
    <div
      className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } bg-black text-gray-100`}
    >
      <Router basename="/bioreactor">
        <Routes>
          <Route
            path="/"
            element={<MainContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
          />
          <Route path="/model" element={<Model />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
