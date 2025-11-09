import { Star } from 'lucide-react';

const products = [
  {
    title: 'Template Notion Bisnis',
    desc: 'Dashboard operasional untuk solo founder & tim kecil.',
    image: 'https://images.unsplash.com/photo-1647973035166-2abf410c68b0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZW1wbGF0ZSUyME5vdGlvbiUyMEJpc25pc3xlbnwwfDB8fHwxNzYyNzE0MTA1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    price: 'Rp129.000',
    rating: 4.9,
  },
  {
    title: 'Preset Lightroom Mobile',
    desc: 'Tingkatkan tone foto hanya dengan sekali klik.',
    image: 'https://images.unsplash.com/photo-1635217808953-bd080c3ec379?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcmVzZXQlMjBMaWdodHJvb20lMjBNb2JpbGV8ZW58MHwwfHx8MTc2MjcxNDEwNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    price: 'Rp59.000',
    rating: 4.8,
  },
  {
    title: 'UI Kit Landing Page',
    desc: 'Komponen siap pakai untuk website modern.',
    image: 'https://images.unsplash.com/photo-1510924014959-7e1849088bfe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVSSUyMEtpdCUyMExhbmRpbmclMjBQYWdlfGVufDB8MHx8fDE3NjI3MTQxMDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    price: 'Rp199.000',
    rating: 4.7,
  },
  {
    title: 'E-book Growth Instagram',
    desc: 'Strategi konten, algoritma, dan monetisasi.',
    image: 'https://images.unsplash.com/photo-1625994740758-289957fc4d1f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWJvb2slMjBHcm93dGglMjBJbnN0YWdyYW18ZW58MHwwfHx8MTc2MjcxNDEwN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    price: 'Rp89.000',
    rating: 4.9,
  },
  {
    title: 'Pack Icon SVG',
    desc: '500+ ikon minimalis untuk proyek Anda.',
    image: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYWNrJTIwSWNvbiUyMFNWR3xlbnwwfDB8fHwxNzYyNzE0MTA3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    price: 'Rp79.000',
    rating: 4.8,
  },
  {
    title: 'Template Pitch Deck',
    desc: 'Slide profesional untuk presentasi bisnis.',
    image: 'https://images.unsplash.com/photo-1612024499931-f65f230a2a26?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZW1wbGF0ZSUyMFBpdGNoJTIwRGVja3xlbnwwfDB8fHwxNzYyNzE0MTE5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    price: 'Rp149.000',
    rating: 4.9,
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Produk Digital Unggulan</h2>
          <p className="mt-3 text-gray-600">Template, e-book, preset, dan toolkit untuk mempercepat pekerjaan Anda.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{p.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-400" />
                    <span className="text-sm font-medium text-gray-700">{p.rating}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-semibold text-gray-900">{p.price}</span>
                  <a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700">Beli Sekarang</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
