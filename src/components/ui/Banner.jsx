'use client'
import { dataBanner, buttonRegister, dataRegister } from "@/components/data/data"

import Image from "next/image"

import Link from "next/link"

import { Fade } from "react-awesome-reveal"

export default function Banner() {

  let heading = [
    {
      id: 1,
      name: "Latest Events..."
    }
  ]

  return (
    <section className="banner" id="register">
      <div className="banner__container container grid">

        <div className="heading">
          {
            heading.map((item) => {
              return (
                <Fade duration={1000} triggerOnce key={item.id} direction="down" delay={500}>
                  <h1 key={item.id}>{item.name}</h1>
                </Fade>
              )
            })
          }
        </div>

        {
          dataBanner.map((item) => {
            return (
              <Fade duration={1000} triggerOnce key={item.id} delay={500}>
                <Image src={item.img} alt="banner" key={item.id} quality={100} loading={"lazy"} />
              </Fade>
            )
          })
        }

        <div className="content">
          {
            dataRegister.map((item) => {
              return (
                <Fade duration={1000} triggerOnce key={item.id} delay={500} direction="down">
                  <h2 key={item.id}>{item.text}</h2>
                </Fade>
              )
            })
          }

          {
            buttonRegister.map((item) => {
              return (
                <Fade duration={1000} triggerOnce key={item.id} delay={500} direction="up">
                  <Link href={item.path} key={item.id}>{item.name}</Link>
                </Fade>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}