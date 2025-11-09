export default function CTA() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-10 text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 -mr-24 -mt-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-10 items-center relative">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Mulai kolaborasi UGC hari ini</h3>
              <p className="mt-3 text-white/80">Buat brief Anda, pilih kreator, dan terima konten berkualitas dalam hitungan hari.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm hover:bg-white/90">
                Buat Proyek Gratis
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Jadwalkan Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
