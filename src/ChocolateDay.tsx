import React, { useState } from 'react'

export default function ChocolateDay() {
  const [message, setMessage] = useState('')

  const messages = {
    dark: `You love dark chocolate,
and I think that says a lot about you.

You’re calm, thoughtful,
and quietly strong in ways you don’t always notice.

You don’t need things to be loud or flashy —
you make moments feel deeper,
and being around you feels grounding.

I really, really like that about you 🖤🍫`,
    milk: `You make even simple moments feel warm and easy 🤍`,
    white: `You surprise me in the softest, nicest ways ✨`,
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
        Day 3 · Chocolate Day 🍫
      </span>

      <h2
        style={{
          fontSize: 30,
          fontWeight: 700,
          color: '#78350f',
          marginBottom: 18,
        }}
      >
        Pick your favourite 🍫
      </h2>

      <p
        style={{
          fontSize: 16,
          color: '#374151',
          maxWidth: 320,
          lineHeight: 1.7,
          marginBottom: 26,
        }}
      >
        This one’s not about chocolate.
        <br />
        It’s about what it says about you.
        <br />
        I know you like dark chocolate, but also click on the other options to see what it says about you. ✨
      </p>

      {/* OPTIONS */}
      <div
        style={{
          display: 'flex',
          gap: 16,
          marginBottom: 24,
        }}
      >
        <button
          onClick={() => setMessage(messages.dark)}
          style={chocoBtn('#1f2937')}
        >
          Dark 🖤
        </button>

        <button
          onClick={() => setMessage(messages.milk)}
          style={chocoBtn('#92400e')}
        >
          Milk
        </button>

        <button
          onClick={() => setMessage(messages.white)}
          style={chocoBtn('#ca8a04')}
        >
          White
        </button>
      </div>

      {/* MESSAGE */}
      {message && (
        <p
          style={{
            fontSize: 16,
            color: '#374151',
            maxWidth: 320,
            lineHeight: 1.7,
            padding: '18px 20px',
            background: '#fff7ed',
            borderRadius: 14,
            border: '1px solid #fde68a',
            whiteSpace: 'pre-line',
          }}
        >
          {message}
        </p>
      )}

      <div
        style={{
          marginTop: 40,
          fontSize: 14,
          color: '#9ca3af',
        }}
      >
        ↓ Come back tomorrow (it gets cozy) 🧸
      </div>
    </section>
  )
}

function chocoBtn(color) {
  return {
    padding: '12px 20px',
    fontSize: 14,
    fontWeight: 600,
    color: '#fff',
    background: color,
    border: 'none',
    borderRadius: 999,
    cursor: 'pointer',
    minWidth: 90,
  }
}
