import React from 'react'
export default function Login({onLogin}) {
  const [email, setEmail] = React.useState('')
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 rounded-xl shadow bg-white">
        <h1 className="text-2xl font-bold mb-4">MediEdu — Sign in</h1>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" className="w-full p-3 mb-3 rounded border" />
        <button onClick={()=>onLogin({email})} className="w-full p-3 rounded bg-indigo-600 text-white">Sign in (demo)</button>
      </div>
    </div>
  )
}
