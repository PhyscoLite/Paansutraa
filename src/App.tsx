/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingActions />
    </>
  );
}
