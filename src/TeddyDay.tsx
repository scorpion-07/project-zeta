import React, { useState } from 'react'

export default function TeddyDay() {
  const [hugging, setHugging] = useState(false)
  const [revealed, setRevealed] = useState(false)

  const startHug = () => {
    setHugging(true)
    setTimeout(() => setRevealed(true), 1500)
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
        background: 'linear-gradient(180deg, #fef3c7, #fff)',
      }}
    >
      <span
        style={{
          fontSize: 14,
          letterSpacing: 1,
          color: '#92400e',
          marginBottom: 10,
          textTransform: 'uppercase',
        }}
      >
        Day 4 · Teddy Day 🧸
      </span>

      <h2
        style={{
          fontSize: 30,
          fontWeight: 700,
          color: '#78350f',
          marginBottom: 20,
        }}
      >
        This one needs a hug 🤍
      </h2>

      {/* TEDDY */}
      <div
        onMouseDown={startHug}
        onMouseUp={endHug}
        onTouchStart={startHug}
        onTouchEnd={endHug}
        style={{
          fontSize: 90,
          cursor: 'pointer',
          transform: hugging ? 'scale(1.15)' : 'scale(1)',
          transition: 'transform 0.3s ease',
          marginBottom: 20,
          userSelect: 'none',
        }}
      >
        🧸
      </div>

      {!revealed ? (
        <p
          style={{
            fontSize: 16,
            color: '#6b7280',
            maxWidth: 300,
            lineHeight: 1.6,
          }}
        >
          Press and hold the teddy 🤗
          <br />
          (just like a real hug)
        </p>
      ) : (
        <p
          style={{
            fontSize: 16,
            color: '#374151',
            maxWidth: 320,
            lineHeight: 1.7,
          }}
        >
          That’s it.
          <br />
          This is what I wanted to give you today.
          <br />
          <br />
          A quiet moment.
          A warm hug.
          And a reminder that
          you never have to face anything alone.
          <br />
          <br />
          Whenever you need comfort,
          imagine this hug —
          I’m always right here 🤍
        </p>
      )}

      <div
        style={{
          marginTop: 40,
          fontSize: 14,
          color: '#9ca3af',
        }}
      >
        ↓ Come back tomorrow (promise day is next 🤞)
      </div>
    </section>
  )
}
