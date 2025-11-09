export default function SimpleFooter() {
  return (
    <footer className="border-t border-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} DigitalGoods. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Kebijakan Privasi</a>
          <a href="#" className="hover:text-gray-900">Syarat & Ketentuan</a>
          <a href="#" className="hover:text-gray-900">Kontak</a>
        </div>
      </div>
    </footer>
  );
}
