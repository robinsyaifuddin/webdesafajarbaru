import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";  // Mengimpor Link dari react-router-dom jika menggunakan routing internal

const items = [
  {
    title: " Pelaku Curat di Toko Sparepart Desa Fajar Baru Diringkus di Kontrakannya,",
    date: "31/05/2024",
    image: "/images/news1.jpg",
    link: "https://lampung.tribunnews.com/2025/08/08/pelaku-curat-di-toko-sparepart-desa-fajar-baru-diringkus-di-kontrakannya"  // Menambahkan properti link
  },
  {
    title: "kenalkan gerandong sapi kurban pilihan presiden Prabowo dari lampung",
    date: "01/06/2024",
    image: "/images/news2.jpg",
    link: "https://www.tribunnews.com/regional/2025/05/22/kenalkan-gerandong-sapi-kurban-pilihan-presiden-prabowo-dari-lampung"  // Menambahkan properti link
  },
  {
    title: "BPBD Lampung Selatan data desa dan rumah warga terdampak banjir",
    date: "02/06/2024",
    image: "/images/news3.jpg",
    link: "https://www.antaranews.com/berita/4783385/bpbd-lampung-selatan-data-desa-dan-rumah-warga-terdampak-banjir"  // Menambahkan properti link
  },
  {
    title: "Pembangunan Infrastruktur Jalan",
    date: "03/06/2024",
    image: "/images/news1.jpg",
    link: "/berita/pembangunan-infrastruktur-jalan"  // Menambahkan properti link
  },
  {
    title: "Pembangunan Infrastruktur Jalan yoga",
    date: "03/06/2024",
    image: "/images/news1.jpg",
    link: "/berita/pembangunan-infrastruktur-jalan-yoga"  // Menambahkan properti link
  },
];

const PopularNews = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Memastikan prevRef dan nextRef terpasang setelah Swiper di-render
    if (prevRef.current && nextRef.current) {
      prevRef.current.swiper = prevRef.current;
      nextRef.current.swiper = nextRef.current;
    }
  }, []);

  return (
    <section className="bg-white py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
            Berita Populer
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4" />
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition hover:-translate-y-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    {/* Membungkus judul dengan Link */}
                    <Link to={item.link} className="text-lg font-bold text-gray-800 mb-1 hover:text-yellow-500">
                      {item.title}
                    </Link>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol Panah */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 shadow-md rounded-full p-2 hover:bg-yellow-400 transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 shadow-md rounded-full p-2 hover:bg-yellow-400 transition"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularNews;
