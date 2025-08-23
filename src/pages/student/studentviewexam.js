import React from "react";

// Dummy data for exams
const exams = [
	{
		title: "Mathematics Exam",
		date: "October 26, 2024",
		start: "9:00 AM",
		end: "11:00 AM",
		duration: "2 hours",
		mode: "Online",
		status: "Registered",
	},
	{
		title: "Science Exam",
		date: "November 15, 2024",
		start: "1:00 PM",
		end: "3:30 PM",
		duration: "2.5 hours",
		mode: "In-person",
		status: "Pending",
	},
	{
		title: "English Exam",
		date: "December 5, 2024",
		start: "10:00 AM",
		end: "12:00 PM",
		duration: "2 hours",
		mode: "Online",
		status: "Completed",
	},
];

const ExamCard = ({ exam }) => (
	<div className="mb-10">
		<div className="font-semibold text-lg mb-1">{exam.title}</div>
		<div className="text-blue-700 text-sm mb-3">
			Date: {exam.date}, {exam.start} - {exam.end} &nbsp; Duration:{" "}
			{exam.duration} &nbsp; Mode: {exam.mode} &nbsp; Status: {exam.status}
		</div>
		<button className="bg-gray-200 rounded-md px-4 py-2 text-gray-700 font-medium">
			Start Exam
		</button>
	</div>
);

const ExamsPage = () => (
	<div className="min-h-screen bg-gray-50 flex flex-col">
		{/* Top Bar */}
		<div className="flex items-center justify-between px-6 py-3 bg-white rounded-t-2xl shadow-sm">
			<div className="flex items-center gap-2">
				<span className="text-2xl">📄</span>
				<span className="text-lg font-bold tracking-tight">EduPath</span>
			</div>
			
			<div className="flex items-center gap-4">
				<button className="bg-gray-100 p-2 rounded-full">
					<span className="text-xl">🔔</span>
				</button>
				<img
					src="https://randomuser.me/api/portraits/women/44.jpg"
					alt="Profile"
					className="w-9 h-9 rounded-full object-cover"
				/>
			</div>
		</div>

		{/* Page Content */}
		<main className="flex-1 bg-gray-50 rounded-b-2xl px-6 md:px-16 py-10">
			<h1 className="text-3xl font-bold mb-10">Exams</h1>
			{exams.map((exam, idx) => (
				<ExamCard exam={exam} key={idx} />
			))}
		</main>
	</div>
);

export default ExamsPage;
