import './css/style.css'
import './css/bootstrap-icons.css'
import Header from './components/Header';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Services from './components/Services/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
