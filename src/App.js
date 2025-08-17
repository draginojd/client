
import './App.css';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
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


function App() {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
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
      <Navigation links={navLinks} />
      <Breadcrumb items={breadcrumbItems} />
      <h1>My Portfolio</h1>
      <Carousel>
        <Slideshow images={slideshowImages} />
      </Carousel>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {portfolioItems.map((item, idx) => (
          <PortfolioItem key={idx} {...item} />
        ))}
      </div>
      <Card>
        <h2>Contact Me</h2>
        <Checkbox label="Subscribe to newsletter" checked={false} onChange={() => {}} />
        <Slider min={0} max={10} value={5} onChange={() => {}} />
        <Button>Send Message</Button>
      </Card>
      <Pagination current={1} total={3} onPageChange={() => {}} />
      <Footer />
    </div>
  );
}

export default App;
