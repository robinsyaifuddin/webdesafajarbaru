import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';

const dummyAchievements = [
  { title: 'Juara 2 Lomba kebersihan desa', image: '/images/prestasi2.jpg', year: '2025' },
  { title: 'Fajar Baru Bersinar, Inovasi Energi Terbarukan Pulihkan Potensi Wisata Desa', image: '/images/prestasi1.jpg', year: '2023' },
  { title: 'Penghargaan Desa Digital', image: '/images/prestasi3.png', year: '2025' },
  { title: 'Desa maju', image: '/images/prestasi4.png', year: '2024' },
];

const VillageAchievements: React.FC = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-white py-14 px-4 md:px-6 rounded-2xl shadow-sm relative">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
        Prestasi Desa
      </h2>

      <div className="relative px-4 md:px-6 lg:px-10">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={500}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-6"
        >
          {dummyAchievements.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-full max-w-xs bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.year}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tombol Panah */}
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 
            bg-white/80 backdrop-blur p-2 md:p-3 rounded-full shadow-lg 
            hover:scale-110 hover:text-yellow-500 text-gray-700 transition z-30"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 
            bg-white/80 backdrop-blur p-2 md:p-3 rounded-full shadow-lg 
            hover:scale-110 hover:text-yellow-500 text-gray-700 transition z-30"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default VillageAchievements;
