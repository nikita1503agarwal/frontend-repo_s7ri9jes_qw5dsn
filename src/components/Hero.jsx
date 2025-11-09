import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Spline scene="https://prod.spline.design/8oLhN6t3uV9d1e8S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              <Star className="h-3.5 w-3.5" />
              Marketplace UGC Terpercaya
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Temukan dan Jual Konten UGC berkualitas
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Hubungkan brand dengan kreator untuk video, foto, dan review autentik yang mendorong konversi.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                Mulai Sekarang
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100">
                Lihat Fitur
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-gray-600">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} src={`https://i.pravatar.cc/80?img=${i + 10}`} alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-white" />
                ))}
              </div>
              <p className="text-sm"><span className="font-semibold text-gray-900">5.000+</span> kreator & brand sudah bergabung</p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white/80 backdrop-blur">
              <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070&auto=format&fit=crop" alt="UGC Content" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
