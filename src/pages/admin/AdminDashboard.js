import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaBookOpen, FaGraduationCap } from "react-icons/fa";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !username) navigate("/");
  }, [navigate, username]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaUserShield className="text-blue-600 text-2xl" />
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <button
            className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Welcome, {username.charAt(0).toUpperCase() + username.slice(1)}!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
  className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
  onClick={() => navigate("/admin/students")}
>
  <FaGraduationCap className="text-blue-600 text-4xl mx-auto mb-2" />
  <h3 className="font-semibold text-lg">Manage Students</h3>
  <p className="text-gray-600 text-sm mt-1">Add, edit, or remove student records</p>
</div>

          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <FaBookOpen className="text-blue-600 text-4xl mx-auto mb-2" />
            <h3 className="font-semibold text-lg">Manage Exams</h3>
            <p className="text-gray-600 text-sm mt-1">Create and schedule exams for students</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <FaUserShield className="text-blue-600 text-4xl mx-auto mb-2" />
            <h3 className="font-semibold text-lg">Admin Settings</h3>
            <p className="text-gray-600 text-sm mt-1">Configure system preferences and security</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;