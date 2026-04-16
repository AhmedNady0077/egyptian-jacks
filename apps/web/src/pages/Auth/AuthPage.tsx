// AuthPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 w-full max-w-md p-6 sm:p-8 transition-all duration-300">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            {isLogin ? 'مرحباً بعودتك' : 'انضم إلينا'}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-1">
            {isLogin ? 'سجل الدخول لمواصلة اللعب' : 'أنشئ حساباً وابدأ اللعب الآن'}
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">الاسم</label>
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition text-sm"
                placeholder="أدخل اسمك"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">كلمة المرور</label>
            <input
              type="password"
              className="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition text-sm"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-2.5 rounded-lg transition-all duration-200 text-base">
            {isLogin ? 'دخول' : 'إنشاء حساب'}
          </button>
        </form>

        <div className="mt-5 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-amber-300 hover:text-amber-400 transition-colors text-sm underline-offset-2 hover:underline"
          >
            {isLogin ? 'ليس لديك حساب؟ سجل الآن' : 'لديك حساب بالفعل؟ سجل دخول'}
          </button>
        </div>

        <div className="mt-5 text-center">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm inline-flex items-center gap-1">
            ← العودة إلى الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}