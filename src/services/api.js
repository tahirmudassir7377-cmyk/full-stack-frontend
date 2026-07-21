const BASE_URL = "https://fullstackbackend-project.bonto.run/api";

const request = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

export const signup = (formData) =>
  request("/auth/signup", {
    method: "POST",
    body: JSON.stringify(formData),
  });

export const login = (formData) =>
  request("/auth/login", {
    method: "POST",
    body: JSON.stringify(formData),
  });

export const getProfile = () => request("/auth/profile");