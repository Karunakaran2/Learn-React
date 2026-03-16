import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ActsRules } from './pages/ActsRules';
import { Circulars } from './pages/Circulars';
import { Services } from './pages/Services';
import { News } from './pages/News';
import { Gallery } from './pages/Gallery';
import { Grievance } from './pages/Grievance';
import { Contact } from './pages/Contact';
import { RTI } from './pages/RTI';

function App() {
  return (
    <AccessibilityProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="acts-rules" element={<ActsRules />} />
            <Route path="circulars" element={<Circulars />} />
            <Route path="services" element={<Services />} />
            <Route path="news" element={<News />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="grievance" element={<Grievance />} />
            <Route path="contact" element={<Contact />} />
            <Route path="rti" element={<RTI />} />
          </Route>
        </Routes>
      </Router>
    </AccessibilityProvider>
  );
}

export default App;
