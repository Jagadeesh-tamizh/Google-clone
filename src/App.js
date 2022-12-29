import { Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Gmail from './pages/Gmail';
import HomePage from './pages/HomePage';
import Images from './pages/Images';
import Store from './pages/Store';
import GlobalStyle from './globalStyles';
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/gmail" element={<Gmail />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </>
  );
}
//      <Route path="/services" element={<Services />}

export default App;
