import { useEffect, useState } from "react";

function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#282c34",
          margin: "0",
          transform: show ? "translateY(0)" : "translateY(100px)",
          opacity: show ? 1 : 0,
          transition: "all 1s ease",
        }}
      >
        Daniel Sánchez García
      </h1>
      <h2
        style={{
          fontSize: "1.5rem",
          color: "#282c34",
          marginTop: "1rem",
          fontWeight: "normal",
          transform: show ? "translateY(0)" : "translateY(100px)",
          opacity: show ? 1 : 0,
          transition: "all 1s ease 0.3s", 
        }}
      >
        Desarrollador Full Stack
      </h2>
      <h3
        style={{
            fontSize: "1rem",
            color: "#282c34",
            marginTop: "1rem",
            fontWeight: "normal",
            transform: show ? "translateY(0)" : "translateY(100px)",
            opacity: show ? 1 : 0,
            transition: "all 1s ease 0.6s", 
        }}
      >
        ¡Bienvenido a mi portafolio!
      </h3>
    </section>
  );
}

export default Hero;
