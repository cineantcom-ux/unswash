import React, { useState } from 'react';

export default function LandingPage() {
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="bg-white text-brand-black min-h-screen font-sans">
      {/* 1. HERO SEKCE - CO DĚLÁME */}
      <section className="h-screen flex flex-col justify-center px-10 bg-black text-white">
        <h1 className="text-6xl font-bold mb-4">CINEANT</h1>
        <p className="text-xl text-gray-400">Vizuální příběhy, které vyčnívají z davu.</p>
      </section>

      {/* 2. UKÁZKY PRACÍ */}
      <section className="py-20 px-10 bg-white">
        <h2 className="text-3xl font-bold mb-10 uppercase tracking-widest">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tady budou komponenty s tvými videi */}
          <div className="aspect-video bg-gray-200 hover:opacity-80 transition cursor-pointer"></div>
          <div className="aspect-video bg-gray-200 hover:opacity-80 transition cursor-pointer"></div>
        </div>
      </section>

      {/* 3. KONTAKTNÍ FORMULÁŘ */}
      <section className="py-20 px-10 bg-black text-white">
        <h2 className="text-3xl font-bold mb-10">Pojďme tvořit</h2>
        <form className="max-w-md">
          <input className="w-full p-3 mb-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition" placeholder="Váš email" />
          <button 
            type="button"
            onClick={() => setIsSent(true)}
            className="flex items-center gap-2 group transition"
          >
            <span>Odeslat poptávku</span>
            {/* Ikona, která po odeslání zmodrá */}
            <svg 
              className={`w-6 h-6 transition-colors duration-500 ${isSent ? 'text-ocean-blue' : 'text-white'}`} 
              fill="currentColor" viewBox="0 0 20 20"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </form>
      </section>
    </div>
  );
}
