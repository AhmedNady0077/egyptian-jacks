// HomePage.jsx
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-56 h-56 sm:w-96 sm:h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-32 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
            Egyptian Jacks
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            🃏 العب الورق مع الأصدقاء. تنافس. اربح.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/game" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-2.5 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 text-base inline-flex items-center gap-2">
              🚀 ابدأ اللعب الآن
            </Link>
            <Link to="/auth" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 text-base inline-flex items-center gap-2">
              🔐 تسجيل الدخول / حساب جديد
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: '🎴', title: 'لعب سريع', desc: 'مباريات سريعة مع أصدقائك بدون تعقيد' },
            { icon: '🏆', title: 'نظام تصنيف', desc: 'تصدر لوحة المتصدرين وأثبت مهاراتك' },
            { icon: '🃟', title: 'قواعد أصلية', desc: 'نفس قواعد Egyptian Jacks الكلاسيكية' },
          ].map((feat, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-5xl mb-3 animate-bounce">{feat.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-300 mb-2">{feat.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-12 sm:py-16 mt-8 sm:mt-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold">جاهز للعب؟</h2>
          <Link to="/auth" className="inline-block mt-6 sm:mt-8 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-2.5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-base">
            سجل الآن مجاناً
          </Link>
        </div>
      </div>
    </div>
  );
}