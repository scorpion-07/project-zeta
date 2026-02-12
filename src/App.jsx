import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Rose from './Rose.tsx'
import ProposeDay from './ProposeDay.tsx'
import ChocolateDay from './ChocolateDay.tsx'
import TeddyDay from './TeddyDay.tsx'
import PromiseDay from './PromiseDay.tsx'
import HugDay from './HugDay.tsx'
import './App.css'

function isAuth() {
  return localStorage.getItem('auth') === 'true'
}

function ProtectedRoute({ children }) {
  if (!isAuth()) {
    return <Navigate to="/login" replace />
  }
  return children
}

function Home() {
  return (
    <div style={{ padding: 24, textAlign: 'center' }}>
      <h1>Welcome</h1>
      <p>You are signed in.</p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Rose />
            <ProposeDay />
            <ChocolateDay />
            <TeddyDay />
            <PromiseDay />
            <HugDay />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
