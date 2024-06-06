import logoImg from '@/components/assets/navbar/logo.png'

import banner from "@/components/assets/home/home.png"

import banner2 from "@/components/assets/home/GO-VOKASi-web-2.png"

import connect from "@/components/assets/bakat/how.png"

import { FaCheckCircle } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { FaUsers, FaGraduationCap } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";

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
    name: "Project Activity",
    path: "#project"
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