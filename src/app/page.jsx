import "@/components/sass/Home.scss"

import dynamic from 'next/dynamic'

const Home = dynamic(() => import("@/components/ui/Home"), {
  ssr: false
})

const Company = dynamic(() => import("@/components/ui/Company"), {
  ssr: false
})

const About = dynamic(() => import("@/components/ui/About"), {
  ssr: false
})

const Connect = dynamic(() => import("@/components/ui/Connect"), {
  ssr: false
})

const Services = dynamic(() => import("@/components/ui/Services"), {
  ssr: false
})

const Charachter = dynamic(() => import("@/components/ui/Charachter"), {
  ssr: false
})

const Banner = dynamic(() => import("@/components/ui/Banner"), {
  ssr: false
})

const Patner = dynamic(() => import("@/components/ui/Patner"), {
  ssr: false
})

const Testimonials = dynamic(() => import("@/components/ui/Testimonials"), {
  ssr: false
})

const Team = dynamic(() => import("@/components/ui/Team"), {
  ssr: false
})

const Potensial = dynamic(() => import("@/components/ui/Potensial"), {
  ssr: false
})

const Faq = dynamic(() => import("@/components/ui/Faq"), {
  ssr: false
})

const Contact = dynamic(() => import("@/components/ui/Contact"), {
  ssr: false
})


export default function page() {

  return (
    <>
      <Home />
      <About />
      <Connect />
      <Services />
      <Company />
      <Charachter />
      <Banner />
      <Patner />
      <Testimonials />
      <Team />
      <Potensial />
      <Faq />
      <Contact />
    </>
  )
}