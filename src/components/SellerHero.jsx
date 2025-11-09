import Spline from '@splinetool/react-spline';

export default function SellerHero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Spline scene="https://prod.spline.design/8oLhN6t3uV9d1e8S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">Jual Produk Digital Anda dengan Elegan</h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">Template, e-book, preset, UI kit, dan resource lain — tampilkan dengan profesional dan konversi lebih tinggi.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#products" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">Lihat Koleksi</a>
            <a href="#benefits" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100">Mengapa Memilih Kami</a>
          </div>
        </div>
      </div>
    </section>
  );
}
