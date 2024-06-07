'use client'
import { dataPatner } from "@/components/data/data"

import Marquee from "react-fast-marquee";

import Image from "next/image";

import { Fade } from "react-awesome-reveal"

export default function Patner() {

  let heading = [
    {
      id: 1,
      name: "Trusted By",
      desc: "Our Partners in Developing Talents Potential"
    }
  ]

  return (
    <section className="patner">
      <div className="patner__container container grid">

        {
          heading.map((item) => {
            return (
              <div className="heading" key={item.id}>
                <Fade duration={1000} triggerOnce direction="down" delay={500}>
                  <h1>{item.name}</h1>
                </Fade>

                <Fade duration={1000} triggerOnce direction="up" delay={500}>
                  <p>{item.desc}</p>
                </Fade>
              </div>
            )
          })
        }

        <Marquee style={{ width: "100%", height: "100%", overflow: "hidden" }} pauseOnClick direction='left' autoFill loop={0}>
          {
            dataPatner.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Image src={item.img} alt={item.img} quality={100} loading="lazy" />
                </div>
              )
            })
          }
        </Marquee>

      </div>
    </section>
  )
}
