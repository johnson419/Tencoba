import React from 'react';

const Login = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="text-center">
              <a href="/" className="flex items-center justify-center mb-2">
              <img src="/logo.png" alt="logo" className="h-8" /> 
              </a>
            </div>
            <h4 className="text-2xl font-semibold mb-4">Welcome to TENCOBA! 👋</h4>
            <p className="mb-8">Please sign in to your account and start the adventure</p>
            <form className="mb-6">
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 font-semibold">Email or Username</label>
                <input
                  type="text"
                  id="email"
                  name="email-username"
                  placeholder="Enter your email or username"
                  className="w-full p-2 border border-gray-300 rounded"
                  autoFocus
                />
              </div>
              <div className="mb-4 relative">
                <div className="flex justify-between mb-1">
                  <label htmlFor="password" className="block font-semibold">Password</label>
                  <a href="auth-forgot-password-basic.html" className="text-sm text-blue-500">Forgot Password?</a>
                </div>
                <div className="flex">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <span className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12a2 2 0 114 0 2 2 0 01-4 0z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="remember-me" className="inline-flex items-center">
                  <input type="checkbox" id="remember-me" className="form-checkbox" />
                  <span className="ml-2">Remember Me</span>
                </label>
              </div>
              <div className="mb-8">
                <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600" type="submit">Sign in</button>
              </div>
            </form>
            <p className="text-center">
              <span>New on our platform?</span>
              <a href="auth-register-basic.html" className="text-blue-500">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
