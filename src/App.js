import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentUpload from "./pages/admin/StudentUpload";
import Dashboard from "./pages/student/studenthomepage";
import ExamsPage from "./pages/student/studentviewexam";
import NewExam from "./pages/admin/createnewexam";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<StudentUpload />} />
        <Route path="/student/home" element={<Dashboard />} />
        <Route path="/student/exams" element={<ExamsPage />} />
        <Route path="/" element={<AdminDashboard username="harper" />} />
        <Route path="/admin/new-exam" element={<NewExam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;