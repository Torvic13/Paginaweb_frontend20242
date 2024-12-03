import { createBrowserRouter} from 'react-router-dom';
import MainPage from './pages/MainPage';
import NATH from './pages/NATH';
import PROPLAN from './pages/PROPLAN';
import CANBO from './pages/CANBO';
import HILLS from './pages/HILLS';
import PerroPage from './pages/PerroPage';
import GatoPage from './pages/GatoPage';
import LoginPage from './pages/LoginPage';
import RegistroPage from './pages/RegistroPage';
import CRUD from './pages/CRUD';

const router = createBrowserRouter([
    { path : "/", element: <MainPage />},
    { path : "/NATH", element: <NATH />},
    { path : "/HILLS", element: <HILLS />},
    { path : "/PROPLAN", element: <PROPLAN />},
    { path : "/CANBO", element: <CANBO />,},
    { path : "/Perro", element: <PerroPage />},
    { path : "/Gato", element: <GatoPage />},
    {path : "/usuario", element: <LoginPage />},
    {path : "/registrar", element: <RegistroPage />},
    {path : "/admin", element: <CRUD />}
  ])

  export default router