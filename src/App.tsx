import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import useScrollToTop from '@/hooks/useScrollToTop';
import LoadingSpinner from '@/components/LoadingSpinner';
import PageTransition from '@/components/PageTransition';
import Navigation from '@/components/Navigation';
import GaleriGambar from './pages/GaleriGambar'

// Lazy loading untuk better performance
const Index = React.lazy(() => import('@/pages/Index'));
const News = React.lazy(() => import('@/pages/News'));
const NewsDetail = React.lazy(() => import('@/pages/NewsDetail'));
const Gallery = React.lazy(() => import('@/pages/Gallery'));
const Budget = React.lazy(() => import('@/pages/Budget'));
const Infographics = React.lazy(() => import('@/pages/Infographics'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));
const Services = React.lazy(() => import('@/pages/Services'));
const Contact = React.lazy(() => import('@/pages/Contact'));

const Events = React.lazy(() => import('@/pages/Events'));
const Profile = React.lazy(() => import('@/pages/Profile'));
const DocumentRequest = React.lazy(() => import('@/pages/DocumentRequest'));
const AdministrasiPenduduk = React.lazy(() => import('@/pages/AdministrasiPenduduk'));
const IDM = React.lazy(() => import('@/pages/IDM'));
const PPID = React.lazy(() => import('@/pages/PPID'));
const APBDesa = React.lazy(() => import('@/pages/APBDesa'));
const Belanja = React.lazy(() => import('@/pages/Belanja'));
const Bansos = React.lazy(() => import('@/pages/Bansos'));
const Login = React.lazy(() => import('@/pages/Login'));
const AdminLogin = React.lazy(() => import('@/pages/AdminLogin'));
const CitizenDashboard = React.lazy(() => import('@/pages/CitizenDashboard'));

// Admin components
const AdminDashboard = React.lazy(() => import('@/pages/admin/AdminDashboard'));
const AdminNews = React.lazy(() => import('@/pages/admin/AdminNews'));
const AdminResidents = React.lazy(() => import('@/pages/admin/AdminResidents'));
const AdminGallery = React.lazy(() => import('@/pages/admin/AdminGallery'));
const AdminStatistics = React.lazy(() => import('@/pages/admin/AdminStatistics'));
const AdminMap = React.lazy(() => import('@/pages/admin/AdminMap'));
const AdminFinance = React.lazy(() => import('@/pages/admin/AdminFinance'));
const AdminEvents = React.lazy(() => import('@/pages/admin/AdminEvents'));
const AdminSettings = React.lazy(() => import('@/pages/admin/AdminSettings'));
const AdminStatisticsManagement = React.lazy(() => import('@/pages/admin/AdminStatisticsManagement'));

// Statistics components
const AgeRange = React.lazy(() => import('@/pages/statistics/AgeRange'));
const AgeCategory = React.lazy(() => import('@/pages/statistics/AgeCategory'));
const Education = React.lazy(() => import('@/pages/statistics/Education'));
const Occupation = React.lazy(() => import('@/pages/statistics/Occupation'));
const MaritalStatus = React.lazy(() => import('@/pages/statistics/MaritalStatus'));
const Religion = React.lazy(() => import('@/pages/statistics/Religion'));
const Gender = React.lazy(() => import('@/pages/statistics/Gender'));
const FamilyRelation = React.lazy(() => import('@/pages/statistics/FamilyRelation'));
const ResidentStatus = React.lazy(() => import('@/pages/statistics/ResidentStatus'));
const BloodType = React.lazy(() => import('@/pages/statistics/BloodType'));
const Disability = React.lazy(() => import('@/pages/statistics/Disability'));
const Ethnicity = React.lazy(() => import('@/pages/statistics/Ethnicity'));
const SocialClass = React.lazy(() => import('@/pages/statistics/SocialClass'));
const IndividualAid = React.lazy(() => import('@/pages/statistics/IndividualAid'));
const FamilyAid = React.lazy(() => import('@/pages/statistics/FamilyAid'));
const PopulationPerArea = React.lazy(() => import('@/pages/statistics/PopulationPerArea'));
const PetaAgriSawah = React.lazy(() => import('@/pages/infografis/PetaAgriSawah'));
const PetaKelerengan = React.lazy(() => import('@/pages/infografis/PetaKelerengan'));
const PetaAdministrasi = React.lazy(() => import('@/pages/infografis/PetaAdministrasi'));

import AdminLayout from '@/components/admin/AdminLayout';
import { AdminProvider } from '@/contexts/AdminContext';
import { AuthProvider } from '@/contexts/AuthContext';

// Component wrapper untuk scroll to top + navbar non-admin
const AppContent = () => {
  useScrollToTop();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isHome = location.pathname === '/'; // ⬅️ halaman Hom

  return (
    <>
      {!isAdminRoute && <Navigation />}

      {/* Spacer hanya untuk halaman non-Home supaya konten tidak ketutupan navbar */}
      {!isAdminRoute && !isHome && <div className="pt-[84px] lg:pt-[112px]" />}

      <Routes>
        {/* Infografis + alias bahasa Indonesia */}
        <Route
          path="/infographics/peta-agrisawah"
          element={
            <PageTransition>
              <PetaAgriSawah />
            </PageTransition>
          }
        />
        <Route
          path="/infografis/peta-agrisawah"
          element={
            <PageTransition>
              <PetaAgriSawah />
            </PageTransition>
          }
        />
        

        <Route
          path="/infographics"
          element={
            <PageTransition>
              <Infographics />
            </PageTransition>
          }
        />
        <Route
          path="/infografis"
          element={
            <PageTransition>
              <Infographics />
            </PageTransition>
          }
        />

        {/* Rute untuk Peta Kelerengan */}
  <Route
    path="/infographics/peta-kelerengan"
    element={
      <PageTransition>
        <PetaKelerengan />
      </PageTransition>
    }
  />
  <Route
    path="/infografis/peta-kelerengan"
    element={
      <PageTransition>
        <PetaKelerengan />
      </PageTransition>
    }
  />

{/* Rute untuk Peta Administrasi */}
<Route
  path="/infographics/peta-administrasi"
  element={
    <PageTransition>
      <PetaAdministrasi />
    </PageTransition>
  }
/>
<Route
  path="/infografis/peta-administrasi"
  element={
    <PageTransition>
      <PetaAdministrasi />
    </PageTransition>
  }
/>

        

        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/news"
          element={
            <PageTransition>
              <News />
            </PageTransition>
          }
        />
        <Route
          path="/news/:id"
          element={
            <PageTransition>
              <NewsDetail />
            </PageTransition>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageTransition>
              <Gallery />
            </PageTransition>
          }
        />

        <Route
  path="/galeri/gambar"
  element={
    <PageTransition>
      <GaleriGambar />
    </PageTransition>
  }
/>
        <Route
          path="/budget"
          element={
            <PageTransition>
              <Budget />
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />
        <Route
          path="/kontak"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/events"
          element={
            <PageTransition>
              <Events />
            </PageTransition>
          }
        />
        <Route
          path="/profile"
          element={
            <PageTransition>
              <Profile />
            </PageTransition>
          }
        />
        <Route
          path="/document-request"
          element={
            <PageTransition>
              <DocumentRequest />
            </PageTransition>
          }
        />
        <Route
          path="/administrasi-penduduk"
          element={
            <PageTransition>
              <AdministrasiPenduduk />
            </PageTransition>
          }
        />

        

        {/* Authentication routes */}
        <Route
          path="/login"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />
        <Route
          path="/admin-login"
          element={
            <PageTransition>
              <AdminLogin />
            </PageTransition>
          }
        />
        <Route
          path="/citizen/dashboard"
          element={
            <PageTransition>
              <CitizenDashboard />
            </PageTransition>
          }
        />

        {/* Service submenu routes */}
        <Route
          path="/services/idm"
          element={
            <PageTransition>
              <IDM />
            </PageTransition>
          }
        />
        <Route
          path="/services/ppid"
          element={
            <PageTransition>
              <PPID />
            </PageTransition>
          }
        />
        <Route
          path="/services/administrasi-penduduk"
          element={
            <PageTransition>
              <AdministrasiPenduduk />
            </PageTransition>
          }
        />
        <Route
          path="/services/apb-desa"
          element={
            <PageTransition>
              <APBDesa />
            </PageTransition>
          }
        />
        <Route
          path="/services/belanja"
          element={
            <PageTransition>
              <Belanja />
            </PageTransition>
          }
        />
        <Route
          path="/services/bansos"
          element={
            <PageTransition>
              <Bansos />
            </PageTransition>
          }
        />

        {/* Statistics routes */}
        <Route
          path="/infographics/age-range"
          element={
            <PageTransition>
              <AgeRange />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/age-category"
          element={
            <PageTransition>
              <AgeCategory />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/education"
          element={
            <PageTransition>
              <Education />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/occupation"
          element={
            <PageTransition>
              <Occupation />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/marital-status"
          element={
            <PageTransition>
              <MaritalStatus />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/religion"
          element={
            <PageTransition>
              <Religion />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/gender"
          element={
            <PageTransition>
              <Gender />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/family-relation"
          element={
            <PageTransition>
              <FamilyRelation />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/resident-status"
          element={
            <PageTransition>
              <ResidentStatus />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/blood-type"
          element={
            <PageTransition>
              <BloodType />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/disability"
          element={
            <PageTransition>
              <Disability />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/ethnicity"
          element={
            <PageTransition>
              <Ethnicity />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/social-class"
          element={
            <PageTransition>
              <SocialClass />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/individual-aid"
          element={
            <PageTransition>
              <IndividualAid />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/family-aid"
          element={
            <PageTransition>
              <FamilyAid />
            </PageTransition>
          }
        />
        <Route
          path="/infographics/population-per-area"
          element={
            <PageTransition>
              <PopulationPerArea />
            </PageTransition>
          }
        />

        {/* Admin routes */}
        <Route
          path="/admin/dashboard"
          element={
            <PageTransition>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </PageTransition>
          }
        />
        <Route
          path="/admin/news"
          element={
            <PageTransition>
              <AdminLayout>
                <AdminNews />
              </AdminLayout>
            </PageTransition>
          }
        />
        <Route
          path="/admin/residents"
          element={
            <PageTransition>
              <AdminLayout>
                <AdminResidents />
              </AdminLayout>
            </PageTransition>
          }
        />
        <Route
          path="/admin/gallery"
          element={
            <PageTransition>
              <AdminLayout>
                <AdminGallery />
              </AdminLayout>
            </PageTransition>
          }
        />
        <Route
          path="/admin/statistics"
          element={
            <PageTransition>
              <AdminLayout>
                <AdminStatistics />
              </AdminLayout>
            </PageTransition>
          }
        />
        <Route
          path="/admin/statistics-management"
          element={
            <PageTransition>
              <AdminLayout>
                <AdminStatisticsManagement />
              </AdminLayout>
            </PageTransition>
          }
        />
        <Route
          path="/admin/map"
          element={
            <PageTransition>
              <AdminLayout>
                <AdminMap />
              </AdminLayout>
            </PageTransition>
          }
        />
        <Route
          path="/admin/finance"
          element={
            <PageTransition>
              <AdminLayout>
                <AdminFinance />
              </AdminLayout>
            </PageTransition>
          }
        />
        <Route
          path="/admin/events"
          element={
            <PageTransition>
              <AdminLayout>
                <AdminEvents />
              </AdminLayout>
            </PageTransition>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <PageTransition>
              <AdminLayout>
                <AdminSettings />
              </AdminLayout>
            </PageTransition>
          }
        />

        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <AdminProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <AppContent />
            </AnimatePresence>
          </Suspense>
        </BrowserRouter>
      </AdminProvider>
    </AuthProvider>
  );
}

export default App;
