'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { CheckCircle2, Info, AlertCircle } from 'lucide-react';

export default function ToastContainer() {
  const { toasts } = useCart();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 pointer-events-none max-w-sm w-full">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isInfo = toast.type === 'info';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md border text-sm font-medium transition-all duration-300 animate-slide-in ${
              isSuccess
                ? 'bg-[#0f2415]/95 border-emerald-500/40 text-emerald-200'
                : isInfo
                ? 'bg-[#0f1f2e]/95 border-sky-500/40 text-sky-200'
                : 'bg-[#261515]/95 border-rose-500/40 text-rose-200'
            }`}
          >
            {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
            {isInfo && <Info className="w-5 h-5 text-sky-400 shrink-0" />}
            {!isSuccess && !isInfo && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
            <span className="flex-1">{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
}

