// src/components/Pages/Terminos.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Terminos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Breadcrumb - Con padding responsivo */}
        <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-20 xl:pt-20">
          <div className="mb-8">
            <Link to="/" className="text-primary hover:underline">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Términos y Condiciones</span>
            <p className="text-gray-800 text-justify block">
            <br/>
            Student Connect brinda un servicio de transporte compartido que permite a nuestros estudiantes de la 
            ESCOM acceder a viajes seguros el "servicio de transporte", a través de una aplicación web que puede utilizarse en computadoras y otros dispositivos conectados a internet
            "dispositivos compatibles". <br/>
            Estos Términos de uso rigen el uso que haga de nuestro servicio, según se utilicen en estos Términos de uso, "el servicio de Student Connect", 
            "nuestro servicio" o "el servicio" se refieren al servicio brindado por Student Connect para publicar, 
            descubrir y acceder a viajes compartidos, incluidas todas las características y funcionalidades, sistema de reservas, calificaciones y reseñas,
            nuestra aplicación web y las interfaces de usuario, así como todo el contenido y software asociado a nuestro servicio. <br/>
            Las referencias a "usted" en estos Términos de uso señalan al estudiante que creó la cuenta de Student Connect, ya sea como conductor o pasajero, 
            utilizando un correo institucional válido del IPN y una matrícula activa de ESCOM.  
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Términos y Condiciones
            </h1>

            <div className="space-y-6 text-gray-600">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  1. Elegibilidad y registro
                </h2>
                <p className="mb-4 px-4">
                    1.1 El servicio está exclusivamente disponible para estudiantes activos de la Escuela Superior de Cómputo 
                    "ESCOM" del Instituto Politécnico Nacional "IPN".                
                </p>

                <p className="mb-4 px-4">
                    1.2. Para registrarse, los usuarios deberán:             
                </p>

                <ul className="list-disc pl-14 space-y-2 ">
                  <li>Se requiere verificación mediante el correo institucional del IPN</li>
                  <li>Se verificará que el número de boleta corresponda a un estudiante activo de ESCOM <br/>
                      En caso de pertenener a ESCOM,y no contar con un número de boleta valido, se hará un proceso manual
                      para validar que eres un estudiante activo de la ESCOM.
                  </li>
                  <li>Es obligatorio contar con una credencial oficial de la ESCOM vigente</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  2. Conductores
                </h2>
                <p className="mb-4 px-4">
                  2.1 Obligaciones de conductor: 
                </p>
                <ul className="list-disc pl-14 space-y-2">
                  <li>Publicar sus rutas semanales antes del sábado a las 10:00 p.m.</li>
                  <li>Mantener todos los documentos del vehículo vigentes y en orden.</li>
                  <li>Contar con seguro de automóvil vigente.</li>
                  <li>Seguir estrictamente la ruta publicada en la aplicación.</li>
                  <li>Respetar un tiempo máximo de espera de 5 minutos en cada paradas.</li>
                </ul>
                <p className="mb-4 px-4 mt-4">
                  2.2 Calificaciones: 
                </p>
                <ul className="list-disc pl-14 space-y-2">
                  <li>Los conductores deben mantener una calificación mínima de 2 estrellas.</li>
                  <li>Calificaciones inferiores pueden resultar en suspensión temporal o permanente.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  3. Pasajeros
                </h2>
                <p className="mb-4 px-4">
                  3.1 Obligaciones del pasajero:
                </p>
                <ul className="list-disc pl-14 space-y-2">
                  <li>Llegar puntualmente a la parada seleccionada.</li>
                  <li>Realizar el pago en efectivo al finalizar el viaje.</li>
                  <li>Mantener un comportamiento respetuoso durante el trayecto.</li>
                  <li>Proporcionar una calificación y retroalimentación después del viaje.</li>
                </ul>
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
    </div>
  );
};

export default Terminos;