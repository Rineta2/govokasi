import { footerImg, footerData, footerCopy } from "@/components/data/data"

import Image from "next/image"

import "@/components/sass/Header.scss"

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="logo">
          {
            footerImg.map((item) => {
              return (
                <Image src={item.img} alt="footer" key={item.id} quality={100} loading="lazy" />
              )
            })
          }
        </div>

        <div className="box">
          {
            footerData.map((item) => {
              return (
                <h2 key={item.id}>{item.name}</h2>
              )
            })
          }

          {
            footerCopy.map((item) => {
              return (
                <p key={item.id}>{item.name}</p>
              )
            })
          }
        </div>
      </div>
    </footer>
  )
}
