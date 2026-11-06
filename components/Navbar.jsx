'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Search, Sparkles, Menu, X, SlidersHorizontal } from 'lucide-react';

export default function Navbar({ searchQuery, setSearchQuery }) {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#0b1b11] border-b border-emerald-950/70 text-xs text-emerald-300/90 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              Earth Week Launch: Free carbon-offset shipping on orders over <strong>$75</strong>. Use code{' '}
              <span className="font-mono bg-emerald-950/90 border border-emerald-600/40 text-emerald-300 px-1.5 py-0.5 rounded text-[11px] font-semibold">
                VERDANT10
              </span>{' '}
              for 10% off.
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-emerald-400/70">
            <span>Modular 3-Year Warranty</span>
            <span>•</span>
            <span>FSC-Certified Craftsmanship</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#060a06]/85 backdrop-blur-xl border-b border-emerald-950/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-emerald-950/40 group-hover:scale-105 transition-transform">
              V
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                VERDANT
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-emerald-400/80">
                Eco Modular Tech
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-emerald-100/80">
            <a href="#products" className="hover:text-emerald-400 transition-colors">
              Collection
            </a>
            <a href="#parts" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>Modular Parts</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded-full font-mono">
                DIY
              </span>
            </a>
            <a href="#sustainability" className="hover:text-emerald-400 transition-colors">
              Sustainability
            </a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-xs items-center relative">
            <Search className="w-4 h-4 text-emerald-500/60 absolute left-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search gear or modular parts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0d160e] border border-emerald-900/60 focus:border-emerald-500/80 text-emerald-100 placeholder-emerald-700/80 text-sm rounded-xl pl-9 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 text-xs text-emerald-600 hover:text-emerald-300"
              >
                ✕
              </button>
            )}
          </div>

          {/* Cart & Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="View Shopping Cart"
              className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/70 border border-emerald-800/40 text-emerald-200 transition-all hover:scale-105 active:scale-95 group"
            >
              <ShoppingBag className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300" />
              <span className="text-sm font-semibold hidden sm:inline">Bag</span>
              <span className="bg-emerald-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItemsCount}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-900/50 text-emerald-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a120b] border-b border-emerald-950/80 px-4 pt-3 pb-6 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-emerald-500/60 absolute left-3 top-3 pointer-events-none" />
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#070e08] border border-emerald-900/60 text-emerald-100 placeholder-emerald-700/80 text-sm rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div className="flex flex-col gap-3 font-medium text-sm text-emerald-100/90 pt-1">
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-emerald-950/50 hover:text-emerald-400"
              >
                Collection
              </a>
              <a
                href="#parts"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-emerald-950/50 hover:text-emerald-400 flex justify-between items-center"
              >
                <span>Modular Replacement Parts</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded font-mono">
                  DIY
                </span>
              </a>
              <a
                href="#sustainability"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-emerald-950/50 hover:text-emerald-400"
              >
                Sustainability Pledge
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-emerald-400"
              >
                FAQ & Support
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

