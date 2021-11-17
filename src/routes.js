import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import FacilityRoomListDashboard from './Facility/pages/FacilityRoomListDashboard';
import FacilityDetailDashboard from './Facility/pages/FacilityDetailDashboard';
import Account from './pages/Account';
import CustomerList from './pages/CustomerList';
// import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Settings from './pages/Settings';
import FacilityDetailContainer from './Facility/containers/FacilityDetailContainer';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <FacilityRoomListDashboard /> },
      // { path: '/facility/rooms/:room_id/', element: <FacilityDetailDashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },

  {
    path: '/facility/',
    children: [

      // { path: 'rooms/:room_id/', element: <FacilityDetailDashboard /> },
      { path: 'rooms/:room_id/', element: <FacilityDetailContainer /> },
    ]
  },

];

export default routes;
