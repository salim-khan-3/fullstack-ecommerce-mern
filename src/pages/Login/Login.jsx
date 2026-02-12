import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3b5998] bg-gradient-to-br from-[#2b4170] to-[#4a69ad] p-4">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl italic">S</span>
        </div>
        <h1 className="text-white text-2xl font-bold tracking-wide">
          Surprise<span className="font-light">King</span>
        </h1>
      </div>

      {/* Login Card */}
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8">Sign In</h2>

        <form className="space-y-6">
          {/* Email Input */}
          <div className="relative border-b border-gray-300 focus-within:border-blue-600 transition-colors">
            <label className="block text-gray-400 text-sm mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              className="w-full pb-2 outline-none text-gray-700 bg-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative border-b border-gray-300 focus-within:border-blue-600 transition-colors">
            <label className="block text-gray-400 text-sm mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input 
              type="password" 
              className="w-full pb-2 outline-none text-gray-700 bg-transparent"
              placeholder="********"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-[#3b5998] text-sm font-semibold hover:underline">
              Forgot password ?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-[#1e3a8a] hover:bg-[#162a63] text-white font-bold py-3 rounded-md transition-all shadow-md">
            Sign In
          </button>
        </form>

        {/* Not Registered */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Not Registered? <a href="#" className="text-[#3b5998] font-bold hover:underline">Sign Up</a>
        </p>

        {/* Social Login Divider */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 font-medium mb-6 relative flex items-center before:flex-1 before:border-t before:mr-3 after:flex-1 after:border-t after:ml-3">
            Or continue with social account
          </p>
          
          <div className="flex justify-center gap-6 mt-4">
            {/* Google Icon */}
            <button className="p-2 transition-transform hover:scale-110">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-8 h-8" alt="Google" />
            </button>
            {/* Facebook Icon */}
            <button className="p-2 transition-transform hover:scale-110">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-8 h-8" alt="Facebook" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;