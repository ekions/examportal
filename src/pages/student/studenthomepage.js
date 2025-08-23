import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import

// Sidebar navigation items (removed Notifications and Practice)
const SIDEBAR_LINKS = [
  { icon: "🏠", label: "Home", target: "home" },
  { icon: "📝", label: "Exams", target: "exams" },
  { icon: "🗓️", label: "Calendar", target: "calendar" }
];

const Sidebar = ({ visible, onClose, current, setCurrent }) => (
  <aside
    className={`bg-white w-60 max-w-[80vw] rounded-l-2xl p-6 flex flex-col justify-between min-h-full shadow-sm fixed md:static top-0 left-0 h-full z-30 transition-transform duration-300 ${
      visible ? "translate-x-0" : "-translate-x-full"
    } md:translate-x-0`}
    style={{ minWidth: "200px" }}
  >
    <nav>
      <div className="space-y-2">
        {SIDEBAR_LINKS.map((link) => (
          <SidebarLink
            key={link.label}
            icon={link.icon}
            label={link.label}
            target={link.target}
            active={current === link.target}
            onClick={() => {
              setCurrent(link.target);
              const el = document.getElementById(link.target);
              if (el) el.scrollIntoView({ behavior: "smooth" });
              if (onClose) onClose();
            }}
          />
        ))}
      </div>
    </nav>
  </aside>
);

const SidebarLink = ({ icon, label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 w-full text-left hover:bg-blue-50 ${
      active ? "bg-blue-100 font-semibold" : ""
    }`}
    style={{ textDecoration: "none" }}
    role="link"
    tabIndex={0}
  >
    <span className="text-lg">{icon}</span>
    {label}
  </button>
);

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700 font-medium"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Profile options"
      >
        <span className="text-xl">👤</span>
        <span className="hidden md:inline">Profile</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Edit Profile
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Change Password
          </button>
          <button
            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const PerformanceCard = ({ title, value, diff, diffColor }) => (
  <div className="bg-white border border-gray-200 rounded-xl px-8 py-6 min-w-[180px] mb-4 md:mb-0 flex-1">
    <div className="text-gray-500 font-medium">{title}</div>
    <div className="text-2xl font-semibold mt-2">{value}</div>
    <div className={`mt-2 ${diffColor} font-medium text-sm`}>{diff}</div>
  </div>
);

const TestDate = ({ label, date }) => (
  <div className="flex items-center bg-gray-100 px-5 py-3 rounded-xl gap-3 w-full md:w-64">
    <span className="text-xl">📅</span>
    <div>
      <div className="font-medium">{label}</div>
      <div className="text-gray-500 text-sm">{date}</div>
    </div>
  </div>
);

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const navigate = useNavigate(); // Add this line

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar with left-aligned welcome and responsive icons */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 bg-white shadow-sm">
        <div className="flex-1 flex justify-start">
          <h1 className="text-2xl font-semibold text-left">Welcome back, Emily</h1>
        </div>
        <div className="flex gap-3 md:gap-6 items-center mt-4 md:mt-0">
          <button
            className="md:hidden flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700 font-medium"
            onClick={() => setSidebarVisible(true)}
            aria-label="Open menu"
          >
            <span className="text-xl">☰</span>
          </button>
          <ProfileMenu />
        </div>
      </div>

      {/* Main layout */}
      <div className="flex">
        {/* Desktop sidebar */}
        <div className="hidden md:block">
          <Sidebar
            visible={true}
            onClose={() => {}}
            current={currentSection}
            setCurrent={setCurrentSection}
          />
        </div>

        {/* Mobile sidebar and overlay */}
        {sidebarVisible && (
          <>
            <div
              className="fixed inset-0 z-20 bg-black bg-opacity-40 md:hidden"
              onClick={() => setSidebarVisible(false)}
              aria-label="Overlay"
            />
            <Sidebar
              visible={sidebarVisible}
              onClose={() => setSidebarVisible(false)}
              current={currentSection}
              setCurrent={setCurrentSection}
            />
          </>
        )}

        {/* Main content */}
        <main className="flex-1 p-4 md:p-10 bg-gray-50 rounded-r-2xl">
          {/* Exams section */}
          <section
            className="flex flex-col md:flex-row items-start gap-8 mb-8"
            id="exams"
          >
            <div>
              <h2 className="text-lg font-semibold">Exam Overview</h2>
              <div className="mt-2">
                <div className="font-medium text-gray-600">Upcoming Exams</div>
                <div className="text-sm text-gray-400">
                  View your upcoming exams and registration deadlines.
                </div>
                <button
                  className="bg-gray-200 rounded-lg px-4 py-2 mt-3 text-gray-700 font-medium flex items-center gap-2"
                  onClick={() => navigate("/student/exams")} // Connect to studentviewexam.js
                >
                  View Exams <span>&rarr;</span>
                </button>
              </div>
            </div>
          </section>

          {/* Performance section */}
          <section className="mb-10" id="performance">
            <h3 className="font-semibold mb-4">Performance Snapshot</h3>
            <div className="flex flex-col md:flex-row gap-8">
              <PerformanceCard
                title="Recent Scores"
                value="85%"
                diff="+5%"
                diffColor="text-green-600"
              />
              <PerformanceCard
                title="Progress"
                value="70%"
                diff="+10%"
                diffColor="text-green-600"
              />
            </div>
          </section>

          {/* Upcoming Test Dates */}
          <section className="mb-8" id="calendar">
            <h3 className="font-semibold mb-2">Upcoming Test Dates</h3>
            <div className="space-y-2">
              <TestDate label="Math Exam" date="July 15, 2024" />
              <TestDate label="Science Exam" date="July 22, 2024" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;