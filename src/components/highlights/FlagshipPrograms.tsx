import React from 'react';

const dummyPrograms = [
  { title: 'Smart Village Dashboard', desc: 'Pemantauan data realtime dan transparansi desa.' },
  { title: 'Pelatihan Digital UMKM', desc: 'Pemberdayaan warga lewat teknologi dan bisnis online.' },
];

const MainPrograms: React.FC = () => (
  <section className="py-16 bg-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Program Unggulan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dummyPrograms.map((program, i) => (
          <div key={i} className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl p-6 text-white shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
            <p>{program.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MainPrograms;
