'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import ProductCard from './ProductCard';
import { SlidersHorizontal, PackageSearch } from 'lucide-react';

export default function ProductGrid({ searchQuery, setSearchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default / featured
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-emerald-950/80">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
            Core Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Engineered Hardware & Workspaces
          </h2>
          <p className="text-sm text-emerald-300/60 mt-1 max-w-xl">
            Each item is designed for instant disassembly, universal replacement parts, and zero planned obsolescence.
          </p>
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-3">
          <SlidersHorizontal className="w-4 h-4 text-emerald-500/80" />
          <span className="text-xs font-semibold text-emerald-200/80">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#09120a] border border-emerald-900/60 text-emerald-200 text-xs font-medium rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500"
          >
            <option value="featured">Featured / Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Category Pills & Count */}
      <div className="py-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                  : 'bg-[#09120a] text-emerald-200/80 hover:bg-emerald-950/80 border border-emerald-900/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <span className="text-xs text-emerald-400/70 font-mono">
          Showing {filteredProducts.length} of {PRODUCTS.length} products
        </span>
      </div>

      {/* Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-2xl bg-[#081209] border border-dashed border-emerald-900/50 p-8 space-y-4">
          <PackageSearch className="w-12 h-12 text-emerald-500/50 mx-auto" />
          <h3 className="text-lg font-bold text-white">No products found</h3>
          <p className="text-xs text-emerald-300/60 max-w-sm mx-auto">
            We couldn't find anything matching your filter criteria. Try searching for a different keyword or category.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/30 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}

