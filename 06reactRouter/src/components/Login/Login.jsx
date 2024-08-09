import React from 'react';

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form className="space-y-6 bg-white p-8 rounded-lg shadow-md w-full max-w-xs">
        <h2 className="text-xl font-semibold text-gray-700">Log in</h2>
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Log in</button>
      </form>
    </div>
  );
}

export default Login;