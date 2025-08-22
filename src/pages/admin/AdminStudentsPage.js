import React, { useState } from "react";
import axios from "axios";

const AdminStudentsPage = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/admin/students/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setMessage(res.data.msg || "Students uploaded successfully!");
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.msg || "Upload failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-20">
      <h2 className="text-2xl font-bold mb-4">Upload Students CSV</h2>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="border p-2 rounded w-full"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload CSV"}
      </button>

      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
};

export default AdminStudentsPage;