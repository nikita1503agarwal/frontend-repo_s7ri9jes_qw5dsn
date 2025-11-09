import { useState } from 'react';
import { Rocket, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Fitur', href: '#features' },
    { label: 'Cara Kerja', href: '#how' },
    { label: 'Harga', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">UGC Market</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari kreator atau brand"
                className="pl-9 pr-3 py-2 w-64 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300">Masuk</a>
            <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Daftar</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-gray-700">
                {item.label}
              </a>
            ))}
            <div className="pt-3 flex gap-3">
              <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300">Masuk</a>
              <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Daftar</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
