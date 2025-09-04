import React from "react";

const LeadershipSection: React.FC = () => {
  const leaders = [
    {
      name: "M.Agus Budiantoro, S.H.I",
      title: "Kepala Desa Fajar Baru",
      image: "/images/kepala-desa.jpg",
    },
    {
      name: "Eni Triyani, S.pd",
      title: "Ketua PKK Desa Fajar Baru",
      image: "/images/ketua-pkk.jpg",
    },
  ];

  return (
    <section className="relative w-full">
      {/* Area Pimpinan Desa */}
      <div
        className="relative bg-cover bg-center py-20 text-center"
        style={{ backgroundImage: "url('/images/motif-batik.png')" }}
      >
        {/* Overlay gelap supaya teks jelas */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 text-white">
          {/* Judul */}
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4">
            Pimpinan Desa
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12"></div>

          {/* Foto Pimpinan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center px-6">
            {leaders.map((person, index) => (
              <div
                key={index}
                className="group transition duration-500 cursor-pointer"
              >
                <div className="w-[300px] h-[360px] mx-auto overflow-hidden rounded-2xl shadow-xl transition duration-500 group-hover:scale-105">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 uppercase mt-4 group-hover:text-yellow-300 transition">
                  {person.name}
                </h3>
                <p className="text-sm md:text-base text-gray-200 italic">
                  {person.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default LeadershipSection;
