import About from '../assets/images/images_about/about.png';

function AboutUs() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <div className="relative h-40 mb-8">
          <img src={About} alt="" className="rounded-lg" />
          <div className="absolute top-4 right-4">
            <img src={About} alt="" width={50} height={50} className="rounded-full" />
          </div>
        </div>

        <section className="mb-12 flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Acerca de nosotros Sunshine University
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Bienvenido a Sunshine University, donde el conocimiento se encuentra con la innovación y los
              sueños se transforman en realidad. Fundada en el espíritu de la exploración intelectual y la
              excelencia académica, Sunshine University es un faro de la educación superior que tiene como
              objetivo capacitar a la próxima generación de líderes globales, pensadores y creadores.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={About} alt="" width={500} height={300} className="rounded-lg shadow-lg" />
            <p className="text-gray-700 dark:text-gray-300">
              En Sunshine University, nuestra misión es cultivar un entorno de aprendizaje dinámico e inclusivo
              que fomente el pensamiento crítico, la creatividad y el liderazgo ético. Estamos comprometidos a
              proporcionar una educación de clase mundial que prepare a nuestros estudiantes para sobresalir en sus
              campos elegidos, abordar retos complejos y contribuir de manera significativa a la sociedad.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={About} alt="" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;