import React from "react";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 mt-8">
        <div className="p-5 border">
          <p className="text-base font-semibold mb-5">Produk & Layanan</p>
          <p className="text-[13px] mb-2">Smartphones</p>
          <p className="text-[13px] mb-2">Tablets</p>
          <p className="text-[13px] mb-2">Audio Sound</p>
          <p className="text-[13px] mb-2">Smart Switch</p>
          <p className="text-[13px] mb-2">Aksesoris</p>
          <p className="text-[13px] mb-2">TVs</p>
          <p className="text-[13px] mb-2">Lifestyle TV</p>
          <p className="text-[13px] mb-2">Sound Devices</p>
          <p className="text-[13px] mb-2">Kulkas</p>
          <p className="text-[13px] mb-2">Laundry</p>
          <p className="text-[13px] mb-2">Air Solutions</p>
          <p className="text-[13px] mb-2">Cooking Appliances</p>
          <p className="text-[13px] mb-2">Monitor</p>
          <p className="text-[13px] mb-2">Memory Storage</p>
        </div>
        <div className="p-5 border">
          <p className="text-base font-semibold mb-5">Shop</p>
          <p className="text-[13px] mb-2">Promo</p>
          <p className="text-[13px] mb-2">Samsung Trade-In</p>
          <p className="text-[13px] mb-2">Samsung Experience Store</p>
          <p className="text-[13px] mb-2">Business Shop</p>
          <p className="text-[13px] mb-2">Samsung Care+</p>
          <p className="text-[13px] mb-2">Samsung Visual Consultant</p>
          <p className="text-[13px] mb-2">FAQ Toko Online</p>
          <p className="text-[13px] mb-2">Store Pickup</p>
          <p className="text-[13px] mb-2">Student Offer</p>
          <p className="text-[13px] mb-2">Samsung Financing</p>
        </div>
        <div className="p-5 border">
          <p className="text-base font-semibold mb-5">Dukungan</p>
          <p className="text-[13px] mb-2">Live Chat</p>
          <p className="text-[13px] mb-2">Online Service</p>
          <p className="text-[13px] mb-2">Hubungi Kami</p>
          <p className="text-[13px] mb-2">Product Registration</p>
          <p className="text-[13px] mb-2">Pusat Service Center</p>
          <p className="text-[13px] mb-2">Smart Service di Toko</p>
          <p className="text-[13px] mb-2">Remote Service</p>
          <p className="text-[13px] mb-2">Bahasa Isyarat</p>
          <p className="text-[13px] mb-2">Berikan Tanggapan Anda</p>
        </div>
        <div className="p-5 border">
          <p className="text-base font-semibold mb-5">Akun & Komunitas</p>
          <p className="text-[13px] mb-2">Halaman Saya</p>
          <p className="text-[13px] mb-2">Produk Saya</p>
          <p className="text-[13px] mb-2">Pesanan</p>
          <p className="text-[13px] mb-2">Wishlist</p>
          <p className="text-[13px] mb-2">Voucher</p>
          <p className="text-[13px] mb-2">Layanan</p>
          <p className="text-[13px] mb-2">Member</p>
        </div>
        <div className="p-5 border">
          <p className="text-base font-semibold mb-5">Keberlanjutan</p>
          <p className="text-[13px] mb-2">Ikhtisar</p>
          <p className="text-[13px] mb-2">Lingkungan</p>
          <p className="text-[13px] mb-2">Kewargaan Perusahaan</p>
          <p className="text-[13px] mb-2">Tanggung Jawab Digital</p>
          <p className="text-[13px] mb-2">Hak Asasi Manusia & Tenaga Kerja</p>
          <p className="text-[13px] mb-2">Keragaman & Inklusi</p>
          <p className="text-[13px] mb-8">Rantai Pasokan Berkelanjutan</p>

          <p className="text-base font-semibold mb-5">Tentang Kami</p>
          <p className="text-[13px] mb-2">Info Perusahaan</p>
          <p className="text-[13px] mb-2">Area Bisnis</p>
          <p className="text-[13px] mb-2">Identitas Merek</p>
          <p className="text-[13px] mb-2">Karier</p>
          <p className="text-[13px] mb-2">Hubungan Investor</p>
          <p className="text-[13px] mb-2">Newsroom</p>
          <p className="text-[13px] mb-2">Etika</p>
          <p className="text-[13px] mb-2">Desain Samsung</p>
        </div>
      </div>
      <div className="py-8 container my-2 border-b border-solid">
        <p className="text-xs">
          Copyright© 1995-2022 Samsung. All rights reserved.
        </p>
      </div>
      <footer className="footer px-10 py-4 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <p className="text-xs font-semibold">Indonesia/Bahasa Indonesia</p>
          <span className="text-gray-200">|</span>
          <span className="text-xs mr-2">Bantuan Aksesibilitas</span>
          <span className="text-xs mr-2">Privasi</span>
          <span className="text-xs mr-2">Legal</span>
          <span className="text-xs mr-2">Peta Situs</span>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 items-center">
            <span className="text-xs">Tetap Ingin Terhubung ?</span>
            <a href="#home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="#home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
