import { 
  BookOpen, 
  GraduationCap, 
  Code, 
  Layout, 
  FileText, 
  PenTool 
} from 'lucide-react';

export const services = [
  {
    id: 1,
    category: "Academic",
    title: "Bantuan Tugas SD - SMA",
    desc: "Bantuan pengerjaan tugas harian, PR, dan persiapan ujian untuk tingkat sekolah.",
    icon: BookOpen,
  },
  {
    id: 2,
    category: "Academic",
    title: "Tugas Kuliah & Skripsi",
    desc: "Asistensi penulisan makalah, jurnal, pengolahan data, hingga bimbingan tugas akhir.",
    icon: GraduationCap,
  },
  {
    id: 3,
    category: "Digital",
    title: "Web Development",
    desc: "Pembuatan landing page, web portfolio, hingga sistem informasi custom.",
    icon: Code,
  },
  {
    id: 4,
    category: "Digital",
    title: "UI/UX Design",
    desc: "Desain tampilan aplikasi dan website yang modern, estetik, dan mudah digunakan.",
    icon: Layout,
  },
  {
    id: 5,
    category: "Digital",
    title: "Desain Grafis & PPT",
    desc: "Pembuatan slide presentasi interaktif dan konten media sosial kreatif.",
    icon: PenTool,
  },
  {
    id: 6,
    category: "Academic",
    title: "Ketik & Olah Dokumen",
    desc: "Jasa pengetikan cepat, merapikan dokumen, dan konversi format file.",
    icon: FileText,
  }
];