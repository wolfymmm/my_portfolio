import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from './store';
import { Home } from './pages/Home/Home'; 
import { NotFound } from './pages/NotFound/NotFound';
import Layout from './Layout';
import './variables.css'; 
import './shared.css';
import './App.css'; 

const App: React.FC = () => {
  const themeMode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  return (
    <>
    <Routes>
      <Route element={<Layout />}> 
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;