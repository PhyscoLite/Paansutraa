import { ViteReactSSG } from 'vite-react-ssg';
import App from './App.tsx';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { HoReCa } from './pages/HoReCa';
import { Order } from './pages/Order';
import { Contact } from './pages/Contact';
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
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <div className="min-h-screen pt-32 text-center"><h1 className="text-display-md text-secondary mb-4">404</h1><p>Page not found. <a href="/" className="underline text-secondary">Return home</a>.</p></div> },
    ],
  },
];

export const createRoot = ViteReactSSG({ routes });
