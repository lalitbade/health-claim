"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "@fontsource/lexend-deca";

const Signup: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const signupData = { username, email, fullname: fullName, password };

    try {
      const response = await fetch("http://172.21.162.243:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = Array.isArray(data.detail)
          ? data.detail.map((err: any) => err.msg).join(", ")
          : "Failed to sign up";
        setError(errorMessage);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/dashboard");
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen w-screen flex bg-gray-100 font-['Lexend Deca']">
      {/* Left Side - Signup Form */}
      <div className="w-1/2 h-full flex justify-center items-center bg-white shadow-lg">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex justify-start mb-6">
            <img src="/BlueIcon.svg" alt="Insuraflow" className="h-16 w-auto object-contain" />
          </Link>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-900 mb-2 text-left">Create an Account</h2>
          <p className="text-gray-600 text-lg mb-6 text-left">
            Join now and manage your insurance claims effortlessly.
          </p>

          {/* Error Message */}
          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

          {/* Signup Form */}
          <form onSubmit={handleSignup} className="w-full space-y-5">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md text-lg shadow-md hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>

          {/* Login Redirect */}
          <div className="text-lg text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Full-Screen Image */}
      <div className="w-1/2 h-full">
        <Image
          src="/yoyoyo.svg"
          alt="Signup Illustration"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;