import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../Components/layouts/Logo/Logo";

const SignUp = () => {
  const { setisShowHeaderFooter } = useContext(MyContext);

  useEffect(() => {
    setisShowHeaderFooter(false);
    return () => {
      setisShowHeaderFooter(true);
    };
  }, [setisShowHeaderFooter]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#5c449b] bg-gradient-to-br from-[#4c3585] via-[#5c449b] to-[#7a5cc7] p-4 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/5 rounded-full blur-2xl"></div>

      {/* SignUp Card */}
      <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl p-8 md:p-10 z-10">
        
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <Logo />
        </div>

        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8">Sign Up</h2>

        <form className="space-y-8">
          {/* Full Name & Contact No - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="relative border-b border-gray-300 focus-within:border-[#5c449b] transition-all">
              <input
                type="text"
                id="fullName"
                className="peer w-full pb-2 outline-none text-gray-700 bg-transparent placeholder-transparent"
                placeholder="Full Name"
                required
              />
              <label
                htmlFor="fullName"
                className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 
                peer-focus:-top-3.5 peer-focus:text-[#5c449b] peer-focus:text-sm"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Contact No */}
            <div className="relative border-b border-gray-300 focus-within:border-[#5c449b] transition-all">
              <input
                type="text"
                id="contactNo"
                className="peer w-full pb-2 outline-none text-gray-700 bg-transparent placeholder-transparent"
                placeholder="Contact No"
                required
              />
              <label
                htmlFor="contactNo"
                className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 
                peer-focus:-top-3.5 peer-focus:text-[#5c449b] peer-focus:text-sm"
              >
                Contact No <span className="text-red-500">*</span>
              </label>
            </div>
          </div>

          {/* Email Input */}
          <div className="relative border-b border-gray-300 focus-within:border-[#5c449b] transition-all">
            <input
              type="email"
              id="email"
              className="peer w-full pb-2 outline-none text-gray-700 bg-transparent placeholder-transparent"
              placeholder="Email"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all 
              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 
              peer-focus:-top-3.5 peer-focus:text-[#5c449b] peer-focus:text-sm"
            >
              Email <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Password Input */}
          <div className="relative border-b border-gray-300 focus-within:border-[#5c449b] transition-all">
            <input
              type="password"
              id="password"
              className="peer w-full pb-2 outline-none text-gray-700 bg-transparent placeholder-transparent"
              placeholder="Password"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all 
              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 
              peer-focus:-top-3.5 peer-focus:text-[#5c449b] peer-focus:text-sm"
            >
              Password <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#1e3a8a] hover:bg-[#162a63] text-white font-bold py-3 rounded-md transition-all shadow-md active:scale-95"
          >
            Create Account
          </button>
        </form>

        {/* Already Registered */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already registered?{" "}
          <a href="#" className="text-[#3b5998] font-bold hover:underline">
            Login
          </a>
        </p>

        {/* Social Login Divider */}
        <div className="mt-8 text-center">
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <p className="mx-4 text-gray-500 text-xs font-medium uppercase tracking-wider">
              Or continue with social account
            </p>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Google Sign In Button */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition-all shadow-sm active:scale-[0.98]">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
              alt="Google"
            />
            <span className="text-gray-700 font-bold text-sm">
              Sign In With Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;