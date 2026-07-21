import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/api";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
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
      const data = await signup(formData);
      alert(data.message);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-32 pb-20 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
        <p className="text-gray-600 mb-8">Sign up to get started</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
            {loading ? "Creating Account..." : "Sign Up"}
          </Button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;