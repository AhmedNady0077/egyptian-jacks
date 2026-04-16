// GamePage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GamePage() {
  const [tableCards] = useState(['🃟', '🃞', '🃝', '🃎']);
  const [playerHand] = useState(['🃑', '🃒', '🃓', '🃔', '🃕', '🃖']);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900 p-3 sm:p-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6 sm:mb-8">
          <Link to="/" className="text-amber-300 hover:text-amber-400 transition-colors font-semibold text-sm sm:text-base">
            🏠 الرئيسية
          </Link>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20">
            <span className="text-base sm:text-lg font-bold text-amber-300">دورك: أنت</span>
          </div>
          <div className="flex gap-1.5">
            {[1, 2, 3].map((p) => (
              <div key={p} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-bold text-white text-xs shadow-md">
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* Table Area */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-6 min-h-[280px] flex flex-col items-center justify-center mb-6 sm:mb-8">
          <div className="text-6xl sm:text-7xl mb-4 animate-bounce">🃏</div>
          <p className="text-gray-200 mb-3 text-sm sm:text-base">البطاقات على الطاولة:</p>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {tableCards.map((card, idx) => (
              <div
                key={idx}
                className="w-14 h-20 sm:w-16 sm:h-24 bg-white rounded-lg shadow-lg flex items-center justify-center text-3xl sm:text-4xl transform hover:-translate-y-1 transition-all duration-200 cursor-pointer hover:shadow-amber-500/30"
              >
                {card}
              </div>
            ))}
          </div>
        </div>

        {/* Player Hand */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">
            🃟 أوراقك <span className="text-xs text-gray-300">(اضغط على بطاقة للعب)</span>
          </h3>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {playerHand.map((card, i) => (
              <div
                key={i}
                className="w-14 h-20 sm:w-16 sm:h-24 bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-md flex items-center justify-center text-3xl sm:text-4xl text-black hover:scale-105 hover:-translate-y-1 transition-all duration-200 cursor-pointer hover:shadow-lg"
              >
                {card}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-2 px-5 rounded-xl transition-all duration-200 text-sm sm:text-base shadow-md">
              لعب البطاقة
            </button>
            <button className="bg-red-600/80 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-xl transition-all duration-200 text-sm sm:text-base shadow-md">
              خروج من اللعبة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}