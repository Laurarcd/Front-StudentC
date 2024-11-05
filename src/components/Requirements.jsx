// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaSchool, FaEnvelope, FaFileContract, FaShieldAlt } from 'react-icons/fa';

const Requirements = () => {
    return (
        <div className="bg-white p-10 mx-auto my-8">
            <h2 className="text-secundary text-4xl font-bold mb-8 text-center">Requisitos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col bg-blue-200 p-6 rounded-lg shadow-lg items-center text-center w-full ">
                    <FaSchool className="text-secundary text-4xl mb-4" />
                    <p className="text-gray-700 font-semibold">Ser estudiante activo de la ESCOM</p>
                </div>
                <div className="flex flex-col bg-blue-200 p-6 rounded-lg shadow-lg items-center text-center w-full">
                    <FaEnvelope className="text-secundary text-4xl mb-4" />
                    <p className="text-gray-700 font-semibold">Necesitas un correo institucional y boleta del IPN</p>
                </div>
                <div className="flex flex-col bg-blue-200 p-6 rounded-lg shadow-lg items-center text-center w-full">
                    <FaFileContract className="text-secundary text-4xl mb-4" />
                    <p className="text-gray-700 font-semibold">Al registrarte, aceptas nuestros términos y condiciones</p>
                </div>
                <div className="flex flex-col bg-blue-200 p-6 rounded-lg shadow-lg items-center text-center w-full ">
                    <FaShieldAlt className="text-secundary text-4xl mb-4" />
                    <p className="text-gray-700 font-semibold">Compromiso de seguir las normas de seguridad y conducta durante el uso de la plataforma</p>
                </div>
            </div>
            <div>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1tgwENBe3A5jEVFB120gsemLjeDdbjfI&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
            </div>
        </div>
    );
};

export default Requirements;
