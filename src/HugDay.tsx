import React, { useState } from 'react'

export default function HugDay() {
  const [hugging, setHugging] = useState(false)
  const [completed, setCompleted] = useState(false)

  const startHug = () => {
    setHugging(true)
    setTimeout(() => setCompleted(true), 1800)
  }

  const endHug = () => {
    setHugging(false)
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '32px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: hugging
          ? 'linear-gradient(180deg, #fbcfe8, #fff)'
          : 'linear-gradient(180deg, #fdf2f8, #fff)',
        transition: 'background 0.4s ease',
      }}
    >
      <span
        style={{
          fontSize: 14,
          letterSpacing: 1,
          color: '#be185d',
          marginBottom: 10,
          textTransform: 'uppercase',
        }}
      >
        Day 6 · Hug Day 🤗
      </span>

      {!completed ? (
        <>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: '#9d174d',
              marginBottom: 20,
            }}
          >
            Come here for a second 🫶
          </h2>

          <div
            onMouseDown={startHug}
            onMouseUp={endHug}
            onTouchStart={startHug}
            onTouchEnd={endHug}
            style={{
              width: 160,
              height: 160,
              borderRadius: '50%',
              background: hugging
                ? 'linear-gradient(135deg, #ec4899, #f472b6)'
                : 'linear-gradient(135deg, #f9a8d4, #fbcfe8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 50,
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: hugging ? 'scale(1.1)' : 'scale(1)',
              boxShadow: hugging
                ? '0 0 40px rgba(236,72,153,0.6)'
                : '0 10px 30px rgba(0,0,0,0.1)',
              userSelect: 'none',
            }}
          >
            🤗
          </div>

          <p
            style={{
              marginTop: 20,
              fontSize: 15,
              color: '#6b7280',
            }}
          >
            Press and hold and never let go… I’ll hug back 🤍
          </p>
        </>
      ) : (
        <>
          <h2
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: '#9333ea',
              marginBottom: 16,
            }}
          >
            Okay… that felt nice 🥹
          </h2>

          <p
            style={{
              fontSize: 16,
              color: '#374151',
              maxWidth: 320,
              lineHeight: 1.7,
            }}
          >
            I can’t actually wrap my arms around you right now,
            but if I could,
            this is exactly what it would feel like.
            <br /><br />
            Not rushed.
            Not dramatic.
            Just warm and real.
            <br /><br />
            The kind of hug that says,
            “I’m here.
            And I’m not going anywhere.” 🤍
          </p>

          <div style={{ fontSize: 36, marginTop: 20 }}>
            💗💞🫶
          </div>
        </>
      )}

      <div
        style={{
          marginTop: 40,
          fontSize: 14,
          color: '#9ca3af',
        }}
      >
        ↓ Tomorrow is the final surprise… don’t miss it 🥹💌
      </div>
    </section>
  )
}
