// src/pages/admin/StudentsUpload.js
import React, { useState } from "react";
import axios from "axios";

const StudentsUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a CSV file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setMessage("");

      const token = localStorage.getItem("token"); // assuming admin is logged in

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/admin/students/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(res.data.msg || "Students uploaded successfully!");
      setFile(null);
    } catch (err) {
      setMessage(
        err.response?.data?.msg || err.message || "Upload failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload Students CSV</h2>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload CSV"}
      </button>

      {message && (
        <p className={`mt-4 text-center ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default StudentsUpload;