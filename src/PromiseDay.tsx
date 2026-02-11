import React, { useState } from 'react'

export default function PromiseDay() {
  const [revealed, setRevealed] = useState([false, false, false])

  const revealPromise = (index) => {
    const updated = [...revealed]
    updated[index] = true
    setRevealed(updated)
  }

  const promises = [
    "I promise to listen to you — not just hear you, but really understand you 🤍",
    "I promise to stand beside you on hard days, even when I don’t have the perfect words 🫶",
    "I promise to never stop choosing you, even on ordinary, boring, imperfect days 💞",
  ]

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
        background: 'linear-gradient(180deg, #e0f2fe, #fff)',
      }}
    >
      <span
        style={{
          fontSize: 14,
          letterSpacing: 1,
          color: '#0369a1',
          marginBottom: 10,
          textTransform: 'uppercase',
        }}
      >
        Day 5 · Promise Day 🤞
      </span>

      <h2
        style={{
          fontSize: 30,
          fontWeight: 700,
          color: '#1e3a8a',
          marginBottom: 20,
        }}
      >
        Tap to unlock my promises 💙
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          width: '100%',
          maxWidth: 340,
        }}
      >
        {promises.map((text, index) => (
          <div
            key={index}
            onClick={() => revealPromise(index)}
            style={{
              padding: 20,
              borderRadius: 16,
              background: revealed[index]
                ? '#ffffff'
                : 'linear-gradient(135deg, #93c5fd, #60a5fa)',
              color: revealed[index] ? '#374151' : '#fff',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              minHeight: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            {revealed[index] ? text : `🔒 Promise ${index + 1}`}
          </div>
        ))}
      </div>

      <p
        style={{
          marginTop: 30,
          fontSize: 14,
          color: '#6b7280',
          maxWidth: 300,
          lineHeight: 1.6,
        }}
      >
        These aren’t big dramatic promises.
        <br />
        Just small, everyday ones —
        the kind that actually matter 💫
      </p>

      <div
        style={{
          marginTop: 40,
          fontSize: 14,
          color: '#9ca3af',
        }}
      >
        ↓ Come back tomorrow (hug day incoming 🤗)
      </div>
    </section>
  )
}
