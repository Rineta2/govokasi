//================== Logo ==================//

import logoImg from '@/components/assets/navbar/logo.png'

//================== Home ==================//

import banner from "@/components/assets/home/home.png"
import banner2 from "@/components/assets/home/GO-VOKASi-web-2.png"

//================== Connect ==================//

import connect from "@/components/assets/bakat/how.png"

//================== Building ==================//

import charackterImg from "@/components/assets/kontak/building.png"

//================== Banner ==================//

import bannerImg from "@/components/assets/banner/banner.png"

//================== Patners ==================//

import aha from "@/components/assets/patner/aha.png"
import atwork from "@/components/assets/patner/atwork.png"
import ab from "@/components/assets/patner/ab.png"
import trusted from "@/components/assets/patner/test-trusted.png"
import pr from "@/components/assets/patner/2pr.png"
import nph from "@/components/assets/patner/nph.png"

//================== Testiomonials ==================//

import img1 from "@/components/assets/testimonials/img1.png"
import img2 from "@/components/assets/testimonials/img2.png"
import img3 from "@/components/assets/testimonials/img3.png"
import img4 from "@/components/assets/testimonials/img4.jpg"

//================== Team ==================//

import team1 from "@/components/assets/team/Stephen-Sebastian-S.Kom.jpg"
import team2 from "@/components/assets/team/Anjelica-Reisa.png"
import team3 from "@/components/assets/team/Sony-Tan.png"
import team4 from "@/components/assets/team/Lisa-Sanusi.png"
import team5 from "@/components/assets/team/David-Tjokrorahardjo.png"
import team6 from "@/components/assets/team/Mery-Riana.png"

//================== Contact ==================//

import contact from "@/components/assets/kontak/kontak.png"

//================== Icons ==================//

import { FaCheckCircle, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdStars, MdOutlineAttachEmail } from "react-icons/md";
import { FaUsers, FaGraduationCap } from "react-icons/fa6";
import { FaLightbulb, FaArrowAltCircleRight } from "react-icons/fa";

//================== Header ==================//

export const logo = [
  {
    id: 1,
    img: logoImg
  }
]

export const navLink = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },

  {
    id: 2,
    name: "About Us",
    path: "#about"
  },

  {
    id: 3,
    name: "Services",
    path: "#services"
  },

  {
    id: 4,
    name: "COMPANY VALUES",
    path: "#company"
  },

  {
    id: 5,
    name: "Contact",
    path: "#contact"
  },
]

//================== Home Section ==================//

export const homeImg = [
  {
    id: 1,
    img: banner,
  }
]

export const homeImg2 = [
  {
    id: 1,
    img: banner2
  }
]

export const dataHome = [
  {
    id: 1,
    title: "Jumpstart",
    span: "Your"
  }
]

export const dataHome2 = [
  {
    id: 1,
    name: "I'm Looking For",
    path: "https://form.smartsuite.com/swgnyg44/pcSNOwKfLz"
  },

  {
    id: 2,
    name: "(Internship)!",
    path: "https://form.smartsuite.com/swgnyg44/pcSNOwKfLz"
  }
]

//================== Data Magang ==================//

export const magangData = [
  {
    id: 1,
    title: "What Do You Get From GOVOKASI",
    name: "Maximing Potential",
  }
]

export const dataButton = [
  {
    id: 1,
    name: "Mencari Peluang Intership",
    path: "https://form.smartsuite.com/swgnyg44/pcSNOwKfLz"
  },

  {
    id: 2,
    name: "Bergabunglah dengan kami sebagai mitra perusahaan",
    path: "https://form.smartsuite.com/swgnyg44/pcSNOwKfLz"
  }
]

//================== Data Connection ==================//

export const dataConnect = [
  {
    id: 1,
    img: connect
  }
]

export const dataTitle = [
  {
    id: 1,
    icons: <FaCheckCircle />,
    name: "IDENTIFY",
    desc: "Register yourself for your dream profession that aligns with the skills and abilities you possess, and start building your portfolio."
  },

  {
    id: 2,
    icons: <FaCheckCircle />,
    name: "DEVELOP",
    desc: "Participate in a 5-7 day project-based internship with real case studies and experienced coaches."
  },

  {
    id: 3,
    icons: <FaCheckCircle />,
    name: "PROMOTE",
    desc: "Qualified talents will be promoted to continue working on projects or onboard internships at GOVOKASI’s partner companies."
  },
]

//================== Data Layanan ==================//

export const dataServices = [
  {
    id: 1,
    icons: <MdStars />,
    name: "High Quality Intern",
    desc: "Candidates will go through our Right KLIC Curation process to help identify their potential and competency."
  },

  {
    id: 2,
    icons: <FaUsers />,
    name: "Experienced Coaches",
    desc: "We collaborate with experienced coaches and pratitioners with more than 10 years experience in their field."
  },

  {
    id: 3,
    icons: <FaGraduationCap />,
    name: "Training & Coaching",
    desc: "We provide continuous coaching and training during their internship program."
  },

  {
    id: 4,
    icons: <FaLightbulb />,
    name: "Cost Efficient Solution",
    desc: "Our solution help companies recruit the best candidates through cost efficient programs."
  },
]

//================== Data Layanan ==================//

export const Values = [
  {
    id: 1,
    name: "Innovation",
    desc: "They encourage creativity in their training and teaching methods to ensure participants gain relevant and up-to-date skills."
  },

  {
    id: 2,
    name: "Collaboration",
    desc: "They work closely with industry partners to provide internships and job placements that meet market demands."
  },

  {
    id: 3,
    name: "Personal Development",
    desc: "They focus on continuous training and coaching to help participants improve both soft and hard skills needed in the workforce."
  },

  {
    id: 4,
    name: "Sustainability",
    desc: " They commit to long-term growth and positive social impact, ensuring their programs benefit participants and the wider community."
  },

  {
    id: 5,
    name: "Integrity",
    desc: "They operate with high transparency and trust, ensuring all stakeholders are treated fairly and honestly."
  },
]

//================== Data Building ==================//
export const buildingData = [
  {
    id: 1,
    span: "Three Steps To Success",
    text: "Building ",
    bold: "(PRO)Fesional",
    text2: "Character",
    desc: "Our interns are continously trained and coached to be the best."
  }
]

export const buildingImg = [
  {
    id: 1,
    img: charackterImg,
  }
]

//================== Data Building ==================//
export const box = [
  {
    id: 1,
    number: "01",
    name: "Prime In Contribution",
    desc: "Our interns are coached to focus on contribution before compensation."
  },

  {
    id: 2,
    number: "02",
    name: "Rich In Competencies",
    desc: "Building skills and competencies, to be able to manage bigger challenges."
  },

  {
    id: 3,
    number: "03",
    name: "Open For Collaboration",
    desc: "Intergenerational collaboration to handle complex tasks."
  },
]

//================== Data Building ==================//

export const dataBanner = [
  {
    id: 1,
    img: bannerImg
  }
]

export const dataRegister = [
  {
    id: 1,
    text: "Register Here As Our Professional Talents On GOVOKASi GOES TO INSPIRAFEST 2023"
  }
]

export const buttonRegister = [
  {
    id: 1,
    name: "Register Here",
    path: "https://form.smartsuite.com/swgnyg44/pcSNOwKfLz"
  }
]

//================== Patner ==================//

export const dataPatner = [
  {
    id: 1,
    img: aha
  },

  {
    id: 2,
    img: atwork
  },

  {
    id: 3,
    img: ab
  },

  {
    id: 4,
    img: trusted
  },

  {
    id: 5,
    img: pr
  },

  {
    id: 6,
    img: nph
  }
]

//================== Testimonials ==================//

export const testimonialsData = [
  {
    id: 1,
    img: img1,
    desc: "Melalui Internship  GOVOKASi saya mendapatkan tambahan pengalaman dan network untuk membangun startup saya",
    name: "SAMUEL TJU",
    job: "Startup Founder",
  },

  {
    id: 2,
    img: img2,
    desc: "Pelatihan GOVOKASi ini ramah, dan membantu saya mengetahui ke arah mana saya harus melangkah di dunia pekerjaan",
    name: "TSANAVA",
    job: "Mahasiswi",
  },

  {
    id: 3,
    img: img3,
    desc: "GOVOKASi membantu saya menemukan peluang magang sesuai passion yang saya minati (graphic design, walaupun saya jurusan teknik mesin",
    name: "FATTAH J",
    job: "FRESH GRADUATE",
  },

  {
    id: 4,
    img: img4,
    desc: "Manfaat yang aku rasain selama ikutan project di govokasi itu jadi lebih membuka wawasan sih, banyak hal-hal baru yang aku pahami baik dari coach maupun intern yang lain. Selain itu juga Govokasi ini bisa jadi kesempatan untuk mencari strength yang aku punya dan nunjukin skill tersebut ke company rekanan govokasi! 😊",
    name: "SULTHAN",
    job: "FRESH GRADUATE",
  }
]

//================== Team ==================//

export const teamData = [
  {
    id: 1,
    img: team1,
    name: "Stephen Sebastian S.Kom",
    job: "CEO/Founder"
  },

  {
    id: 2,
    img: team2,
    name: "Anjelica Reisa S.Sn, M.Pd.",
    job: "CEO/Founder"
  },

  {
    id: 3,
    img: team3,
    name: "Sony Tan",
    job: "HR Director & Penulis Buku “Milenial & Turnover”"
  },

  {
    id: 4,
    img: team4,
    name: "Lisa Sanusi",
    job: "Founder"
  },

  {
    id: 5,
    img: team5,
    name: "David Tjokrorahardjo",
    job: "Business Leadership Coach"
  },

  {
    id: 6,
    img: team6,
    name: "Mery Riana",
    job: "Advisor"
  },
]

//================== Experience ==================//

export const headExperience = [
  {
    id: 1,
    name: "Growing Your Potential"
  }
]

export const experience = [
  {
    id: 1,
    name: "With 10 Years Of Experts Experiences"
  }
]

//================== Faq ==================//

export const faqData = [
  {
    id: 1,
    name: "APA YANG DITAWARKAN GOVOKASI (APA SAJA PROGRAM YANG ADA DI GOVOKASI?)",
    icons: <FaArrowAltCircleRight />,
    desc: "GOVOKASi menyediakan program Project Based Internship (PBI) selama 5-7 hari untuk menambah portofolio kamu untuk mewujudkan karir impian, tidak hanya itu tersedia sesi coaching untuk mengasah softskill kamu sebelum menghadapi dunia kerja serta terdapat project activity yang dapat kamu ikuti untuk menambah skill dalam bersosialisasi serta project management yang baik melalui program Company partners GOVOKASi."
  },

  {
    id: 2,
    name: "BAGAIMANA TAHAPAN SELEKSI DI GOVOKASI?",
    icons: <FaArrowAltCircleRight />,
    desc: "Tahapan seleksi GOVOKASi dimulai dari submit program Internship, Pre-onboarding, pengerjaan Project Based Internship dan sesi Coaching. Bagi kamu yang memenuhi kriteria dan memiliki hasil project yang baik akan mendapatkan kesempatan di Promote ke Company Partner GOVOKASi. Jika tidak kamu tetap dapat ikut program kembali serta aktif mengikuti sesi coachingnya."
  },

  {
    id: 3,
    name: "BERAPA BIAYA YANG HARUS DIKELUARKAN UNTUK DAPAT MENGIKUTI PROGRAM GOVOKASI?",
    icons: <FaArrowAltCircleRight />,
    desc: "Tidak ada / Gratis"
  },

  {
    id: 4,
    name: "APA SAJA SYARAT UNTUK DAPAT MENGIKUTI PROGRAM GOVOKASI?",
    icons: <FaArrowAltCircleRight />,
    desc: "Bagi kamu Mahasiswa yang sedang mencari portofolio lalu Fresh Graduate yang fokus mencari kerja serta bagi kamu yang ingin Switch Career. Tidak ada batasan usia untuk mengikuti program ini."
  },

  {
    id: 5,
    name: "APA SAJA BENEFIT YANG DIDAPATKAN DARI PROGRAM GOVOKASI?",
    icons: <FaArrowAltCircleRight />,
    desc: "Mendapatkan menyelesaikan studi case company secara langsung melalui program Project Based Internship dan menambah portofolio, melatih softskill kamu melalui program Coaching serta berkesempatan di Promote untuk menjadi intern to employee di Company Partner GOVOKASi."
  },
]

export const faq = [
  {
    id: 1,
    title: "FAQ",
    text: "Frequently Asked Questions About the GOVOKASI"
  }
]

//================== Contact ==================//

export const contactData = [
  {
    id: 1,
    icons: <FaWhatsapp />,
    name: "With Whatsapp",
    path: "https://api.whatsapp.com/send/?phone=6281316653083&text&type=phone_number&app_absent=0"
  },

  {
    id: 2,
    icons: <MdOutlineAttachEmail />,
    name: "With Email",
    path: "mailto:hello@govokasi.co"
  },

  {
    id: 3,
    icons: <FaInstagram />,
    name: "With Instagram",
    path: "https://www.instagram.com/govokasi/"
  },
]

export const contactImg = [
  {
    id: 1,
    img: contact
  }
]

export const headContact = [
  {
    id: 1,
    name: "Contact Our Team"
  }
]

//================== Footer ==================//

export const footerImg = [
  {
    id: 1,
    img: logoImg
  }
]

export const footerData = [
  {
    id: 1,
    name: "Jl. Raya Belimbing No.88, Babakan Asem, Kec. Kosambi, Kabupaten Tangerang, Banten 15212",
  }
]

export const footerCopy = [
  {
    id: 1,
    name: "© All Rights Reserved 2022. GOVOKASI."
  }
]