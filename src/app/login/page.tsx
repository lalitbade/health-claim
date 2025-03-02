"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "@fontsource/lexend-deca";

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
      localStorage.setItem("username", username);
      router.push("/admin");
      return;
    }

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch("http://172.21.162.243:8000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("username", username);
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
    <div className="h-screen w-screen flex bg-gray-100 font-['Lexend Deca']">
      {/* Left Side - Centered Login Form */}
      <div className="w-1/2 h-full flex justify-center items-center bg-white shadow-lg">
        <div className="w-full max-w-md">
          {/* Left-Aligned Logo */}
          <Link href="/" className="block mb-12">
            <img src="/BlueIcon.svg" alt="Insuraflow" className="h-16 w-auto object-contain" />
          </Link>

          {/* Left-Aligned Heading */}
          <h2 className="text-5xl font-bold text-gray-900 mb-2 text-left">Welcome back!</h2>

          {/* Center-Aligned Subtext */}
          <p className="text-gray-600 text-xl mb-6 text-left">Fasten your insurance process</p>

          {/* Error Message */}
          {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

          {/* Login Form - Centered */}
          <form onSubmit={handleLogin} className="w-full space-y-5 text-center">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md text-lg bg-gray-50 focus:outline-none text-black focus:ring-2 focus:ring-blue-400"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md text-lg bg-gray-50 focus:outline-none text-black focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex items-center justify-between text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <Link href="#" className="text-blue-500 text-sm hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md text-lg shadow-md hover:bg-blue-600 transition duration-200"
            >
              Log in
            </button>
          </form>

          {/* Signup Redirect - Centered */}
          <div className="text-lg text-gray-600 mt-6 text-center">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Full-Screen Image */}
      <div className="w-1/2 h-full">
        <Image
          src="/Frame3.svg"
          alt="Insurance Dashboard Illustration"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;