import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import  Contact  from "./components/sections/Contact";

// Helper component for main sections on home tab
function MainContent({ menuOpen, setMenuOpen }) {
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
