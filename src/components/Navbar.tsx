import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { navItems } from '../lib/nav';
import { business } from '../data/business';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // close the mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-bold font-heading uppercase tracking-wide transition-colors ${
      isActive ? 'text-primary' : 'text-dark hover:text-primary'
    }`;

  return (
    <header className="fixed top-0 z-50 w-full bg-white h-[80px] flex items-center shadow-sm shrink-0 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between max-w-screen-xl">
        <Link to="/" className="block -ml-1 shrink-0" aria-label="ПОКРИВЧЕ — начало">
          <img src="/images/logo.png" alt="ПОКРИВЧЕ — Ремонт на покриви" className="h-14 sm:h-[64px] w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 bg-primary text-white px-4 sm:px-6 py-2 rounded-brand font-bold text-sm tracking-wide hover:bg-red-800 transition-colors"
          >
            <Phone className="w-4 h-4 hidden sm:block" />
            <span className="text-sm sm:text-lg whitespace-nowrap">{business.phone}</span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Затвори менюто' : 'Отвори менюто'}
            aria-expanded={open}
            className="lg:hidden w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-dark hover:border-primary hover:text-primary transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-x-0 top-[80px] bottom-0 bg-white z-40 animate-[fadeIn_0.15s_ease-out] overflow-y-auto">
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `py-4 border-b border-gray-100 text-lg font-bold font-heading uppercase tracking-wide ${
                    isActive ? 'text-primary' : 'text-dark'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={business.phoneHref}
              className="mt-6 flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-brand font-bold uppercase tracking-widest"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
