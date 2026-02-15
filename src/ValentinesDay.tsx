import React from 'react'

export default function ValentinesDay() {
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
        background: 'linear-gradient(180deg, #fce7f3, #fff)',
      }}
    >
      <span
        style={{
          fontSize: 14,
          letterSpacing: 1,
          color: '#be185d',
          marginBottom: 12,
          textTransform: 'uppercase',
        }}
      >
        Final Day · Valentine’s Day ❤️
      </span>

      <h2
        style={{
          fontSize: 30,
          fontWeight: 700,
          color: '#9d174d',
          marginBottom: 20,
        }}
      >
        Happy Valentine’s Day 🤍
      </h2>

      <p
        style={{
          fontSize: 16,
          color: '#374151',
          maxWidth: 340,
          lineHeight: 1.8,
          marginBottom: 24,
        }}
      >
        I didn’t make this week to impress you.
        <br /><br />
        I made it because you matter to me.
        <br /><br />
        Because I admire who you are.
        Because I respect you.
        Because being with you feels steady and real.
        <br /><br />
        And that’s not something I take lightly.
      </p>

      <p
        style={{
          fontSize: 16,
          color: '#374151',
          maxWidth: 340,
          lineHeight: 1.8,
        }}
      >
        I don’t promise perfection.
        I don’t promise dramatic gestures every day.
        <br /><br />
        But I do promise intention.
        Effort.
        And choosing you, even on ordinary days.
      </p>

      <div
        style={{
          marginTop: 30,
          fontSize: 18,
          fontWeight: 600,
          color: '#7e22ce',
        }}
      >
        I’m really glad it’s you. 💞
      </div>
    </section>
  )
}
