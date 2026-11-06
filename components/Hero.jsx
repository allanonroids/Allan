import React from 'react';
import { ArrowRight, Wrench, ShieldCheck, Leaf, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-emerald-950/60 bg-gradient-to-b from-[#08130a] via-[#060a06] to-[#040705]">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-24 -left-40 w-96 h-96 bg-teal-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide uppercase shadow-inner">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>Next-Gen Modular Hardware Ecosystem</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            High-Performance Tech.{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500 bg-clip-text text-transparent">
              Built to Endure.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-emerald-100/70 leading-relaxed font-normal">
            Verdant engineers custom mechanical peripherals, bio-composite acoustic audio, and living timber workspace furniture designed with zero glued batteries, universal repair components, and lifetime modularity.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#products"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#parts"
              className="px-6 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/40 text-emerald-200 font-semibold text-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Wrench className="w-4 h-4 text-emerald-400" />
              <span>Browse Modular Parts</span>
            </a>
          </div>

          {/* Highlights / Trust metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 text-left">
            <div className="p-4 rounded-2xl bg-[#09140c]/80 border border-emerald-900/40 flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-emerald-950 border border-emerald-800/40 text-emerald-400 shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-emerald-100">100% User Repairable</h4>
                <p className="text-xs text-emerald-200/60 mt-1 leading-snug">
                  Every switch, driver, battery cell, and gasket can be replaced in minutes using standard tools.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#09140c]/80 border border-emerald-900/40 flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-emerald-950 border border-emerald-800/40 text-emerald-400 shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-emerald-100">Sustainable Materials</h4>
                <p className="text-xs text-emerald-200/60 mt-1 leading-snug">
                  CNC recycled aluminum, FSC Appalachian timber, bio-composites, and Icelandic acoustic moss.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#09140c]/80 border border-emerald-900/40 flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-emerald-950 border border-emerald-800/40 text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-emerald-100">3-Year Modular Warranty</h4>
                <p className="text-xs text-emerald-200/60 mt-1 leading-snug">
                  Free component replacements shipped immediately. Built for a generation of use.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

