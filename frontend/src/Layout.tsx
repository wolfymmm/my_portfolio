import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => (
  <div className="layout">
    <Outlet /> 
  </div>
);

export default Layout;