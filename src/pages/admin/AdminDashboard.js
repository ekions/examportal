import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaBookOpen, FaGraduationCap, FaBars } from "react-icons/fa";

// Sidebar navigation structure
const sidebarLinks = [
  { icon: "🏠", label: "Dashboard", active: true },
  { icon: "📝", label: "Exams" },
  { icon: "❓", label: "Questions" },
  { icon: "👨‍🎓", label: "Students" },
  { icon: "📊", label: "Analytics" },
  { icon: "📅", label: "Schedule" },
  { icon: "📁", label: "Resources" },
  { icon: "📢", label: "Announcements" },
  { icon: "⚙️", label: "Settings" },
];

const upcomingExams = [
  {
    title: "Midterm Exam",
    subject: "Mathematics",
    subjectColor: "text-blue-600",
    date: "2024-05-15",
    time: "10:00 AM",
    status: "Scheduled",
  },
  {
    title: "Final Exam",
    subject: "Physics",
    subjectColor: "text-indigo-600",
    date: "2024-05-22",
    time: "1:00 PM",
    status: "Scheduled",
  },
  {
    title: "Practice Test",
    subject: "Chemistry",
    subjectColor: "text-cyan-600",
    date: "2024-05-29",
    time: "9:00 AM",
    status: "Scheduled",
  },
];

const announcements = [
  {
    title: "Mandatory Study Session",
    detail:
      "All students are required to attend the mandatory study session on May 12th at 2 PM in the main auditorium.",
    date: "2024-05-08",
  },
  {
    title: "Project Deadline Extension",
    detail:
      "The deadline for submitting the final project is extended to May 20th. No further extensions will be granted.",
    date: "2024-05-05",
  },
];

const analyticsSubjects = ["Math", "Science", "English", "History"];

function SidebarLink({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 rounded-md w-full text-left text-gray-700 hover:bg-blue-50 ${
        active ? "bg-blue-100 font-semibold" : ""
      }`}
      type="button"
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !username) {
      handleLogout();
    }
  }, [navigate, username]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername("");
    navigate("/");
  };

  const capitalizedName =
    username.charAt(0).toUpperCase() + username.slice(1);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    }
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-start p-8">
      <div className="w-full max-w-6xl rounded-xl shadow border bg-white flex flex-col md:flex-row overflow-hidden relative">
        
        {/* Sidebar */}
        <aside
          ref={sidebarRef}
          className={`bg-white fixed md:static top-0 left-0 h-full md:h-auto w-64 md:w-60 p-6 border-r flex-shrink-0 flex flex-col justify-between transform transition-transform duration-300 z-50 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">EduPlatform</div>
              </div>
            </div>
            <nav className="flex flex-col space-y-2">
              {sidebarLinks.map((link, i) => (
                <SidebarLink
                  key={i}
                  {...link}
                  onClick={() => {
                    let path = "";
                    switch (link.label) {
                      case "Dashboard":
                        path = "/admin/dashboard";
                        break;
                      case "Exams":
                        path = "/admin/exams";
                        break;
                      case "Questions":
                        path = "/admin/questions";
                        break;
                      case "Students":
                        path = "/admin/students";
                        break;
                      case "Analytics":
                        path = "/admin/analytics";
                        break;
                      case "Schedule":
                        path = "/admin/schedule";
                        break;
                      case "Resources":
                        path = "/admin/resources";
                        break;
                      case "Announcements":
                        path = "/admin/announcements";
                        break;
                      case "Settings":
                        path = "/admin/settings";
                        break;
                      default:
                        path = "/";
                    }
                    navigate(path);
                    setIsSidebarOpen(false); // auto close on click
                  }}
                />
              ))}
            </nav>
          </div>

          {/* Logout button at bottom */}
          <div className="pt-4 border-t">
            <button
              className="w-full text-left px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              onClick={handleLogout}
              type="button"
            >
              Logout
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 bg-gray-50 overflow-auto">
          <header className="flex justify-between items-center mb-8">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FaBars />
            </button>
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </header>

          <p className="text-blue-600 text-lg mb-8">
            Welcome, {capitalizedName}!
          </p>

          {/* Quick Actions */}
          <div className="mb-10 flex gap-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded px-5 py-2 font-semibold"
              onClick={() => navigate("/admin/new-exam")}
            >
              Create New Exam
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded px-5 py-2 font-semibold"
              onClick={() => navigate("/admin/resources")}
            >
              Upload Resources
            </button>
          </div>

          {/* Management Shortcuts */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div
              className="bg-white rounded shadow p-6 cursor-pointer hover:shadow-lg"
              onClick={() => navigate("/admin/students")}
            >
              <h2 className="font-semibold text-xl mb-2">Manage Students</h2>
              <p>Add, edit, or remove student records</p>
            </div>

            <div
              className="bg-white rounded shadow p-6 cursor-pointer hover:shadow-lg"
              onClick={() => navigate("/admin/exams")}
            >
              <h2 className="font-semibold text-xl mb-2">Manage Exams</h2>
              <p>Create and schedule exams for students</p>
            </div>

            <div
              className="bg-white rounded shadow p-6 cursor-pointer hover:shadow-lg"
              onClick={() => navigate("/admin/settings")}
            >
              <h2 className="font-semibold text-xl mb-2">Admin Settings</h2>
              <p>Configure system preferences and security</p>
            </div>
          </div>

          {/* Upcoming Exams */}
          <section className="overflow-x-auto mb-10">
            <h2 className="font-semibold mb-4">Upcoming Exams</h2>
            <table className="min-w-full bg-white rounded shadow divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Exam Title</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Subject</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Time</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {upcomingExams.map((exam, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{exam.title}</td>
                    <td className={"px-6 py-4 whitespace-nowrap font-medium " + exam.subjectColor}>{exam.subject}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{exam.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{exam.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">{exam.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Recent Announcements */}
          <section className="mb-10">
            <h2 className="font-semibold mb-4">Recent Announcements</h2>
            <div className="space-y-6">
              {announcements.map((a, idx) => (
                <div key={idx} className="flex items-start space-x-4 bg-white p-4 rounded shadow">
                  <div className="text-2xl">📢</div>
                  <div>
                    <div className="font-medium">{a.title}</div>
                    <div className="text-gray-600 text-sm">{a.detail}</div>
                    <div className="text-blue-600 text-xs mt-1">{a.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Analytics Overview */}
          <section>
            <h2 className="font-semibold mb-4">Analytics Overview</h2>
            <div className="bg-white rounded shadow p-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div>
                <div className="text-gray-600 text-sm mb-1">Student Performance</div>
                <div className="text-4xl font-bold leading-none mb-1">85%</div>
                <div className="text-green-600 text-sm">Last 30 Days +5%</div>
              </div>
              <div className="flex gap-6 mt-6 md:mt-0 flex-1">
                {analyticsSubjects.map((subject, idx) => (
                  <div key={idx} className="flex flex-col items-center flex-1">
                    <div className="w-full h-20 rounded bg-gray-200 mb-3" />
                    <div className="text-gray-700">{subject}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
