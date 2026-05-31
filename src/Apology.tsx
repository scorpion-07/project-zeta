import React, { useState } from "react";

const Apology: React.FC = () => {
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  const [showFinalLetter, setShowFinalLetter] = useState(false);
  const [showForgiveness, setShowForgiveness] = useState(false);

  const greetingName = "Shreya my baby";

  const cards = [
    {
      title: "What I'm Sorry For 💔",
      text: "I'm sorry for the moments when I hurt you, disappointed you, or made you feel anything less than loved. You deserve so much better than that.",
    },
    {
      title: "What I Realized 🌷",
      text: "I realized that someone as special as you deserves patience, understanding, reassurance, and consistent effort—not just words.",
    },
    {
      title: "What I Want You To Know ❤️",
      text: "No mistake, argument, or difficult moment changes how much you mean to me. You matter to me more than I probably say out loud.",
    },
  ];

  const revealCard = (index: number) => {
    if (!openedCards.includes(index)) {
      const updated = [...openedCards, index];
      setOpenedCards(updated);

      if (updated.length === cards.length) {
        setTimeout(() => {
          setShowFinalLetter(true);
        }, 800);
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #ffe4e6, #fff)",
        padding: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "24px",
          padding: "28px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#be185d",
            marginBottom: "12px",
            fontSize: "2rem",
          }}
        >
          I'm Sorry 🤍
        </h1>

        <p
          style={{
            color: "#4b5563",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          <strong style={{ color: "#db2777" }}>{greetingName}</strong>,
          <br />
          I know an apology isn't always easy to give or receive.
          <br />
          But I wanted to make this little page for you because you deserve
          something more than a simple "sorry".
        </p>

        <h3
          style={{
            color: "#7c2d12",
            marginBottom: "20px",
          }}
        >
          Tap each card 🤍
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => revealCard(index)}
              style={{
                background: openedCards.includes(index)
                  ? "#fff"
                  : "linear-gradient(135deg, #f472b6, #ec4899)",
                color: openedCards.includes(index) ? "#374151" : "#fff",
                borderRadius: "18px",
                padding: "20px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px",
                }}
              >
                {card.title}
              </h3>

              {openedCards.includes(index) ? (
                <p
                  style={{
                    margin: 0,
                    lineHeight: 1.7,
                    fontSize: "15px",
                  }}
                >
                  {card.text}
                </p>
              ) : (
                <p
                  style={{
                    margin: 0,
                    opacity: 0.9,
                  }}
                >
                  Tap to reveal ✨
                </p>
              )}
            </div>
          ))}
        </div>

        {showFinalLetter && (
          <div
            style={{
              marginTop: "28px",
              padding: "24px",
              borderRadius: "20px",
              background: "#fff1f2",
              border: "1px solid #fecdd3",
              animation: "fadeIn 0.8s ease",
            }}
          >
            <h2
              style={{
                color: "#be185d",
                marginBottom: "16px",
              }}
            >
              One Last Thing... 💌
            </h2>

            <p
              style={{
                color: "#374151",
                lineHeight: 1.9,
                fontSize: "15px",
              }}
            >
              Shreya my baby,
              <br />
              <br />
              I know an apology can't magically fix everything. But I hope you
              know it comes from a genuine place.
              <br />
              <br />
              You are one of the most important people in my life. Your
              happiness matters to me. Your feelings matter to me. And most
              importantly,
              <strong> you matter to me.</strong>
              <br />
              <br />
              I'm sorry for the hurt I caused. I can't change what happened, but
              I can learn from it, grow from it, and do better.
              <br />
              <br />
              Thank you for being patient with me, caring for me, and loving me
              even when I'm imperfect.
              <br />
              <br />I love you. ❤️
            </p>

            {!showForgiveness && (
              <button
                onClick={() => setShowForgiveness(true)}
                style={{
                  marginTop: "20px",
                  border: "none",
                  background: "linear-gradient(135deg, #ec4899, #db2777)",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                Can I have a hug? 🥺
              </button>
            )}

            {showForgiveness && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "16px",
                  borderRadius: "16px",
                  background: "#fff",
                }}
              >
                <div style={{ fontSize: "48px" }}>🫂</div>

                <p
                  style={{
                    marginTop: "10px",
                    color: "#374151",
                    lineHeight: 1.7,
                  }}
                >
                  Thank you for giving me a chance.
                  <br />
                  I promise to keep trying, keep learning, and keep loving you
                  better.
                  <br />
                  <br />
                  Forever grateful for you, Shonaa ❤️
                </p>
              </div>
            )}
          </div>
        )}

        <div
          style={{
            marginTop: "24px",
            fontSize: "24px",
          }}
        >
          ❤️ 🌹 💌 🤍
        </div>
      </div>
    </div>
  );
};

export default Apology;
