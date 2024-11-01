import React from 'react'

const About = () => {
  return (
<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center p-8 xl:p-14">
    <div className="md:col-span-1 flex justify-center">
        <img src="Carpool.jpg" className="w-full h-auto object-cover"/>
    </div>
    <div className='md:col-span-1'>
        <div className="text-center mt-4 md:mt-[-170px]">
            <h2 className="text-2xl text-primary font-bold">¿Qué es?</h2>
            <p className="py-2 md:py-4">Descripción sobre qué es el servicio o producto, explicando de manera breve y concisa para que los usuarios comprendan fácilmente.</p>
        </div>
    </div>
</div>


        );
    };

export default About;
