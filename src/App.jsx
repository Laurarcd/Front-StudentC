import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Steps from './components/Steps';
import Requirements from './components/Requirements';
import Testimonial from './components/Testimonials';
import Forms from './components/Forms';
import Footer from './components/Footer';
import Terminos from './components/Pages/Terminos';
import Priv from './components/Pages/Priv';
import FAQ from './components/Pages/FAQ';

function HomePage() {
  return (
    <>
      <div id="inicio"><Hero /></div>
      <div id="sobre-nosotros"><About /></div>
      <div id="caracteristicas"><Steps /></div>
      <div id="requisitos"><Requirements /></div>
      <div id="testimonial"><Testimonial /></div>
      <div id="contacto"><Forms /></div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/priv" element={<Priv/>} />
          <Route path="/FAQ" element={<FAQ/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;