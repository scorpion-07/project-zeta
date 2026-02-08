import React, { useState } from 'react'

export default function ProposeDay() {
  const [celebrate, setCelebrate] = useState(false)
  const [noStyle, setNoStyle] = useState({})

  const moveNoButton = () => {
    const x = Math.random() * 180 - 60;
    const y = Math.random() * 180 - 60;

    setNoStyle({
      transform: `translate(${x}px, ${y}px)`,
    })
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
        background: 'linear-gradient(180deg, #fdf2f8, #fff)',
      }}
    >
      {!celebrate ? (
        <>
          <span
            style={{
              fontSize: 14,
              letterSpacing: 1,
              color: '#be185d',
              marginBottom: 10,
              textTransform: 'uppercase',
            }}
          >
            Day 2 · Propose Day 💍
          </span>

          <h2
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: '#9d174d',
              marginBottom: 24,
            }}
          >
            Thanks for coming back!
            <br />
            Let's continue the journey together...
            <br />
            Will you keep choosing me? 🥹💖
          </h2>

          <div
            style={{
              display: 'flex',
              gap: 20,
              position: 'relative',
              marginTop: 20,
            }}
          >
            {/* YES */}
            <button
              onClick={() => setCelebrate(true)}
              style={{
                padding: '14px 28px',
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 999,
                border: 'none',
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Yes 💖
            </button>

            {/* NO */}
            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              style={{
                padding: '14px 28px',
                fontSize: 16,
                borderRadius: 999,
                border: '1px solid #d1d5db',
                background: '#fff',
                cursor: 'pointer',
                color: '#9d174d',
                transition: 'transform 0.2s ease',
                ...noStyle,
              }}
            >
              No 🙃
            </button>
          </div>
        </>
      ) : (
        /* 🎉 YES SCREEN */
        <div style={{ textAlign: 'center', maxWidth: 340 }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#9333ea',
              marginBottom: 14,
            }}
          >
            YAYYY!! 🎉💖
          </h2>

          {/* GRATITUDE SECTION */}
          <p
            style={{
              fontSize: 16,
              color: '#374151',
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            Also… before anything else,
            <br />
            thank you for the rose and the chocolate today 🌹🍫
            <br />
            <br />
            It genuinely made my day,
            and I’m really grateful for you
            and the little things you do 🥹🤍
          </p>

          {/* EMOTIONAL CLOSE */}
          <p
            style={{
              fontSize: 16,
              color: '#374151',
              lineHeight: 1.7,
              marginBottom: 18,
            }}
          >
            You choosing me means more
            than I can properly put into words.
            <br />
            I promise I’ll always choose you too —
            every single day 💞
          </p>

          <div style={{ fontSize: 40, marginTop: 10 }}>
            💕🎊✨💖🎉💞
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 14,
              color: '#9ca3af',
            }}
          >
            ↓ Come back tomorrow for some more digital surprises 🌸
          </div>
        </div>
      )}
    </section>
  )
}
