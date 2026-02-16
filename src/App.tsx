import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeSection from './assets/Components/Pages/Home';
import Team from './assets/Components/Pages/About';
import ContactUs from './assets/Components/Pages/ContactUs';
import Privacy from './assets/Components/Pages/Privacy';

const basename = window.location.pathname.startsWith('/gtm') ? '/gtm' : '/';

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/about" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
