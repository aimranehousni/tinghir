import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import des pages principales
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Import des pages de lieux
import Lieux from './pages/lieux';
import PlaceDetail from './pages/lieux/PlaceDetail';

// Import des pages d'itinéraires
import Itineraires from './pages/itineraires';
import ItineraryDetail from './pages/itineraires/ItineraryDetail';

// Import de la page de carte
import Carte from './pages/carte';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes principales */}
        <Route path="/" element={<Home />} />
        
        {/* Routes des lieux */}
        <Route path="/lieux" element={<Lieux />} />
        <Route path="/lieux/:id" element={<PlaceDetail />} />
        
        {/* Routes des itinéraires */}
        <Route path="/itineraires" element={<Itineraires />} />
        <Route path="/itineraires/:id" element={<ItineraryDetail />} />
        
        {/* Route de la carte */}
        <Route path="/carte" element={<Carte />} />
        
        {/* Route 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
