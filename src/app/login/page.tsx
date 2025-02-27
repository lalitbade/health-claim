"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const Login: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!username) {
      setError("Please enter your username");
      return;
    }

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("username", username); // Store username for sidebar use
      router.push("/admin");
      return;
    }

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch("http://172.21.4.224:8000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("username", username); // Store username in localStorage
        router.push("/dashboard");
      } else {
        setError(data.message || "Failed to login");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen w-screen flex bg-gray-100">
      {/* Left Side - Login Form */}
      <div className="w-2/5 h-full flex flex-col justify-center items-center px-10 bg-white shadow-lg">
        <div className="mb-8 flex items-center gap-3">
          <ShieldCheck size={28} className="text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-800">InsuraFlow</h1>
        </div>

        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Welcome Back!</h2>
        <p className="text-gray-600 text-lg mb-6">Securely manage your health insurance claims</p>

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
          <input
            type="text"
            className="text-black w-full p-3 border border-gray-300 rounded-md text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="text-black w-full p-3 border border-gray-300 rounded-md text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md text-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-lg">
          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        <div className="text-lg text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
        </div>
      </div>

      {/* Right Side - Full-Screen Image */}
      <div className="w-3/5 h-full">
        <Image
          src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Health Insurance Login Illustration"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
