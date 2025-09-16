function Header() {
    return (
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "#282c34",
          color: "white",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "center", // Menú centrado
          gap: "2rem",
          zIndex: 1000,
        }}
      >
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>Sobre mí</a>
        <a href="#projects" style={{ color: "white", textDecoration: "none" }}>Proyectos</a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contacto</a>
      </header>
    );
}

export default Header;
  