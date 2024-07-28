import './App.css';
//import Landing from './pages/Landing';
import Doctor from './pages/Doctor';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3700);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={isLoading ? <Preloader /> : <Doctor />} />
      </Routes>
    </>
  );
}

export default App;
