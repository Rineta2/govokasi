import "@/components/sass/Home.scss"

import dynamic from 'next/dynamic'

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

const Home = dynamic(() => import("@/components/ui/Home"), {
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
    </>
  )
}