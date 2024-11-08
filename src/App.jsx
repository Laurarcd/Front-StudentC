// App.js o donde esté tu estructura de componentes
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Steps from './components/Steps';
import Requirements from './components/Requirements';
import Forms from './components/Forms';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div id="inicio"><Hero /></div>
      <div id="sobre-nosotros"><About /></div>
      <div id="caracteristicas"><Steps /></div>
      <div id="requisitos"><Requirements /></div>
      <div id="contacto"><Forms /></div>
      <Footer />
    </div>
  );
}

export default App;
