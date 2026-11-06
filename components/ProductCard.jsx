'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { Star, Plus, Eye, Check } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart, setQuickViewProduct } = useCart();

  return (
    <div className="group relative rounded-2xl bg-[#09120a] border border-emerald-950/80 hover:border-emerald-600/50 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-emerald-950/40">
      
      {/* Top Media & Badges */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#040804]">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-md bg-emerald-500 text-black">
            {product.badge}
          </div>
        )}

        {/* Quick View Button */}
        <button
          onClick={() => setQuickViewProduct(product)}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 hover:bg-emerald-600 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
          title="Quick View Details"
          aria-label="Quick View Details"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Pill */}
        <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-[#060b06]/85 backdrop-blur-sm text-[11px] font-medium text-emerald-300 border border-emerald-900/60">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 mb-1.5">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
              <span className="font-bold ml-1 text-emerald-200">{product.rating}</span>
            </div>
            <span className="text-emerald-600">({product.reviewsCount} reviews)</span>
          </div>

          {/* Name & Tagline */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="text-base font-bold text-white hover:text-emerald-400 cursor-pointer transition-colors line-clamp-1"
          >
            {product.name}
          </h3>
          <p className="text-xs text-emerald-200/60 mt-1 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-emerald-950/80 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-emerald-300 font-mono">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-emerald-700 line-through font-mono">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-500/80 font-medium flex items-center gap-1">
              <Check className="w-2.5 h-2.5" /> In Stock & Modular
            </span>
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            aria-label={`Add ${product.name} to cart`}
            className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-black font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-950/40 transition-all"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add</span>
          </button>
        </div>

      </div>
    </div>
  );
}

