// src/pages/infografis/PetaAdministrasi.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Card, CardContent, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  MapPinned, Download, Share2, Maximize2, Info,
  Landmark, Route, Building2, Ruler, HelpCircle, Map,
} from "lucide-react";

const fotoAdministrasi = "/images/administrasi.jpg"; // ganti sesuai asetmu

export default function PetaAdministrasi() {
  const [isZoom, setIsZoom] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const onShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-emerald-50/60 to-blue-50 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumbs */}
          <nav className="text-sm mb-4 text-gray-600 flex items-center flex-wrap gap-1">
            <a href="/" className="hover:underline hover:text-emerald-700">Beranda</a>
            <span className="mx-1">/</span>
            <a href="/infografis" className="hover:underline hover:text-emerald-700">Infografis</a>
            <span className="mx-1">/</span>
            <span className="text-gray-900 font-medium">Peta Administrasi</span>
          </nav>

          {/* Title + actions */}
          <header className="mb-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 flex items-center gap-3">
                  <MapPinned className="h-8 w-8 text-emerald-600" /> Peta Administrasi
                </h1>
                <p className="mt-2 text-gray-700 max-w-3xl">
                  Peta Administrasi menampilkan batas desa, batas dusun/lingkungan, jaringan jalan,
                  sungai, serta lokasi fasilitas umum penting. Gunakan peta ini untuk keperluan
                  perencanaan tata ruang desa, pelayanan administrasi, penataan wilayah, dan dasar
                  pemetaan program pembangunan.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">Pembaruan: Juli 2025</Badge>
                  <Badge variant="outline" className="border-emerald-200 text-emerald-700">Skala 1:25.000</Badge>
                  <Badge variant="outline" className="border-emerald-200 text-emerald-700">Sumber: SIG Desa</Badge>
                </div>
              </div>

              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button onClick={() => setIsZoom(true)} className="bg-emerald-600 hover:bg-emerald-700">
                      <Maximize2 className="mr-2 h-4 w-4" /> Perbesar
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Perbesar peta ke layar penuh</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={fotoAdministrasi} download>
                      <Button variant="secondary" className="border-emerald-200">
                        <Download className="mr-2 h-4 w-4" /> Unduh
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Unduh sebagai JPG</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" onClick={onShare} className="border-emerald-300">
                      <Share2 className="mr-2 h-4 w-4" /> {copied ? "Tersalin" : "Bagikan"}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Salin tautan halaman</TooltipContent>
                </Tooltip>
              </div>
            </div>
          </header>

          {/* Top KPI cards */}
          <section className="grid md:grid-cols-3 gap-4 mb-6">
            <Card className="rounded-2xl border-emerald-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Luas Wilayah</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-semibold text-gray-900">6,40 km²</div>
                <p className="text-xs text-gray-600 mt-1">Batas administrasi desa</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-emerald-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Panjang Batas</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-semibold text-gray-900">18,7 km</div>
                <p className="text-xs text-gray-600 mt-1">Perimeter batas desa (estimasi)</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-emerald-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Dusun / RW</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-semibold text-gray-900">8 / 24</div>
                <p className="text-xs text-gray-600 mt-1">Jumlah dusun & RT/RW</p>
              </CardContent>
            </Card>
          </section>

          {/* Map + legend */}
          <section className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 overflow-hidden rounded-2xl border-emerald-100">
              <CardContent className="p-0">
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <img
                    src={fotoAdministrasi}
                    alt="Peta Administrasi Desa"
                    className="block w-full h-auto object-cover"
                    loading="eager"
                  />
                </motion.div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-emerald-100">
  <CardHeader>
    <CardTitle className="text-base flex items-center gap-2">
      <Info className="h-4 w-4 text-emerald-600" /> Keterangan Peta
    </CardTitle>
  </CardHeader>

  <CardContent className="space-y-4 text-sm">
    {/* Wilayah Fajar Baru: kotak olive dengan border cokelat tebal */}
    <div className="flex items-center gap-3">
      <span
        className="inline-block h-4 w-7 rounded-sm border-2"
        style={{ background: '#98A75A', borderColor: '#7A3A1D' }}
      />
      WILAYAH FAJAR BARU
    </div>

    {/* Perkebunan */}
    <div className="flex items-center gap-3">
      <span
        className="inline-block h-4 w-7 rounded-sm"
        style={{ background: '#8EA55E' }}
      />
      PERKEBUNAN
    </div>

    {/* Persawahan */}
    <div className="flex items-center gap-3">
      <span
        className="inline-block h-4 w-7 rounded-sm"
        style={{ background: '#3F7E1A' }}
      />
      PERSAWAHAN
    </div>

    {/* Pemukiman */}
    <div className="flex items-center gap-3">
      <span
        className="inline-block h-4 w-7 rounded-sm"
        style={{ background: '#A54A1A' }}
      />
      PEMUKIMAN
    </div>

    {/* Sungai: garis tipis biru */}
    <div className="flex items-center gap-3">
      <span className="inline-block w-14 h-0.5 bg-sky-400 rounded-full" />
      SUNGAI
    </div>

    {/* Batas Dusun: garis putus-putus abu */}
    <div className="flex items-center gap-3">
      <span
        className="inline-block w-14"
        style={{ borderBottom: '2px dashed #6B7280' }}
      />
      BATAS DUSUN
    </div>

    {/* Jalan Tol: tiga garis tipis hitam (efek strip horizontal) */}
    <div className="flex items-center gap-3">
      <span
        className="inline-block w-14 h-3 rounded-sm"
        style={{
          background:
            'repeating-linear-gradient(to bottom, #111 0 2px, transparent 2px 4px)',
        }}
      />
      JALAN TOL
    </div>

    {/* Jalan Raya: garis tebal hitam */}
    <div className="flex items-center gap-3">
      <span className="inline-block w-14 h-1.5 bg-black rounded-sm" />
      JALAN RAYA
    </div>

                <Separator className="my-2" />

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl border bg-emerald-50 border-emerald-100 flex items-center gap-3">
                    <Ruler className="h-4 w-4 text-emerald-700" />
                    <span>Skala 1:25.000</span>
                  </div>
                  <div className="p-3 rounded-xl border bg-emerald-50 border-emerald-100 flex items-center gap-3">
                    <Landmark className="h-4 w-4 text-emerald-700" />
                    <span>Kantor desa</span>
                  </div>
                  <div className="p-3 rounded-xl border bg-emerald-50 border-emerald-100 flex items-center gap-3">
                    <Building2 className="h-4 w-4 text-emerald-700" />
                    <span>Sekolah & fasilitas umum</span>
                  </div>
                  <div className="p-3 rounded-xl border bg-emerald-50 border-emerald-100 flex items-center gap-3">
                    <Route className="h-4 w-4 text-emerald-700" />
                    <span>Jaringan jalan</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Narrative */}
          <section className="mt-8 grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 rounded-2xl border-emerald-100">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Map className="h-4 w-4 text-emerald-600" /> Tentang Peta & Cara Pakai
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Peta Administrasi disusun berdasarkan batas resmi desa, pembagian wilayah dusun/RW,
                  serta jaringan jalan dan sungai yang diperoleh dari SIG desa dan verifikasi lapangan.
                  Garis tebal menandai batas desa; garis sedang untuk batas dusun; warna oranye/kuning
                  untuk jaringan jalan.
                </p>
                <p>
                  Gunakan peta ini untuk: penegasan batas layanan (RT/RW), penentuan lokasi fasilitas
                  umum baru, perencanaan pembangunan jalan lingkungan, serta sinkronisasi data kependudukan
                  per wilayah. Overlay dengan peta tematik (kependudukan, ekonomi) akan memperkuat analisis.
                </p>
                <ul className="list-disc pl-6">
                  <li><b>Pelayanan Administrasi:</b> cek RT/RW/dusun asal warga.</li>
                  <li><b>Penataan Ruang:</b> identifikasi wilayah padat dan kebutuhan RTH.</li>
                  <li><b>Perencanaan Jalan:</b> prioritas peningkatan akses wilayah pinggiran.</li>
                  <li><b>Mitigasi Risiko:</b> padukan dengan peta banjir/sungai untuk manajemen bencana.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-emerald-100">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-emerald-600" /> FAQ Singkat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="q1">
                    <AccordionTrigger>Apa perbedaan batas desa dan batas dusun?</AccordionTrigger>
                    <AccordionContent>
                      Batas desa adalah garis administrasi resmi tingkat desa; batas dusun/RW adalah pembagian wilayah di dalam desa untuk pengelolaan lokal.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q2">
                    <AccordionTrigger>Bolehkah dipakai untuk keperluan legal?</AccordionTrigger>
                    <AccordionContent>
                      Peta ini referensial. Untuk penetapan legal, rujuk peta resmi pemerintah dan dokumen penegasan batas.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q3">
                    <AccordionTrigger>Bagaimana memperbarui peta?</AccordionTrigger>
                    <AccordionContent>
                      Perbaharui layer batas/dusun/jalan di SIG desa, lakukan pengecekan lapangan, lalu render ulang ke format gambar.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Footer note */}
          <footer className="mt-10 text-xs text-gray-500">
            © {new Date().getFullYear()} Peta Administrasi • Untuk perencanaan dan pelayanan administrasi berbasis wilayah.
          </footer>
        </div>

        {/* Modal Zoom */}
        {isZoom && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal>
            <div className="relative w-full max-w-6xl">
              <button
                onClick={() => setIsZoom(false)}
                className="absolute -top-2 -right-2 bg-white rounded-full px-3 py-1 text-sm shadow"
                aria-label="Tutup perbesar"
              >
                Tutup
              </button>
              <img src={fotoAdministrasi} alt="Peta Administrasi diperbesar" className="w-full h-auto rounded-xl shadow-2xl" />
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}
