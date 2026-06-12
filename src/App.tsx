/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { HoReCa } from './pages/HoReCa';
import { Order } from './pages/Order';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/horeca" element={<HoReCa />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
      <FloatingActions />
    </Router>
  );
}
