import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, ChevronDown, ChevronUp, Search, Home, User, BarChart3, Newspaper, Settings, Users, FileText, Building2, CreditCard, Heart, Clock, LogOut, UserCircle, Bell, FileEdit, Image, Video, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navigation = () => {
  const [isGaleriOpen, setIsGaleriOpen] = useState(false);  // (masih ada, jika nanti mau dipakai versi klik)
  const [isLayananOpen, setIsLayananOpen] = useState(false);
  const [isInfografisOpen, setIsInfografisOpen] = useState(false); // mobile accordion
const [isInfografisDesktopOpen, setIsInfografisDesktopOpen] = useState(false); // desktop dropdown terkunci saat hover/klik




  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  

 const menuItems = [
  { name: 'Beranda', href: '/', icon: Home },
  { name: 'Profil', href: '/profile', icon: User },
  { name: 'Berita', href: '/news', icon: Newspaper },
  { name: 'Kontak', href: '/kontak', icon: Phone },
         // ⬅️ baru: Galeri link biasa
  { name: 'Infografis', href: '/infografis', icon: BarChart3 },
];


  const serviceSubmenus = [
    { name: 'IDM (Indeks Desa Membangun)', href: '/services/idm', icon: BarChart3 },
    { name: 'PPID', href: '/services/ppid', icon: FileText },
    { name: 'Administrasi Penduduk', href: '/services/administrasi-penduduk', icon: Users },
    { name: 'APB Desa', href: '/services/apb-desa', icon: Building2 },
    { name: 'Belanja', href: '/services/belanja', icon: CreditCard },
    { name: 'Bansos', href: '/services/bansos', icon: Heart },
  ];

  const galeriSubmenus = [
    { name: 'Gambar', href: '/galeri/gambar', icon: Image },
    
  ];

  // NEW: submenu Infografis (yang diminta)
  const infografisSubmenus = [
    { name: 'Peta Administrasi', href: '/infographics/peta-administrasi', icon: Map },
  { name: 'Peta Kelerengan', href: '/infographics/peta-kelerengan', icon: Map },
  { name: 'Peta AgriSawah', href: '/infographics/peta-agrisawah', icon: Map },
];


  // ikutkan submenu ke pencarian
  const searchableItems = [
    ...menuItems,
    ...serviceSubmenus,
    ...galeriSubmenus,
    ...infografisSubmenus,
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const dayName = days[date.getDay()];
    const day = date.getDate().toString().padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return { dayName, date: `${day} ${month} ${year}`, time: `${hours}:${minutes}:${seconds}` };
  };

  const handleMenuClick = (href) => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const element = document.querySelector(href.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const foundItem = searchableItems.find((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
      if (foundItem) {
        navigate(foundItem.href);
        setSearchQuery('');
        setIsSearchOpen(false);
        setIsMenuOpen(false);
      }
    }
  };

  const filteredSearchResults = searchQuery.trim()
    ? searchableItems.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  const dateTime = formatDateTime(currentDateTime);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-r from-yellow-400 via-emerald-500 to-blue-500 text-white shadow-2xl'
          : 'bg-gradient-to-r from-yellow-300 via-emerald-400 to-blue-400 text-white shadow-md'
      }`}
    >
      <div
        className={`bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-2 hidden lg:block transition-all duration-500 ${
          isScrolled ? 'py-0.5' : 'py-1'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 hover:scale-105 transition-transform duration-300">
              <MapPin size={10} className="animate-pulse" />
              <span>Jati Agung, Lampung Selatan</span>
            </div>
            <div className="flex items-center space-x-1.5 hover:scale-105 transition-transform duration-300">
              <Phone size={10} className="animate-pulse delay-150" />
              <span>(0721) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1.5 hover:scale-105 transition-transform duration-300">
              <Mail size={10} className="animate-pulse delay-300" />
              <span>info@fajar-baru.desa.id</span>
            </div>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="flex items-center space-x-1.5 bg-white/10 backdrop-blur-sm rounded px-2 py-0.5 border border-white/20">
              <Clock size={10} className="animate-pulse delay-500" />
              <span className="font-medium">
                {dateTime.dayName}, {dateTime.date}
              </span>
              <span className="font-mono">|</span>
              <span className="font-mono">{dateTime.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-2 lg:py-2.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <img
                src="/lovable-uploads/6d651776-4595-4e2e-a27c-cbcc298cd82f.png"
                alt="Logo Desa Fajar Baru"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg lg:text-xl text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                Desa Fajar Baru
              </h1>
              <p className="text-xs lg:text-sm text-gray-600">Jati Agung, Lampung Selatan</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => {
              const IconComponent = item.icon;

             // KHUSUS: Infografis sebagai dropdown (klik)
if (item.name === 'Infografis') {
  return (
    <div
      key="Infografis"
      className="relative"
    >
      {/* Trigger untuk membuka dropdown */}
      <div
        onClick={() => setIsInfografisDesktopOpen((prev) => !prev)} // Toggle state dropdown Infografis
        className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative text-sm cursor-pointer"
      >
        <IconComponent size={16} className="transition-transform duration-300" />
        <Link to={item.href} className="relative">
          Infografis
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={isInfografisDesktopOpen}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          <ChevronDown size={14} className={`${isInfografisDesktopOpen ? 'rotate-180' : ''} transition-transform duration-300`} />
        </button>
      </div>

      {/* Dropdown: tampil berdasar state, jadi tidak hilang saat diklik */}
      {isInfografisDesktopOpen && (
        <div className="absolute left-0 top-full mt-2 w-56 bg-white text-gray-800 shadow-2xl rounded-2xl p-2 z-50">
          {infografisSubmenus.map((submenu) => {
            const Icon = submenu.icon;
            return (
              <Link
                key={submenu.name}
                to={submenu.href}
                className="flex items-center space-x-3 w-full px-4 py-3 text-sm hover:bg-gray-100 rounded-xl transition-all duration-300"
                onClick={() => setIsInfografisDesktopOpen(false)} // Menutup dropdown saat submenu diklik
              >
                <Icon size={16} />
                <span>{submenu.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

              // Item lain
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative text-sm"
                >
                  <IconComponent size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              );
            })}
{/* Galeri Dropdown - Klik untuk membuka */}
<div className="relative">
  {/* Tombol untuk membuka dropdown */}
  <div
    onClick={() => setIsGaleriOpen(!isGaleriOpen)} // Toggle state Galeri
    className="flex items-center space-x-2 text-black hover:text-yellow-300 transition-all duration-300 font-medium relative text-sm cursor-pointer"
  >
    <Image size={16} className="transition-transform duration-300" />
    <span className="relative">
      Galeri
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
    </span>
    <ChevronDown
      size={14}
      className={`transition-transform duration-300 ${isGaleriOpen ? 'rotate-180' : ''}`} // Rotasi ikon saat terbuka
    />
  </div>

  {/* Dropdown menu */}
  {isGaleriOpen && (
    <div className="absolute left-0 top-full mt-2 w-56 bg-gradient-to-r from-yellow-300 via-emerald-400 to-blue-400 text-white shadow-xl rounded-2xl p-2 z-50">
      {galeriSubmenus.map((submenu) => {
        const IconComponent = submenu.icon;
        return (
          <Link
            key={submenu.name}
            to={submenu.href}
            className="flex items-center space-x-3 w-full px-4 py-3 text-sm hover:bg-white/10 rounded-xl transition-all duration-300 group"
          >
            <IconComponent size={16} className="group-hover:scale-110 transition-transform duration-300" />
            <span>{submenu.name}</span>
          </Link>
        );
      })}
    </div>
  )}
</div>

            {/* Dropdown Layanan - klik, bukan hover */}
            <div className="relative">
              {/* Tombol utama */}
              <div
                onClick={() => setIsLayananOpen(!isLayananOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative text-sm cursor-pointer"
              >
                <Settings size={16} className="transition-transform duration-300" />
                <span className="relative">
                  Layanan
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-300"></span>
                </span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isLayananOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Submenu */}
              {isLayananOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 bg-white text-gray-800 shadow-2xl rounded-2xl p-2 z-50">
                  {serviceSubmenus.map((submenu) => {
                    const IconComponent = submenu.icon;
                    return (
                      <Link
                        key={submenu.name}
                        to={submenu.href}
                        onClick={() => setIsLayananOpen(false)}
                        className="flex items-center space-x-3 w-full px-4 py-3 text-sm hover:bg-gray-100 rounded-xl transition-all duration-300"
                      >
                        <IconComponent size={16} />
                        <span>{submenu.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Tombol Search Desktop */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white hover:text-yellow-300 transition-all duration-300"
            >
              <Search size={18} />
            </button>

            {/* Profile Dropdown or Login Button */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gray-100 transition-all duration-300">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-sm">
                      {user?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown size={14} className="text-gray-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-2xl p-2 mt-2">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link to="/citizen/dashboard" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 hover:text-emerald-700 rounded-xl transition-all duration-300 group">
                      <UserCircle size={16} className="group-hover:scale-110 transition-transform duration-300" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 hover:text-emerald-700 rounded-xl transition-all duration-300 group">
                    <Bell size={16} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>Notifikasi</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="flex items-center space-x-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all duration-300 group cursor-pointer"
                  >
                    <LogOut size={16} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>Keluar</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl text-sm px-4 py-2">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center p-2 rounded-xl hover:bg-gray-100 transition-all duration-300">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-sm">
                      {user?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-2xl p-2 mt-2">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link to="/citizen/dashboard" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 hover:text-emerald-700 rounded-xl transition-all duration-300 group">
                      <UserCircle size={16} />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 hover:text-emerald-700 rounded-xl transition-all duration-300 group">
                      <UserCircle size={16} />
                      <span>Profil Desa</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/document-request" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 hover:text-emerald-700 rounded-xl transition-all duration-300 group">
                      <FileEdit size={16} />
                      <span>Permohonan Dokumen</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 hover:text-emerald-700 rounded-xl transition-all duration-300 group">
                    <Bell size={16} />
                    <span>Notifikasi</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="flex items-center space-x-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all duration-300 group cursor-pointer">
                    <LogOut size={16} />
                    <span>Keluar</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}

            {/* Mobile Search */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 rounded-xl bg-gray-100 hover:bg-emerald-100 text-gray-600 hover:text-emerald-600 transition-all duration-300">
              <Search size={18} />
            </button>

            <button
              className="p-2 rounded-xl bg-gray-100 hover:bg-emerald-100 text-gray-600 hover:text-emerald-600 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden mt-4 animate-slide-in">
            <form onSubmit={handleSearch} className="space-y-3">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Cari layanan atau halaman..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border-2 border-gray-200 focus:border-emerald-500 rounded-xl transition-all duration-300"
                />
              </div>

              {filteredSearchResults.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-2 space-y-1">
                  {filteredSearchResults.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.name}
                        onClick={() => {
                          navigate(item.href);
                          setSearchQuery('');
                          setIsSearchOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-300 group"
                      >
                        <IconComponent size={16} className="group-hover:scale-110 transition-transform duration-300" />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </form>
          </div>
        )}

        {/* Desktop Search Bar */}
        {isSearchOpen && (
          <div className="hidden lg:block mt-4 animate-slide-in">
            <form onSubmit={handleSearch} className="relative w-full max-w-md mx-auto">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari layanan atau halaman..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border-2 border-gray-200 focus:border-emerald-500 rounded-xl transition-all duration-300"
              />
            </form>

            {filteredSearchResults.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-2 mt-2 w-full max-w-md mx-auto">
                {filteredSearchResults.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        navigate(item.href);
                        setSearchQuery('');
                        setIsSearchOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-300 group"
                    >
                      <IconComponent size={16} className="group-hover:scale-110 transition-transform duration-300" />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-in border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon;

                if (item.name === 'Infografis') {
                  return (
                    <div key="Infografis" className="border-t pt-4">
                      {/* Header + toggle */}
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 font-medium py-3 px-4 rounded-xl group flex-1"
                        >
                          <IconComponent size={18} className="group-hover:scale-110 transition-transform duration-300" />
                          <span>Infografis</span>
                        </Link>
                        <button
                          onClick={() => setIsInfografisOpen(!isInfografisOpen)}
                          className="p-2 rounded-xl text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
                          aria-label="Toggle sub menu Infografis"
                        >
                          {isInfografisOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                      </div>

                      {/* Sub menu */}
                      {isInfografisOpen && (
                        <div className="mt-2 space-y-1 pl-6 animate-fade-in">
                          {infografisSubmenus.map((submenu) => {
                            const Icon = submenu.icon;
                            return (
                              <Link
                                key={submenu.name}
                                to={submenu.href}
                                className="flex items-center space-x-3 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 py-2 px-3 rounded-lg group text-sm"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsInfografisOpen(false);
                                }}
                              >
                                <Icon size={14} className="group-hover:scale-110 transition-transform duration-300" />
                                <span>{submenu.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                // Item lain mobile
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 font-medium py-3 px-4 rounded-xl group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {/* Mobile Layanan */}
              <div className="border-t pt-4">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 font-medium py-3 px-4 rounded-xl group"
                >
                  <div className="flex items-center space-x-3">
                    <Settings size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>Layanan</span>
                  </div>
                  {isServicesOpen ? <ChevronUp size={18} className="transition-transform duration-300" /> : <ChevronDown size={18} className="transition-transform duration-300" />}
                </button>

                {isServicesOpen && (
                  <div className="mt-2 space-y-1 pl-6 animate-fade-in">
                    {serviceSubmenus.map((submenu) => {
                      const IconComponent = submenu.icon;
                      return (
                        <Link
                          key={submenu.name}
                          to={submenu.href}
                          className="flex items-center space-x-3 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 py-2 px-3 rounded-lg group text-sm"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          <IconComponent size={14} className="group-hover:scale-110 transition-transform duration-300" />
                          <span>{submenu.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {!isAuthenticated && (
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white w-full mt-4 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
