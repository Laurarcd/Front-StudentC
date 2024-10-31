import React from 'react'

const Card = ({ title, description, icon }) => {
    return (
      <article className="border border-muted-foreground border-dashed p-5 rounded-lg flex flex-col items-center gap-y-5">
        <img src={icon} alt={title} width={50} height={50} />
        <h3 className="text-2xl font-medium text-center">{title}</h3>
        <p className="text-muted-foreground line-clamp-3 text-center">{description}</p>
      </article>
    );
  };

      const About = () => {
        return (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Card
              icon="/icons/time-management.png"
              title="Gestión de cuenta"
              description="Crear, optimizar y gestionar tu cuenta."
            />
            <Card
              icon="/icons/workflow.png"
              title="Configuración & Flujos de trabajo"
              description="Publique ofertas de empleo atractivas y agilice su proceso de contratación."
            />
            <Card
              icon="/icons/search-icon.png"
              title="Buscar candidatos"
              description="Atraer y captar el talento adecuado a través de todos los canales adecuados."
            />
            <Card
              icon="/icons/api.png"
              title="Integraciones de APIS"
              description="Explore integraciones perfectas y potentes funciones de API."
            />
            <Card
              icon="/icons/hire.png"
              title="Seguimiento, evaluación y contratación"
              description="Interactúe con candidatos y colegas para lograr una gran contratación."
            />
            <Card
              icon="/icons/employees-management.png"
              title="Gestión de empleados"
              description="Incorpore a sus nuevas contrataciones y gestione a sus empleados."
            />
          </div>

        );
    };

export default About;
