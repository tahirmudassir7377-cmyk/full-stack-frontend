const BASE_URL = "https://fullstackbackend-project.bonto.run/api";

const request = async (endpoint, options = {}) => {
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

export const signup = (formData) =>
  request("/auth/signup", { method: "POST", body: JSON.stringify(formData) });

export const login = (formData) =>
  request("/auth/login", { method: "POST", body: JSON.stringify(formData) });

export const logout = () => request("/auth/logout", { method: "POST" });

export const resendVerification = (email) =>
  request("/auth/resend-verification", {
    method: "POST",
    body: JSON.stringify({ email }),
  });

export const getProfile = () => request("/auth/profile");