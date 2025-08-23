import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const subjects = ["Mathematics", "Physics", "Chemistry", "English", "History"];
const grades = ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"];
const examTypes = ["Midterm", "Final", "Practice", "Quiz"];

export default function NewExam() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [examType, setExamType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add your form validation and API submission logic here

    console.log({ title, subject, grade, examType });
    // After submission, navigate back to dashboard or elsewhere
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start pt-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-transparent mx-auto px-6 py-10"
      >
        <h1 className="text-2xl font-bold mb-8">New Exam</h1>

        {/* Exam Title */}
        <div className="mb-6">
          <label className="block font-medium mb-2" htmlFor="exam-title">
            Exam Title
          </label>
          <input
            type="text"
            id="exam-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter exam title"
            className="w-full rounded-md border border-gray-200 px-4 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>

        {/* Subject */}
        <div className="mb-6">
          <label className="block font-medium mb-2" htmlFor="subject">
            Subject
          </label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-md border border-gray-200 px-4 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          >
            <option value="">Select subject</option>
            {subjects.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        {/* Grade/Class */}
        <div className="mb-6">
          <label className="block font-medium mb-2" htmlFor="grade">
            Grade/Class (Optional)
          </label>
          <select
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="w-full rounded-md border border-gray-200 px-4 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="">Select grade/class</option>
            {grades.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* Exam Type */}
        <div className="mb-10">
          <label className="block font-medium mb-2" htmlFor="exam-type">
            Exam Type
          </label>
          <select
            id="exam-type"
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
            className="w-full rounded-md border border-gray-200 px-4 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          >
            <option value="">Select exam type</option>
            {examTypes.map((et) => (
              <option key={et} value={et}>
                {et}
              </option>
            ))}
          </select>
        </div>

        {/* Next button aligned right */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-2 rounded font-medium hover:bg-blue-700 transition w-28"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
