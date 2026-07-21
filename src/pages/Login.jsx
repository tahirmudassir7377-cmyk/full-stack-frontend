import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/api";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await login(formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-32 pb-20 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-600 mb-8">Login to your account</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;