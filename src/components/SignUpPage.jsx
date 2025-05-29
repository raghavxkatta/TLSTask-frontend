import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar1';

export default function SignUpPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [focusedField, setFocusedField] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrorMsg('');
    setSuccessMsg('');
  };

  const handleFocus = (fieldName) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    try {
      const response = await axios.post('http://localhost:3000/api/user/signup', form);
      setSuccessMsg(response.data.message || 'Account created successfully!');
      // Store token and name in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('tls_name', form.name);
      // Redirect to home page
      window.location.href = '/';
    } catch (error) {
      setErrorMsg(error.response?.data?.error || 'Invalid email or password');
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex pt-13 items-center justify-center bg-gradient-to-b from-[#070054] via-[#d9d9d9] to-[#070054] p-4 relative overflow-hidden">
        <div className="relative w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#070054]">
            <div className="relative py-8 px-6" style={{ background: 'linear-gradient(135deg, #070054 0%, #0a0066 100%)' }}>
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="relative text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h1 className="text-white text-3xl font-bold tracking-tight">Join Us!</h1>
                <p className="text-white/80 text-sm mt-2">Create your account to get started</p>
              </div>
            </div>
            <div className="p-8 space-y-6">
              {errorMsg && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm text-center">
                  {errorMsg}
                </div>
              )}
              {successMsg && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm text-center">
                  {successMsg}
                </div>
              )}
              {/* Name Field */}
              <div className="relative group">
                <label className="block text-sm font-medium mb-2" style={{ color: '#070054' }}>Name</label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-800 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg placeholder-gray-400"
                  style={{
                    borderColor: focusedField === 'name' ? '#070054' : '#d9d9d9',
                    boxShadow: focusedField === 'name' ? '0 0 0 3px rgba(7, 0, 84, 0.1)' : 'none'
                  }}
                />
              </div>
              {/* Email Field */}
              <div className="relative group">
                <label className="block text-sm font-medium mb-2" style={{ color: '#070054' }}>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-800 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg placeholder-gray-400"
                  style={{
                    borderColor: focusedField === 'email' ? '#070054' : '#d9d9d9',
                    boxShadow: focusedField === 'email' ? '0 0 0 3px rgba(7, 0, 84, 0.1)' : 'none'
                  }}
                />
              </div>
              {/* Password Field */}
              <div className="relative group">
                <label className="block text-sm font-medium mb-2" style={{ color: '#070054' }}>Password</label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  onFocus={() => handleFocus('password')}
                  onBlur={handleBlur}
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-800 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg placeholder-gray-400"
                  style={{
                    borderColor: focusedField === 'password' ? '#070054' : '#d9d9d9',
                    boxShadow: focusedField === 'password' ? '0 0 0 3px rgba(7, 0, 84, 0.1)' : 'none'
                  }}
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #070054 0%, #0a0066 100%)',
                  boxShadow: '0 10px 25px rgba(7, 0, 84, 0.3)',
                  focusRingColor: 'rgba(7, 0, 84, 0.5)'
                }}
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="#ffff" stroke="#070054" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Create Account
                </div>
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              </button>
              {/* Redirect Link */}
              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/signin" className="font-semibold hover:underline transition-colors duration-200" style={{ color: '#070054' }}>
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
