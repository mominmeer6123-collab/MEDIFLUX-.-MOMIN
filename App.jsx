import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function App(){
  const [user, setUser] = React.useState(null)
  return user ? <Dashboard onLogout={()=>setUser(null)} /> : <Login onLogin={u=>setUser(u)} />
}
