function Projects() {
    return (
      <section
        id="projects"
        style={{
          height: "100vh",
          background: "#e9e9e9",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <h2>Proyectos</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>🚀 Proyecto 1 - Aplicación en React</li>
          <li>📡 Proyecto 2 - API con Node.js</li>
          <li>🎨 Proyecto 3 - Página web en HTML/CSS</li>
        </ul>
      </section>
    );
}
  
export default Projects;
  