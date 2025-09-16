function About() {
    return (
      <section
        id="about"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <h2>Sobre mí</h2>
        <p style={{ maxWidth: "600px", textAlign: "center" }}>
          Hola! Soy un desarrollador apasionado por la tecnología y el diseño.
          Me gusta crear aplicaciones web modernas y funcionales.
        </p>
      </section>
    );
}
  
export default About;
  