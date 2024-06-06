'use client'

import { Values } from "@/components/data/data"

import Image from "next/image"

import bg from "@/components/assets/company/bg.png"

import { Fade } from "react-awesome-reveal";

export default function Company() {

  let header = [
    {
      id: 1,
      name: "COMPANY VALUES"
    }
  ]

  return (
    <section className="values" id="company">

      <div className="values__container container grid">
        {
          header.map((item) => {
            return (
              <div className="heading">
                <Fade duration={1000} triggerOnce key={item.id} cascade direction="down">
                  <h1>{item.name}</h1>
                </Fade>
              </div>
            )
          })
        }

        <div className="content">
          {
            Values.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Fade duration={1000} triggerOnce delay={500}>
                    <h1>{item.name}</h1>
                  </Fade>

                  <p>{item.desc}</p>

                  <Fade duration={1000} triggerOnce style={{ zIndex: -1 }} delay={500}>
                    <Image src={bg} alt="bg" loading="lazy" />
                  </Fade>
                </div>
              )
            })
          }
        </div>
      </div>
    </section >
  )
}