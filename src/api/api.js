// src/api.js
const API_BASE_URL = "https://passes-shorts-eastern-southeast.trycloudflare.com/api/admin";

// --- AUTH FUNCTIONS ---
export async function registerAdmin(username, password) {
  const res = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function loginAdmin(username, password) {
  const res = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();

  // store token in localStorage for later use
  if (data.token) {
    localStorage.setItem("adminToken", data.token);
  }

  return data;
}

// --- PROTECTED ROUTES ---
export async function getDashboard() {
  const token = localStorage.getItem("adminToken");
  if (!token) throw new Error("No token found, please log in");

  const res = await fetch(`${API_BASE_URL}/dashboard`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard");
  }

  return res.json();
}