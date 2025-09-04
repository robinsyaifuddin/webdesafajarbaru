import React from 'react';

const GaleriGambar = () => {
  // Daftar gambar yang akan ditampilkan
  const images = [
    '/galeri/gambar1.jpg',
    '/galeri/gambar2.jpg',
    '/galeri/gambar3.jpg',
    '/galeri/gambar1.jpg',
    '/galeri/gambar5.jpg',
    '/galeri/gambar6.jpg',
    '/galeri/gambar7.jpg',
    '/galeri/gambar8.jpg',
    '/galeri/gambar9.jpg',
    '/galeri/gambar10.jpg',
    '/galeri/gambar11.jpg',
    '/galeri/gambar12.jpg',
    '/galeri/gambar13.jpg',
    '/galeri/gambar14.jpg',
    '/galeri/gambar15.jpg',
    '/galeri/gambar16.jpg',
    '/galeri/gambar17.jpg',
    '/galeri/gambar18.jpg',
    '/galeri/gambar19.jpg',
    '/galeri/gambar20.jpg',
    '/galeri/gambar21.jpg',
    '/galeri/gambar22.jpg',
    '/galeri/gambar23.jpg',
    '/galeri/gambar24.jpg',
    '/galeri/gambar25.jpg',
    '/galeri/gambar26.jpg',
    '/galeri/gambar27.jpg',
    '/galeri/gambar29.jpg',
   
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Teks Tentang Fajar Baru */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-emerald-700 tracking-wide">
          Tentang Fajar Baru
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
          Desa Fajar Baru terletak di Jati Agung, Lampung Selatan. 
          Desa ini memiliki berbagai potensi, fasilitas, dan program unggulan yang mendukung 
          perkembangan masyarakat serta menciptakan lingkungan yang harmonis.
          berikut beberapa foto terkait desa fajar baru sebagai desa maju
        </p>
      </div>

      {/* Galeri Gambar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
          >
            {/* Gambar */}
            <img
              src={image}
              alt={`Gambar ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay + teks */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-4">
              <p className="text-white font-semibold text-lg drop-shadow-md">
                Gambar {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriGambar;
