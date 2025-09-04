import React from 'react';
import Navigation from '@/components/Navigation';
import HeroVideo from '@/components/HeroVideo';
import LeadershipSection from '@/components/LeadershipSection';
import VillageHighlights from '@/components/VillageHighlights'; // Sudah modular
import VillageProfile from '@/components/VillageProfile';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Layout 1: Hero Video */}
      <div className="relative">
        <HeroVideo />
      </div>

      {/* Ornamen Pemisah */}
      <div
        className="w-full h-[40px] bg-repeat-x bg-center"
        style={{
          backgroundImage: "url('/images/batik-border.png')",
          backgroundSize: 'contain',
        }}
      ></div>

      {/* Layout 2: Pimpinan Desa */}
      <LeadershipSection />

      {/* Ornamen Pemisah */}
      <div
        className="w-full h-[40px] bg-repeat-x bg-center"
        style={{
          backgroundImage: "url('/images/batik-border.png')",
          backgroundSize: 'contain',
        }}
      ></div>

      {/* Layout 3: Berita Populer, Prestasi, Program */}
      <VillageHighlights />

        {/* Layanan Administrasi */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Layanan Administrasi
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Akses layanan administrasi kependudukan untuk kemudahan pengurusan
            dokumen dan data kependudukan masyarakat
          </p>
          <Link to="/services/administrasi-penduduk">
            <Button
              size="lg"
              className="bg-gradient-village hover:opacity-90 text-white"
            >
              <FileText className="mr-2" size={20} />
              Akses Layanan Administrasi
            </Button>
          </Link>
        </div>
      </section>

      
      
   

      <Footer />
       {/* Ornamen Pemisah */}
      <div
        className="w-full h-[40px] bg-repeat-x bg-center"
        style={{
          backgroundImage: "url('/images/batik-border.png')",
          backgroundSize: 'contain',
        }}
      ></div>
    </div>
  );
};

export default Index;
