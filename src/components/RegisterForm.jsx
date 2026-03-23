import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import homepage_bg from "../assets/homepage_bg.png";

export default function RegisterForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.username ||
      !form.email ||
      !form.password ||
      !form.confirm_password
    ) {
      setError("All fields are required!");
      return;
    }

    if (form.password !== form.confirm_password) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    console.log("OK: ", form);
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
          Create Account
        </h1>

        <div className="relative mb-5 w-full">
          <User
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70"
            size={20}
          />
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition"
          />
        </div>

        <div className="relative mb-5 w-full">
          <Mail
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70"
            size={20}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition"
          />
        </div>

        <div className="relative mb-5 w-full">
          <Lock
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70"
            size={20}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
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
            placeholder="Confirm Password"
            onChange={(e) =>
              setForm({ ...form, confirm_password: e.target.value })
            }
            className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition"
          />
        </div>

        <div className="flex text-sm text-white/80 mb-6 px-8 w-full justify-center gap-2">
          <span>Already have an account?</span>
          <span
            onClick={() => navigate("/login")}
            className="hover:text-white cursor-pointer underline transition"
          >
            Sign in
          </span>
        </div>

        {error && (
          <p className="text-white text-sm text-center mb-3">{error}</p>
        )}

        <button
          type="submit"
          className="w-70 py-3 rounded-lg font-bold text-white bg-white/30 hover:bg-blue-500/40 transition duration-300 backdrop-blur-md shadow-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
}
