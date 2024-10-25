import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Teams from "./pages/Teams.tsx";
import Games from "./pages/Games.tsx";
import Rules from "./pages/Rules.tsx";
import Participants from "./pages/Participants.tsx";
import Gallery from "./pages/Gallery.tsx";
import Register from "./pages/Register.tsx"
import Fixture from "./pages/Fixtures.tsx"

export default function App() {
  return (
    <Router>
      <div
        style={{ fontFamily: "MedievalSharp, sans-serif", fontSize: "2rem" }}
        className="flex flex-col min-h-screen bg-black text-white relative"
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat z-0 opacity-60"
          style={{
            backgroundImage: "url('/bg-1.jpg')",
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        ></div>

        <div className="relative z-10 flex flex-col ">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/games" element={<Games />} />
              <Route path="/participants" element={<Participants />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/fixture" element={<Fixture />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

