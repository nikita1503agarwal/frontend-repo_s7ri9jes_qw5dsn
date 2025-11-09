import { ShieldCheck, Rocket, Star } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Cepat & Praktis',
    desc: 'Produk digital siap pakai yang langsung meningkatkan produktivitas Anda.',
  },
  {
    icon: ShieldCheck,
    title: 'Pembayaran Aman',
    desc: 'Transaksi terenkripsi dan dukungan pelanggan yang responsif.',
  },
  {
    icon: Star,
    title: 'Rating Tinggi',
    desc: 'Produk terkurasi dengan ulasan nyata dari pembeli sebelumnya.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-700">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
