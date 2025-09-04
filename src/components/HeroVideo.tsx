import React from "react";

const HeroVideo: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/desa.mp4" type="video/mp4" />
        Browser kamu tidak mendukung video HTML5.
      </video>

      {/* Overlay untuk teks agar lebih jelas */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Teks Utama */}
     <div className="relative z-10 text-center text-white px-6 drop-shadow-xl">
  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in leading-tight">
    Selamat Datang di
  </h1>
  <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-emerald-400 via-green-300 to-blue-400 bg-clip-text text-transparent animate-fade-in delay-200 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
    Desa Fajar Baru
  </h2>
  <h3 className="text-3xl md:text-5xl font-semibold text-blue-300 mb-6 animate-fade-in delay-300 drop-shadow-lg">
    Smart Village
  </h3>
  <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-100 animate-fade-in delay-500 leading-relaxed">
    Desa cerdas yang mengintegrasikan teknologi digital untuk memberikan
    pelayanan terbaik, transparansi data, dan kemudahan akses informasi
    bagi seluruh masyarakat.
  </p>
</div>

    </section>
  );
};

export default HeroVideo;
