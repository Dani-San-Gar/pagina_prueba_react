function Contact() {
    return (
      <section
        id="contact"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#e9e9e9",
          padding: "2rem",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "2rem 3rem",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            maxWidth: "500px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "1.5rem" }}>Contacto</h2>
          <p>
            Email:{" "}
            <a href="mailto:sanchezgarciad485@gmail.com" style={{ color: "#0077b6" }}>
              sanchezgarciad485@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/daniel-sánchez-garcía-8a93a7283"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077b6" }}
            >
              linkedin.com/in/daniel-sánchez-garcía-8a93a7283
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Dani-San-Gar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077b6" }}
            >
              github.com/Dani-San-Gar
            </a>
          </p>
        </div>
      </section>
    );
}
  
export default Contact;
  