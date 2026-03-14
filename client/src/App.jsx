import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Checkout from './components/Checkout';
import Success from './components/Success';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [selectedGame, setSelectedGame] = useState(null);
  const [selected, setSelected] = useState(null);
  const [order, setOrder] = useState(null);

  const handleSelect = (pkg) => {
    setSelected(pkg);
    setView('checkout');
  };

  const handleSuccess = (orderData) => {
    setOrder(orderData);
    setView('success');
  };

  const handleBackFromCheckout = () => {
    setView('home');
    setSelected(null);
  };

  const handleBackFromSuccess = () => {
    setView('home');
    setSelected(null);
    setSelectedGame(null);
    setOrder(null);
  };

  const handleGoHome = () => {
    setView('home');
    setSelected(null);
    setSelectedGame(null);
    setOrder(null);
  };

  const handleAbout = () => setView('about');
  const handleContact = () => setView('contact');

  let mainContent;
  if (view === 'checkout' && selected) {
    mainContent = (
      <Checkout
        selected={selected}
        onSuccess={handleSuccess}
        onBack={handleBackFromCheckout}
        onContact={handleContact}
      />
    );
  } else if (view === 'success' && order) {
    mainContent = <Success order={order} onBack={handleBackFromSuccess} onContact={handleContact} />;
  } else if (view === 'about') {
    mainContent = <AboutPage />;
  } else if (view === 'contact') {
    mainContent = <ContactPage />;
  } else {
    mainContent = (
      <HomePage
        selectedGame={selectedGame}
        onGameSelect={setSelectedGame}
        onSelect={handleSelect}
      />
    );
  }

  return (
    <div className="app-layout">
      <Navbar
        onHome={handleGoHome}
        onAbout={handleAbout}
        onContact={handleContact}
        currentView={view}
      />
      <main className="app-main">{mainContent}</main>
      <Footer onAbout={handleAbout} onContact={handleContact} />
    </div>
  );
}

export default App;
