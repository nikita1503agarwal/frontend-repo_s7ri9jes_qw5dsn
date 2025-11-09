import { ShieldCheck, Video, Users, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Brief ke Konten Cepat',
    desc: 'Proses end-to-end dari brief sampai file final dalam satu tempat.',
  },
  {
    icon: Users,
    title: 'Kreator Terkurasi',
    desc: 'Temukan kreator dengan niche spesifik dan performa yang jelas.',
  },
  {
    icon: ShieldCheck,
    title: 'Escrow Aman',
    desc: 'Pembayaran ditahan aman hingga pekerjaan selesai sesuai ekspektasi.',
  },
  {
    icon: DollarSign,
    title: 'Harga Transparan',
    desc: 'Paket fleksibel untuk brand dan rate yang adil untuk kreator.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Semua yang Anda Butuhkan</h2>
          <p className="mt-3 text-gray-600">Platform lengkap untuk kolaborasi UGC yang cepat, aman, dan efektif.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-700">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
