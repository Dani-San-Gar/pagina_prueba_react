import SplitText from './SplitText';

function Hero() {
  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f9f9f9",
        color: "black",
        overflow: "hidden",
        textAlign: "center"
      }}
    >
      <SplitText
        text="Daniel Sánchez García"
        tag="h1"
        splitType="chars"        // animación letra por letra
        delay={50}               // 50ms entre letras
        duration={0.8}           // duración de la animación por letra
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
      />

      <SplitText
        text="Desarrollador Web Full Stack"
        tag="h2"
        splitType="words"        // animación palabra por palabra
        delay={125}              // delay mayor que el nombre
        duration={0.8}
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        style={{ marginTop: '1rem', fontWeight: 'normal' }}
      />

      <SplitText
        text="bienvenido a mi portafolio"
        tag="h3"
        splitType="words"        // animación palabra por palabra
        delay={150}              // delay mayor que el nombre
        duration={0.8}
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        style={{ marginTop: '1rem', fontWeight: 'normal' }}
      />
    </section>
  );
}

export default Hero;
