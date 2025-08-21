const API_BASE_URL = "https://passes-shorts-eastern-southeast.trycloudflare.com/api/admin";

export async function registerAdmin(username, password) {
  const res = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function loginAdmin(username, password) {
  const res = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}