import React from "react";
import SplitText from "./splittext";

function App() {
  const handleAnimationComplete = () => {
    console.log('¡Animación completada!');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-600 text-white w-full py-4 text-center">
        <h1 className="text-3xl font-bold">Mi Página React + SplitText</h1>
      </header>

      <main className="mt-10 flex flex-col items-center gap-6">
        <SplitText
          text="Hello, GSAP!"
          className="text-4xl font-semibold"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <p className="text-gray-700 text-center">
          Esta es una página de ejemplo usando React, Tailwind y animaciones con GSAP.
        </p>

        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Haz clic aquí
        </button>
      </main>
    </div>
  );
}

export default App;
