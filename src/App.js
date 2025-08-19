
import './App.css';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Carousel from './components/Carousel/Carousel';
import Checkbox from './components/Checkbox/Checkbox';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Pagination from './components/Pagination/Pagination';
import PortfolioItem from './components/PortfolioItem/PortfolioItem';


import Slider from './components/Slider/Slider';
import Slideshow from './components/Slideshow/Slideshow';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Cursor from './components/Cursor/Cursor';


function App() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contacts', href: '#contacts' },
  ];
  const breadcrumbItems = ['Home', 'Portfolio'];
  const portfolioItems = [
    {
      title: 'DevOps Automation',
      description: 'Automated CI/CD pipelines with Docker and Jenkins.',
      image: 'https://via.placeholder.com/320x180?text=DevOps',
      link: '#',
    },
    {
      title: 'React Dashboard',
      description: 'A modern dashboard built with React and Chart.js.',
      image: 'https://via.placeholder.com/320x180?text=React+Dashboard',
      link: '#',
    },
  ];
  const slideshowImages = [
    'https://via.placeholder.com/320x180?text=Slide+1',
    'https://via.placeholder.com/320x180?text=Slide+2',
    'https://via.placeholder.com/320x180?text=Slide+3',
  ];
  return (
    <div className="App">
  <Cursor />
  <Navigation links={navLinks} />
  <Hero />
  
  <About />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
    </div>
  );
}

export default App;
