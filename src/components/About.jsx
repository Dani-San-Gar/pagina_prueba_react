import { useState } from "react";
import "./About.css"; // CSS de las tarjetas

const competencias = [
  {
    titulo: "Diseño",
    front: "Diseño",
    back: "Figma, Photoshop, Illustrator, Blender",
  },
  {
    titulo: "Frontend",
    front: "Frontend",
    back: "React, Angular, HTML, CSS, Tailwind, TypeScript",
  },
  {
    titulo: "Backend",
    front: "Backend",
    back: "Node.js, Express, Python, Django, PostgreSQL, Firebase",
  },
];

function About() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        background: "#f4f4f4",
        padding: "6rem 3rem 3rem 3rem",
      }}
    >
      <h2 style={{ marginBottom: "2rem" }}>Sobre mí</h2>
      <h3 style={{ marginBottom: "2rem" }}>Soy un desarrollador full stack, que le encanta innovar y aprender cada día. 
        Me apasiona crear paginas web y aplicaciones que sean tanto funcionales, atractivas y fáciles de usar.
        He estudiado DAM y diseño 3D, lo que me ha proporcionado unos conocimientos sólidos en desarrollo web, diseño gráfico o creación de videojuegos.
      </h3>
      <div className="cards-container">
        {competencias.map((c, i) => (
          <div
            key={i}
            className={`card ${flippedIndex === i ? "flipped" : ""}`}
            onClick={() => handleFlip(i)}
          >
            <div className="card-front">{c.front}</div>
            <div className="card-back">{c.back}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
