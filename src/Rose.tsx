import React from 'react'

export default function Rose() {
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
        background: 'linear-gradient(180deg, #ffe4e6, #fff)',
      }}
    >
        <p
        style={{
            fontSize: 16,
            color: '#16a34a',
            marginBottom: 12,
            textAlign: 'center',
        }}
        >
        Yay! You guessed the password 💕
        </p>
      <span
        style={{
          fontSize: 14,
          letterSpacing: 1,
          color: '#9f1239',
          marginBottom: 10,
          textTransform: 'uppercase',
        }}
      >
        Day 1 · Rose Day 🌹
      </span>
      <h2
        style={{
          fontSize: 30,
          fontWeight: 700,
          color: '#881337',
          marginBottom: 18,
          lineHeight: 1.3,
        }}
      >
        This rose is for you 🌹 
        <br />
        <p style={{ fontSize: 14, color: '#6b7280' }}>(Sorry for the digital version 😭)</p>
      </h2>

      <p
        style={{
          fontSize: 16,
          color: '#374151',
          maxWidth: 320,
          lineHeight: 1.7,
          marginBottom: 22,
        }}
      >
        I really wish I could give you a real rose today.
        <br />
        <br />
        But since I can’t,
        <br />
        I wanted to do this instead —
        <br />
        just to remind you that
        <br />
        you make my days feel lighter,
        warmer,
        and honestly… a lot happier.
      </p>

      <p
        style={{
          fontSize: 15,
          color: '#6b7280',
          maxWidth: 300,
          lineHeight: 1.6,
        }}
      >
        They say every rose has thorns,
        but choosing you has only ever felt
        like choosing something right 🌹
        (I know it's too much but I can't help it 😭)
      </p>

      <div
        style={{
          marginTop: 40,
          fontSize: 14,
          color: '#9ca3af',
        }}
      >
        ↓ Come back tomorrow for some more digital surprises 🌸
      </div>
    </section>
  )
}