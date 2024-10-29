// eslint-disable-next-line no-unused-vars
import React from 'react'
import { VscArrowSmallRight } from "react-icons/vsc";

const Hero = () => {
  return (
    <section className='min-h-[90vh] grid grid-cols-1 md:grid-cols-8'> 
    <div className='md:col-span-5 flex items-center justify-center p-8 xl:p-14'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-7xl font-bold leading-[9rem]'> 
          
          Conecta con <br/> <span className='text-primary text-center px-2 border-8 border-primary relative inline-block'> Student Connect </span>

        </h1>
          <p className='text-primary font-bold text-3xl -px-2 '>
          Redescubre cómo moverte con Student Connect 
          </p>
          <p className='text-grey-900'>
          La convivencia se une a la comodidad en una 
          comunidad donde cada viaje mejora tu experiencia diaria.
          </p>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <button className='flex items-center gap-4 bg-primary text-white py-2 px-8 rounded-xl text-xl'> 
             Regístrate <VscArrowSmalrfrggrelRight /> </button>
            <button className='w-full items-center bg-gray-600 text-white py-2 px-12 rounded-xl text-xl '> Conócenos </button>
          </div>
      </div>
    </div>  
      <div className='md:col-span-3 flex items-center justify-center'> 
        <img src='Mapa.png' className='object-cover'/>
      </div>

    </section>
  )
}

export default Hero;