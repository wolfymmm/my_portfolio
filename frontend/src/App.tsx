import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from './store';
import { Home } from './pages/Home/Home'; 
import Layout from './Layout';
import './App.scss'; 

const App: React.FC = () => {
  const themeMode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;