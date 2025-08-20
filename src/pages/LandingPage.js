import React, { useState } from "react";
import {
  FaGraduationCap,
  FaUserShield,
  FaBookOpen,
  FaCalendarAlt,
} from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaGraduationCap className="text-blue-600 text-2xl" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">ExamPortal</h1>
              <p className="text-sm text-gray-500 -mt-1">
                Online Examination System
              </p>
            </div>
          </div>

          {/* Right Side Info */}
          <div className="flex items-center space-x-6 text-gray-600 text-sm">
            <div className="flex items-center space-x-1">
              <FiUsers className="text-gray-500" />
              <span>10,000+ Students</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaBookOpen className="text-gray-500" />
              <span>500+ Exams</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaUserShield className="text-gray-500" />
              <span>Secure & Reliable</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center text-center px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Smart Online Examination{" "}
          <span className="text-blue-600">Platform</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Secure, reliable, and user-friendly platform for conducting online
          examinations. <br />
          Perfect for educational institutions and certification programs.
        </p>

        {/* Tabs */}
        <div className="mt-8 flex space-x-4 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("student")}
            className={`flex items-center px-6 py-2 text-sm font-medium rounded-md ${
              activeTab === "student"
                ? "bg-white shadow"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            <FaGraduationCap className="mr-2" /> Student Login
          </button>
          <button
            onClick={() => setActiveTab("admin")}
            className={`flex items-center px-6 py-2 text-sm font-medium rounded-md ${
              activeTab === "admin"
                ? "bg-white shadow"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            <FaUserShield className="mr-2" /> Admin / Teacher
          </button>
        </div>

        {/* Login Box */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-md text-left">
          {activeTab === "student" ? (
            <>
              <h3 className="flex items-center text-lg font-semibold mb-4">
                <FaGraduationCap className="text-blue-600 mr-2" /> Student Portal
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Enter your roll number and date of birth to access your exams
              </p>

              <div className="space-y-4">
                {/* Roll Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Roll Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your roll number"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
                  Access Exam Portal
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="flex items-center text-lg font-semibold mb-4">
                <FaUserShield className="text-blue-600 mr-2" /> Admin / Teacher
                Portal
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Enter your credentials to manage exams and students
              </p>

              <div className="space-y-4">
                {/* ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User ID
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your ID"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
                  Access Admin Portal
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Why Choose ExamPortal?
          </h2>
          <p className="mt-2 text-gray-600">
            Built with security, scalability, and user experience in mind
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <FaUserShield className="mx-auto text-blue-600 text-4xl" />
              <h3 className="mt-4 text-lg font-semibold">Secure & Reliable</h3>
              <p className="text-gray-600 text-sm mt-2">
                Enterprise-grade security with real-time monitoring and fraud
                detection
              </p>
            </div>

            <div>
              <FaCalendarAlt className="mx-auto text-blue-600 text-4xl" />
              <h3 className="mt-4 text-lg font-semibold">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm mt-2">
                Schedule exams with custom time limits and automatic submission
              </p>
            </div>

            <div>
              <FaBookOpen className="mx-auto text-blue-600 text-4xl" />
              <h3 className="mt-4 text-lg font-semibold">Easy Management</h3>
              <p className="text-gray-600 text-sm mt-2">
                Intuitive interface for creating questions and managing student
                results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <div className="flex items-center space-x-2">
            <FaGraduationCap className="text-blue-600" />
            <span className="font-medium">ExamPortal</span>
            <span>Secure Online Examinations</span>
          </div>
          <p className="mt-2 md:mt-0">© 2024 ExamPortal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;