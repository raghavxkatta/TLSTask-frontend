import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar1';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

import googleLogo from '/googleLogo.png';
import githubLogo from '/GithubLogo.png';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccessMsg('');

    const API = import.meta.env.VITE_API_URL;
    try {
      const response = await axios.post(`${API}/api/users/login`, {
  email,
  password,
      });

      setSuccessMsg(response.data.message || 'Login successful!');
      // Store token and name in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('tls_name', response.data.user.name);
      // Redirect to home page
      navigate('/');
    } catch (err) {
      setErrors({ general: err.response?.data?.error || 'Invalid email or password' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center px-4 pt-13 py-8 relative bg-gradient-to-b from-[#070054] via-[#3A3987]to-[#070054]">
        <div className="relative w-full max-w-md">?
          <div className="bg-white border border-[#070054] shadow-2xl rounded-2xl p-8 hover:shadow-3xl transition-shadow duration-300">

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#070054] rounded-2xl mb-4 shadow-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-[#070054] mb-2">Welcome Back</h1>
              <p className="text-[#070054]/70">Sign in to continue to your account</p>
            </div>

            {/* Error message */}
            {errors.general && (
              <div className="mb-6 p-4 bg-red-50 border-red-200 border rounded-xl text-red-600 text-sm animate-slide-in-top">
                {errors.general}
              </div>
            )}

            {/* Success message */}
            {successMsg && (
              <div className="mb-6 p-4 bg-green-50 border-green-200 border rounded-xl text-green-700 text-sm animate-slide-in-top">
                {successMsg}
              </div>
            )}

            <form onSubmit={handleSignIn} className="space-y-6">
              {/* Email field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#070054]">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#070054]/40 group-focus-within:text-[#070054] transition-colors duration-200" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-[#d9d9d9]/20 border border-[#d9d9d9] rounded-xl
                             focus:bg-white focus:border-[#070054] focus:ring-2 focus:ring-[#070054]/20
                             transition-all duration-200 outline-none placeholder-[#070054]/40"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#070054]">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#070054]/40 group-focus-within:text-[#070054] transition-colors duration-200" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3 bg-[#d9d9d9]/20 border border-[#d9d9d9] rounded-xl
                             focus:bg-white focus:border-[#070054] focus:ring-2 focus:ring-[#070054]/20
                             transition-all duration-200 outline-none placeholder-[#070054]/40"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#070054]/40 hover:text-[#070054] transition-colors duration-200"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot password link */}
              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#070054] hover:text-[#070054]/80 font-medium transition-colors duration-200"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full group relative bg-[#070054] hover:bg-[#070054]/90 text-white py-3 px-6 rounded-xl font-semibold
                         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200
                         disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Signing In...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-[#d9d9d9]"></div>
              <span className="px-4 text-sm text-[#070054]/60 bg-[#d9d9d9]/80">or</span>
              <div className="flex-1 border-t border-[#d9d9d9]"></div>
            </div>

            {/* Social sign-in buttons */}
            <div className="space-y-3">
              {/* Google */}
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-3 border border-[#d9d9d9] rounded-xl
                         bg-white hover:bg-[#d9d9d9]/30 transition-colors duration-200 font-medium"
              >
                <img
                  src={googleLogo}
                  alt="Google logo"
                  className="w-5 h-5 mr-3"
                />
                Continue with Google
              </button>

              {/* GitHub */}
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-3 border border-[#d9d9d9] rounded-xl
                         bg-white hover:bg-[#d9d9d9]/30 transition-colors duration-200 font-medium"
              >
                <img
                  src={githubLogo}
                  alt="GitHub logo"
                  className="w-5 h-5 mr-3"
                />
                Continue with GitHub
              </button>
            </div>

            {/* “Create account” link */}
            <p className="mt-8 text-center text-[#070054]/70">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-[#070054] hover:text-[#070054]/80 font-semibold transition-colors duration-200"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>

  );
}
