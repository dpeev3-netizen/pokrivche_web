import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import CookieConsent from './components/CookieConsent';

/** Scrolls to top on route change (no-op during SSR). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Root layout shared by every page. */
export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col overflow-x-hidden selection:bg-primary/30 selection:text-dark">
        <Navbar />
        <main className="flex-grow flex flex-col pt-[80px]">
          <Outlet />
        </main>
        <Footer />
      </div>
      <FloatingContact />
      <CookieConsent />
    </>
  );
}
