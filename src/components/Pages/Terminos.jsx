// src/components/Pages/Terminos.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Terminos = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Términos y Condiciones</span>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Términos y Condiciones
          </h1>

          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                1. Aceptación de los Términos
              </h2>
              <p className="mb-4">
                Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                2. Uso del Servicio
              </h2>
              <p className="mb-4">
                Nuestros servicios están diseñados para proporcionar información y asistencia relacionada con inversiones y finanzas. El uso de nuestros servicios está sujeto a las siguientes condiciones:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La información proporcionada es únicamente con fines informativos</li>
                <li>No garantizamos la precisión o integridad de la información</li>
                <li>El usuario es responsable de verificar la información antes de tomar decisiones</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                3. Privacidad y Protección de Datos
              </h2>
              <p className="mb-4">
                La protección de sus datos personales es importante para nosotros. Nuestra política de privacidad describe cómo recopilamos, utilizamos y protegemos su información personal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                4. Propiedad Intelectual
              </h2>
              <p className="mb-4">
                Todo el contenido presente en este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes y software, está protegido por derechos de autor y otros derechos de propiedad intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                5. Limitación de Responsabilidad
              </h2>
              <p className="mb-4">
                En la máxima medida permitida por la ley aplicable, no seremos responsables por daños directos, indirectos, incidentales, consecuentes o punitivos resultantes del uso o la imposibilidad de uso de nuestros servicios.
              </p>
            </section>
          </div>

          {/* Back to Home Button */}
          <div className="mt-8">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-secundary transition-colors"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminos;