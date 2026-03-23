import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/authService";
import { Mail, Lock } from "lucide-react";
import homepage_bg from "../assets/homepage_bg.png";

export default function LoginForm() {
  const [form, setForm] = useState({
    user_email: "",
    user_password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.user_email || !form.user_password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    const roles = await loginService(form);
    // console.log("Log: ", data);
    if (roles.includes("Learner")) {
      navigate("/learner/home");
    }
    if (roles.includes("Admin")) {
      navigate("/admin/home");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg scale-110"
        style={{
          backgroundImage: `url(${homepage_bg})`,
        }}
      ></div>

      <div className="absolute inset-0 bg-black/30"></div>

      <form
        onSubmit={handleSubmit}
        className="relative backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-10 py-20 w-[600px] flex flex-col items-center"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-10">
          Welcome Back
        </h1>

        <div className="relative mb-5 w-full">
          <Mail
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70"
            size={20}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, user_email: e.target.value })}
            className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition"
          />
        </div>

        <div className="relative mb-6 w-full">
          <Lock
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70"
            size={20}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, user_password: e.target.value })
            }
            className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition"
          />
        </div>

        <div className="flex justify-between text-sm text-white/80 mb-6 px-8 w-full">
          <span
            onClick={() => navigate("/register")}
            className="hover:text-white cursor-pointer transition"
          >
            Register
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Forgot password?
          </span>
        </div>

        {error && (
          <p className="text-white text-sm text-center mb-3">{error}</p>
        )}

        <button
          type="submit"
          className="w-70 py-3 rounded-lg font-bold text-white bg-blue-500/50 hover:bg-blue-500 transition duration-300 backdrop-blur-md shadow-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
