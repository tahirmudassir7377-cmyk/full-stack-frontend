import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { login, resendVerification } from "../services/api";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [needsVerification, setNeedsVerification] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const verified = searchParams.get("verified");
    if (verified === "true") alert("Email verified successfully! You can now log in.");
    if (verified === "false") alert("Verification link is invalid or expired.");
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNeedsVerification(false);

    try {
      const data = await login(formData);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (error) {
      if (error.message.includes("verify")) {
        setNeedsVerification(true);
      }
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      const data = await resendVerification(formData.email);
      alert(data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="pt-32 pb-20 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-600 mb-8">Login to your account</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

        {needsVerification && (
          <button onClick={handleResend} className="text-sm text-primary hover:underline mt-4 block mx-auto">
            Resend verification email
          </button>
        )}

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