// eslint-disable-next-line no-unused-vars
import React from 'react'
import { VscArrowSmallRight } from "react-icons/vsc";

const Hero = () => {
  return (
    <section className='h-[90vh] grid grid-cols-1 md:grid-cols-8'> 
    <div className='md:col-span-5 flex items-center justify-center p-8'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-7xl font-bold leading-[9rem]'> 
          
          Conecta con  <span className='text-primary px-2 border-8 border-primary'> Student Connect </span>

        </h1>
          <p className='text-primary font-bold text-3xl -px-2 '>
          Redescubre cómo moverte con Student Connect 
          </p>
          <p className='text-red-900'>
          La convivencia se une a la comodidad en una 
          comunidad donde cada viaje mejora tu experiencia diaria.
          </p>
          <div>
            <button className='flex items-center gap-4 bg-primary text-white py-2 px-8 rounded-xl text-xl'> 
             Regístrate <VscArrowSmallRight /> </button>
            <button className='py-2 px-8 rounded-xl text-xl'> Conócenos </button>
          </div>
      </div>
    </div>  
      <div className='md:col-span-3'> 

      </div>

    </section>
  )
}

export default Hero;