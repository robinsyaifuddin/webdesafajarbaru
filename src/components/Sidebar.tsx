import { Home, User, Newspaper, BarChart3, Users, Globe, Facebook, Instagram, Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gradient-to-b from-slate-800 to-slate-900 text-white flex flex-col justify-between">
      {/* Header Logo dan Nama */}
      <div className="p-6 text-center border-b border-slate-700">
        <img src="/logo-desa.png" alt="Logo Desa" className="w-16 mx-auto mb-3" />
        <h1 className="text-lg font-bold">DESA FAJAR BARU</h1>
        <p className="text-sm text-gray-300">Jati Agung</p>
      </div>

      {/* Navigasi */}
      <nav className="flex-1 px-4 py-6 space-y-4">
        <NavLink to="/" className="flex items-center gap-3 hover:text-yellow-400">
          <Home size={20} /> Beranda
        </NavLink>
        <NavLink to="/profil" className="flex items-center gap-3 hover:text-yellow-400">
          <User size={20} /> Profil Desa
        </NavLink>
        <NavLink to="/berita" className="flex items-center gap-3 hover:text-yellow-400">
          <Newspaper size={20} /> Berita
        </NavLink>
        <NavLink to="/layanan" className="flex items-center gap-3 hover:text-yellow-400">
          <Users size={20} /> Layanan
        </NavLink>
        <NavLink to="/infografis" className="flex items-center gap-3 hover:text-yellow-400">
          <BarChart3 size={20} /> Infografis
        </NavLink>
      </nav>

      {/* Bawah sidebar: bahasa dan sosial media */}
      <div className="p-4 text-sm text-center border-t border-slate-700">
        <p className="text-gray-400 mb-2">🇮🇩 Bahasa Indonesia</p>
        <div className="flex justify-center gap-3 text-gray-400">
          <Facebook size={16} />
          <Instagram size={16} />
          <Twitter size={16} />
        </div>
      </div>
    </aside>
  );
}
