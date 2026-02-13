import React, { useState } from 'react'

export default function KissDay() {
  const [holding, setHolding] = useState(false)
  const [step, setStep] = useState(0)

  const messages = [
    "There’s something I want you to know.",
    "I really admire the way you care about people.",
    "The way you stay strong even when things are hard.",
    "The way you show up, even on days you feel tired.",
    "You’re thoughtful. You’re kind. You’re steady.",
    "And I don’t just like you… I genuinely respect you."
  ]

  const start = () => {
    setHolding(true)

    let i = 0
    const interval = setInterval(() => {
      i++
      setStep(i)
      if (i >= messages.length - 1) clearInterval(interval)
    }, 3000)
  }

  const end = () => {
    setHolding(false)
  }

  return (
    <section
      onMouseDown={start}
      onMouseUp={end}
      onTouchStart={start}
      onTouchEnd={end}
      style={{
        minHeight: '100vh',
        padding: '32px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: holding
          ? 'linear-gradient(180deg, #7c3aed, #c084fc)'
          : 'linear-gradient(180deg, #f3e8ff, #fff)',
        transition: 'background 0.8s ease',
        color: holding ? '#fff' : '#5b21b6',
      }}
    >
      <span
        style={{
          fontSize: 14,
          letterSpacing: 1,
          marginBottom: 12,
          textTransform: 'uppercase',
          opacity: 0.8,
        }}
      >
        Day 7 · Kiss Day 💋
      </span>

      <h2
        style={{
          fontSize: 28,
          fontWeight: 600,
          marginBottom: 24,
        }}
      >
       Press and hold for the messages to appear 🤍
      </h2>

      <p
        style={{
          fontSize: 16,
          maxWidth: 320,
          lineHeight: 1.8,
          minHeight: 120,
        }}
      >
        {messages[step]}
      </p>

      <div
        style={{
          marginTop: 40,
          fontSize: 14,
          opacity: 0.6,
        }}
      >
        ↓ Tomorrow is the final page.
      </div>
    </section>
  )
}
