import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Map,
  Download,
  Share2,
  Maximize2,
  Info,
  Compass,
  Droplets,
  Landmark,
  Leaf,
  Ruler,
  HelpCircle,
} from "lucide-react";

const fotoPetaKelerengan = "/images/peta-kelerengan.jpg"; // Ganti dengan path gambar Peta Kelerengan

export default function PetaKelerengan() {
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
            <a href="/" className="hover:underline hover:text-emerald-700">
              Beranda
            </a>
            <span className="mx-1">/</span>
            <a href="/infografis" className="hover:underline hover:text-emerald-700">
              Infografis
            </a>
            <span className="mx-1">/</span>
            <span className="text-gray-900 font-medium">Peta Kelerengan</span>
          </nav>

          {/* Title */}
          <header className="mb-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 flex items-center gap-3">
                  <Map className="h-8 w-8 text-emerald-600" /> Peta Kelerengan
                </h1>
                <p className="mt-2 text-gray-700 max-w-3xl">
                  Peta Kelerengan ini menunjukkan informasi tentang kelerengan tanah yang akan sangat berguna dalam perencanaan pertanian,
                  pembangunan, dan mitigasi bencana. Anda dapat memantau area rawan longsor dan merencanakan penggunaan lahan yang lebih aman.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">Pembaruan: Juli 2025</Badge>
                  <Badge variant="outline" className="border-emerald-200 text-emerald-700">Skala 1:50.000</Badge>
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
                    <a href={fotoPetaKelerengan} download>
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
                <CardTitle className="text-sm font-medium text-gray-500">Perkiraan Kelerengan</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-semibold text-gray-900">15-30°</div>
                <p className="text-xs text-gray-600 mt-1">Berdasarkan analisis citra & verifikasi lapangan</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-emerald-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Area Rawan Longsor</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-semibold text-gray-900">25 km²</div>
                <p className="text-xs text-gray-600 mt-1">Berdasarkan data kelerengan dan curah hujan</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-emerald-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Penggunaan Lahan</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-semibold text-gray-900">Tani & Konservasi</div>
                <p className="text-xs text-gray-600 mt-1">Perencanaan berbasis analisis kelerengan dan curah hujan</p>
              </CardContent>
            </Card>
          </section>

          {/* Map + legend */}
          <section className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 overflow-hidden rounded-2xl border-emerald-100">
              <CardContent className="p-0">
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <img
                    src={fotoPetaKelerengan}
                    alt="Peta Kelerengan"
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
                <div className="flex items-center gap-3">
                  <span className="h-3 w-6 rounded-sm bg-emerald-500 inline-block" /> Area Rawat Tanah
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-3 w-6 rounded-sm bg-red-400 inline-block" /> Risiko Longsor
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-3 w-6 rounded-sm bg-orange-400 inline-block" /> Potensi Terban
                </div>

                <Separator className="my-2" />

                <div className="grid grid-cols-2 gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="p-3 rounded-xl border bg-emerald-50 border-emerald-100 flex items-center gap-3">
                        <Compass className="h-4 w-4 text-emerald-700" />
                        <span>Arah Utara</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>Orientasi peta mengarah ke utara</TooltipContent>
                  </Tooltip>
                  <div className="p-3 rounded-xl border bg-emerald-50 border-emerald-100 flex items-center gap-3">
                    <Ruler className="h-4 w-4 text-emerald-700" />
                    <span>Skala 1:50.000</span>
                  </div>
                  <div className="p-3 rounded-xl border bg-emerald-50 border-emerald-100 flex items-center gap-3">
                    <Droplets className="h-4 w-4 text-emerald-700" />
                    <span>Kelas Irigasi Beragam</span>
                  </div>
                  <div className="p-3 rounded-xl border bg-emerald-50 border-emerald-100 flex items-center gap-3">
                    <Landmark className="h-4 w-4 text-emerald-700" />
                    <span>Batas Desa & Dusun</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Narrative explanation */}
          <section className="mt-8 grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 rounded-2xl border-emerald-100">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-emerald-600" /> Tentang Peta & Cara Pakai
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Peta ini disusun dari kombinasi <b>citra satelit resolusi menengah</b>, data <b>Sistem Informasi Geografis (SIG)</b> desa,
                  dan validasi lapangan. Warna hijau menandakan area aman, sementara warna merah menunjukkan area rawan longsor.
                </p>
                <p>
                  Gunakan peta ini untuk mengidentifikasi daerah rawan longsor dan merencanakan pemanfaatan lahan yang lebih aman.
                </p>
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
                    <AccordionTrigger>Apakah peta ini bisa dipakai offline?</AccordionTrigger>
                    <AccordionContent>Ya, gambar dapat diunduh (JPG). Untuk analisis lanjutan, gunakan paket SIG seperti QGIS.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q2">
                    <AccordionTrigger>Seberapa akurat data kelerengannya?</AccordionTrigger>
                    <AccordionContent>Data kelerengan ini dihasilkan berdasarkan citra satelit dengan akurasi ±5–10%.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Footer note */}
          <footer className="mt-10 text-xs text-gray-500">
            © {new Date().getFullYear()} Peta Kelerengan • Dibuat untuk mendukung perencanaan berbasis data.
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
              <img src={fotoPetaKelerengan} alt="Peta Kelerengan diperbesar" className="w-full h-auto rounded-xl shadow-2xl" />
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}
