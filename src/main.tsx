import { ViteReactSSG } from 'vite-react-ssg';
import App from './App.tsx';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { HoReCa } from './pages/HoReCa';
import { Order } from './pages/Order';
import { Weddings } from './pages/Weddings';
import { Corporate } from './pages/Corporate';
import './index.css';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/products', element: <Products /> },
      { path: '/horeca', element: <HoReCa /> },
      { path: '/order', element: <Order /> },
      { path: '/weddings', element: <Weddings /> },
      { path: '/corporate', element: <Corporate /> },
    ],
  },
];

export const createRoot = ViteReactSSG({ routes });
