import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally, handle form submission (e.g., validation)
    console.log('Name:', name);
    console.log('Email:', email);
    // Navigate to the Generator page
    navigate('/generator');  // Redirect to /generator route
  };

  return (
    <>
      <div className=' fixed top-0 w-fit h-auto py-10 px-80 justify-center  bg-gradient-to-r items-center from-emerald-500 via-emerald-200  to-pink-600 bg-clip-text text-6xl font-semibold text-transparent text-center select-auto'>
        <h2 className='mb-5'>Welcome to CodeCraft</h2>
        <h4>Your gateway to seamless QR code creation.</h4>
      </div>
      <div className="flex  mt-40 items-center justify-center pt-40">
        <div className="w-full max-w-md bg-transparent rounded-lg shadow-lg p-6">
          <h3 className="text-5xl text-emerald-500 font-semibold text-center mb-5">Log In</h3>

          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <input
            required
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border bg-transparent border-pink-300 rounded-lg mt-4"
            />
            {/* Password Input */}
            <input
            required
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border bg-transparent border-pink-300 rounded-lg mt-4"
            />
            {/* Login Button */}
            <button
              type="submit"
              className="w-full active:scale-95 bg-pink-600 text-slate-300 py-2 rounded-lg mt-6 hover:text-white "
            >
              Get Started
            </button>
          </form>

          
          
        </div>
      </div>
    </>
  )
}

export default Login