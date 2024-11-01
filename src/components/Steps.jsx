// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FcInspection } from "react-icons/fc";

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, icon: Icon }) => {
    return (
        <article className='flex flex-col items-center justify-center p-4 rounded-xl border-2 border-primary border-dashed w-120 h-30'>
            <div className='flex justify-center mb-2'>
                <Icon size={40}/>  
            </div>
            <h3 className="text-xl font-medium text-center">{title}</h3> 
            <p className=" text-justify text-center" dangerouslySetInnerHTML={{ __html: description }} ></p>
        </article>
    );
};

const About = () => {
    return (
        <div>
            <div className="w-full bg-gray-200">
                <h2 className="text-2xl text-primary font-bold text-center py-6">
                    ¿Cómo funciona Student Connect?
                </h2>
            </div>
            <div className="flex items-center justify-center p-8 xl:p-14">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <Card
                        icon={FcInspection}
                        title="Paso 1: Registro"
                        description= {`Crea una cuenta en Student Connect proporcionando tu información básica, como nombre, correo institucional, boleta y contraseña.
                            <br />Elige tu rol, pasajero o conductor.`}
                    />
                    <Card
                        icon={FcInspection}
                        title="Paso 2: Configura tu cuenta"
                        description={`Completa tu perfil agregando datos adicionales.
                                        <br/> Dependiendo tu rol, son los datos a solicitar `}
                    />
                    <Card
                        icon={FcInspection}
                        title="Paso 3: Conoce las rutas"
                        description="Explora y únete a ."
                    />
                </div>
            </div>
        </div>
    );
};

export default Steps;
