<<<<<<< HEAD
import React from 'react'

export default function ValentinesDay() {
=======
import React, { useState } from 'react'

export default function ValentinesDay() {
  const [open, setOpen] = useState<string | null>(null)

  const qualities = {
    Strength:
      "You handle things quietly. Even when you’re stressed, you show up. I notice that.",
    Kindness:
      "You care deeply — not loudly, not for attention — but genuinely. That’s rare.",
    Loyalty:
      "When you choose someone, you really choose them. That’s something I respect a lot.",
    Warmth:
      "You make spaces feel softer. Conversations feel easier. Days feel lighter."
  }

>>>>>>> a19871328d17249d9a88c44956db74a21d150f82
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
<<<<<<< HEAD
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
=======
          fontSize: 28,
          fontWeight: 600,
          color: '#9d174d',
          marginBottom: 24,
        }}
      >
        There are a few things I’ve noticed about you…
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          width: '100%',
          maxWidth: 340,
        }}
      >
        {Object.keys(qualities).map((key) => (
          <div
            key={key}
            onClick={() => setOpen(open === key ? null : key)}
            style={{
              padding: 18,
              borderRadius: 14,
              background: '#fff',
              boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                fontWeight: 600,
                color: '#7e22ce',
                marginBottom: open === key ? 8 : 0,
              }}
            >
              {key}
            </div>

            {open === key && (
              <div
                style={{
                  fontSize: 14,
                  color: '#374151',
                  lineHeight: 1.6,
                }}
              >
                {qualities[key]}
              </div>
            )}
          </div>
        ))}
      </div>

      <p
        style={{
          marginTop: 30,
          fontSize: 15,
          color: '#6b7280',
          maxWidth: 320,
          lineHeight: 1.7,
        }}
      >
        And that’s why today isn’t just about flowers or chocolates.
        <br /><br />
        It’s about appreciating the person you are.
        <br /><br />
        I’m really glad it’s you. 🤍
      </p>
>>>>>>> a19871328d17249d9a88c44956db74a21d150f82
    </section>
  )
}
