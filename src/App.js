import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import MediaCard from './components/Card';
import Mapp from './components/Map';

function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <MediaCard/>
    <Mapp/>
    </>
  );
}

export default App;
