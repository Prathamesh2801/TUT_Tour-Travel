import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Login() {
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [signupUsername, setSignupUsername] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('')

  const handleLogin = (e) => {
    if (!loginUsername || !loginPassword) {
      alert('Please enter username and password')
      return
    }
  }

  const handleSignup = (e) => {
    if (!signupUsername || !signupEmail || !signupPassword || !signupConfirmPassword) {
      alert('Please fill all fields')
      return
    }
    if (signupPassword !== signupConfirmPassword) {
      alert('Passwords do not match')
      return
    }
  }

  return (
    <div className="flex opacity-80 justify-evenly p-20 bg-gradient-to-r from-orange-700 to-orange-300">
      <form
        onSubmit={handleLogin}
        className="div1 bg-white bg-opacity-10 mt-20 h-[450px] w-full max-w-[500px] rounded-3xl border px-4 sm:px-6 flex flex-col"
      >
        <h1 className="text-center text-white text-5xl m-3 font-mono">Login</h1>

        <input
          type="text"
          className="max-h-12 text-slate-700 max-w-96 w-full bg-white m-7 h-full rounded px-3"
          placeholder="Username"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
        />

        <input
          type="password"
          className="max-h-12 text-slate-700 max-w-96 w-full bg-white m-7 h-full rounded px-3"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <button
          type="submit"
        
          className="max-h-12 max-w-40 rounded-full w-full bg-slate-100 bg-opacity-40 m-7 h-full hover:bg-opacity-70 transition"
        >
          LOGIN
        </button>
      </form>

      <form
        onSubmit={handleSignup}
        className="div1 flex bg-white bg-opacity-10 flex-col h-[600px] rounded-3xl w-[550px] border px-4 sm:px-6"
      >
        <h1 className="text-center text-white text-5xl m-3 font-mono">SIGN UP</h1>

        <input
          type="text"
          className="max-h-12 text-slate-700 max-w-96 w-full bg-white m-7 h-full rounded px-3"
          placeholder="Username"
          value={signupUsername}
          onChange={(e) => setSignupUsername(e.target.value)}
        />

        <input
          type="email"
          className="max-h-12 text-slate-700 max-w-96 w-full bg-white m-7 h-full rounded px-3"
          placeholder="E-mail"
          value={signupEmail}
          onChange={(e) => setSignupEmail(e.target.value)}
        />

        <input
          type="password"
          className="max-h-12 text-slate-700 max-w-96 w-full bg-white m-7 h-full rounded px-3"
          placeholder="Password"
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
        />

        <input
          type="password"
          className="max-h-12 text-slate-700 max-w-96 w-full bg-white m-7 h-full rounded px-3"
          placeholder="Confirm Password"
          value={signupConfirmPassword}
          onChange={(e) => setSignupConfirmPassword(e.target.value)}
        />

        <button
          type="submit"
          className="max-h-12 max-w-40 rounded-full w-full bg-slate-100 bg-opacity-40 m-7 h-full hover:bg-opacity-70 transition"
        >
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  )
}
