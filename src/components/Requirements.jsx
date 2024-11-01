import { FaSchool, FaEnvelope, FaFileContract, FaShieldAlt } from 'react-icons/fa';

const Requirements = () => {
    return (
        <div className="bg-primary p-10  mx-auto my-8 ">

            <h2 className="text-white text-3xl font-bold mb-8 px-20">Requisitos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center text-center">
    <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg  items-center text-center ">
        <FaSchool className="text-secundary text-4xl mb-4" />
        <p className="text-gray-700 font-semibold">Ser estudiante activo de la ESCOM</p>
    </div>
    <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg items-center text-center">
        <FaEnvelope className="text-secundary text-4xl mb-4" />
        <p className="text-gray-700 font-semibold">Necesitas un correo institucional y boleta del IPN</p>
    </div>
    <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg  items-center text-center ">
        <FaFileContract className="text-secundary text-4xl mb-4" />
        <p className="text-gray-700 font-semibold">Al registrarte, aceptas nuestros términos y condiciones</p>
    </div>
    <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg  items-center text-center">
        <FaShieldAlt className="text-secundary text-4xl mb-4" />
        <p className="text-gray-700 font-semibold">Compromiso de seguir las normas de seguridad y conducta durante el uso de la plataforma</p>
    </div>
</div>

        </div>
    );
};

export default Requirements;
