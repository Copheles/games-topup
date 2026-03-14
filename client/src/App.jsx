import { Routes, Route, useParams, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GamePicker from './components/GamePicker';
import GamePackagesView from './components/GamePackagesView';
import Checkout from './components/Checkout';
import Success from './components/Success';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { PACKAGES_BY_GAME } from './data/packages';
import { GAME_CONFIG } from './data/games';
import './App.css';

function CheckoutPage() {
  const { gameId, packageId } = useParams();
  const navigate = useNavigate();
  const packages = PACKAGES_BY_GAME[gameId];
  const pkg = packages?.find((p) => p.id === packageId);

  if (!pkg || !GAME_CONFIG[gameId]) {
    return <Navigate to="/" replace />;
  }

  const selected = { game: gameId, ...pkg };
  return (
    <Checkout
      selected={selected}
      onSuccess={(order) => navigate('/success', { state: { order } })}
      onBack={() => navigate(`/game/${gameId}`)}
      onContact={() => navigate('/contact')}
    />
  );
}

function SuccessPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state?.order;

  if (!order) {
    return <Navigate to="/" replace />;
  }

  return (
    <Success
      order={order}
      onBack={() => navigate('/')}
      onContact={() => navigate('/contact')}
    />
  );
}

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<GamePicker />} />
          <Route path="/game/:gameId" element={<GamePackagesView />} />
          <Route path="/game/:gameId/checkout/:packageId" element={<CheckoutPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
