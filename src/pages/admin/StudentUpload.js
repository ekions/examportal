// src/pages/admin/StudentsUpload.js
import React, { useState } from "react";
import axios from "axios";

const StudentsUpload = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);

  const parseLine = (line) => {
    const parts = line.trim().split(/\s+/);
    if (parts.length < 4) return null;

    const roll_number = parts[0];
    const div = parts[parts.length - 1];
    const dob = parts[parts.length - 2];
    const name = parts.slice(1, parts.length - 2).join(" ");

    if (!roll_number || !name || !dob || !div) return null;
    return { roll_number, name, dob, div };
  };

  const handleUpload = async () => {
    if (!text.trim()) {
      setLogs([{ msg: "Input is empty", success: false }]);
      return;
    }

    const lines = text.trim().split("\n");
    const students = [];
    const newLogs = [];

    for (const line of lines) {
      const student = parseLine(line);
      if (!student) {
        newLogs.push({ msg: `Invalid format: ${line}`, success: false });
        continue;
      }
      students.push(student);
    }

    if (students.length === 0) {
      setLogs(newLogs);
      return;
    }

    setLoading(true);

    for (const student of students) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/admin/students/upload`,
          { students: [student] },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        newLogs.push({ msg: `Uploaded: ${student.roll_number} - ${student.name}`, success: true });
      } catch (err) {
        newLogs.push({
          msg: `Failed: ${student.roll_number} - ${student.name} (${err.response?.data?.msg || err.message})`,
          success: false,
        });
      }
    }

    setLogs(newLogs);
    setLoading(false);
    setText("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Paste Students Data</h2>

      <p className="text-gray-600 text-sm mb-2">
        Copy-paste student data from Excel in the format:<br />
        <code>roll_number name dob div</code> (tab or space separated)
      </p>

      <textarea
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Rollno Student Name DOB-YY/mm/dd Division &#10;Rollno Student Name DOB-YY/mm/dd Division"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload Students"}
      </button>

      {/* Logs Box */}
      <div className="mt-6 max-h-60 overflow-y-auto border border-gray-300 rounded-md p-3 bg-gray-50">
        {logs.length === 0 ? (
          <p className="text-gray-500 text-sm">Logs will appear here</p>
        ) : (
          logs.map((log, idx) => (
            <p
              key={idx}
              className={`text-sm ${log.success ? "text-green-600" : "text-red-600"}`}
            >
              {log.msg}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default StudentsUpload;