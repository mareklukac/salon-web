import React from "react";
import "./App.css";
import LandingPage from "./components/Sections/landingPage";
import { Route, Routes } from "react-router-dom";
import ProceduryPage from "./components/ProceduryPage/proceduryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/proceduryPage" element={<ProceduryPage />} />
    </Routes>
  );
}

export default App;
