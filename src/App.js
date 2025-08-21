import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Dashboard from "./pages/studentpages/studenthomepage";
import ExamsPage from "./pages/studentpages/studentviewexam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/home" element={<Dashboard />} />
        <Route path="/student/exams" element={<ExamsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;