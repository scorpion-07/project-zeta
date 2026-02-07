import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SHA256 from 'crypto-js/sha256'
import './Login.css'

const VALID_USERNAME = 'Shreya'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('auth') === 'true') {
      navigate('/', { replace: true })
    }
  }, [navigate])

  const expectedHash = import.meta.env.VITE_APP_PASSWORD_HASH || ''

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    // const trimmedUser = username.trim()
    const trimmedPass = password

    const hashedPassword = SHA256(trimmedPass).toString()
    if (hashedPassword !== expectedHash) {
      setError('Invalid username or password.')
      return
    }

    localStorage.setItem('auth', 'true')
    navigate('/', { replace: true })
  }

  return (
    <div
      className="login-page"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #fde2e4, #e0c3fc)',
        padding: 16,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 360,
          padding: 28,
          background: 'rgba(255, 255, 255, 0.97)',
          borderRadius: 20,
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
          boxSizing: 'border-box',
        }}
      >
        <h1
          style={{
            margin: '0 0 8px',
            fontSize: 26,
            fontWeight: 700,
            color: '#4c1d95',
            textAlign: 'center',
          }}
        >
          Something Special 💕
        </h1>
  
        <p
          style={{
            margin: '0 0 24px',
            fontSize: 14,
            color: '#6b7280',
            textAlign: 'center',
          }}
        >
          Enter the secret to unlock something special
        </p>
  
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label
              htmlFor="username"
              style={{ fontSize: 14, fontWeight: 500, color: '#374151' }}
            >
              Your name ✨
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                padding: '14px 16px',
                fontSize: 16,
                borderRadius: 12,
                border: '1px solid #e5e7eb',
                outline: 'none',
                minHeight: 48,
              }}
            />
          </div>
  
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label
              htmlFor="password"
              style={{ fontSize: 14, fontWeight: 500, color: '#374151' }}
            >
              Our secret 🤍
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                padding: '14px 16px',
                fontSize: 16,
                borderRadius: 12,
                border: '1px solid #e5e7eb',
                outline: 'none',
                minHeight: 48,
              }}
            />
          </div>
  
          {error && (
            <p
              role="alert"
              style={{
                margin: 0,
                padding: '10px 12px',
                fontSize: 14,
                color: '#9f1239',
                background: '#fff1f2',
                borderRadius: 10,
                border: '1px solid #fecdd3',
                textAlign: 'center',
              }}
            >
              Oops… that’s not our secret 💔
              <br />
              Hint: Remember the date last year? 😭
            </p>
          )}
  
          <button
            type="submit"
            style={{
              marginTop: 8,
              padding: '14px 24px',
              fontSize: 16,
              fontWeight: 600,
              color: '#fff',
              background:
                'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
              border: 'none',
              borderRadius: 14,
              minHeight: 50,
              cursor: 'pointer',
            }}
          >
            Unlock the Secret
          </button>
        </form>
      </div>
    </div>
  )
  
}
