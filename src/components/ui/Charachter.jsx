'use client'

import { buildingImg, buildingData, box } from "@/components/data/data"

import Image from "next/image";

import { Fade } from "react-awesome-reveal"

export default function Charachter() {

  return (
    <>
      <section className="caracther">
        <div className="caracther__container container grid">

          <div className="image">
            {
              buildingImg.map((item) => {
                return (
                  <Image src={item.img} alt="caracther" loading="lazy" key={item.id} />
                )
              })
            }
          </div>

          <div className="content">
            {
              buildingData.map((item) => {
                return (
                  <div className="box" key={item.id}>
                    <Fade duration={1000} triggerOnce direction="down" delay={500}>
                      <span>{item.span}</span>
                    </Fade>

                    <Fade duration={1000} triggerOnce delay={500}>
                      <h3>{item.text}</h3>
                    </Fade>

                    <Fade duration={1000} triggerOnce delay={500}>
                      <h1><b>{item.bold}</b></h1>
                    </Fade>

                    <Fade duration={1000} triggerOnce delay={500}>
                      <h3>{item.text2}</h3>
                    </Fade>

                    <Fade duration={1000} triggerOnce delay={500} direction="up">
                      <p>{item.desc}</p>
                    </Fade>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="content">
        <div className="box__content">
          {
            box.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Fade duration={1000} triggerOnce delay={500} direction="down">
                    <h1>{item.number}</h1>
                  </Fade>

                  <Fade duration={1000} triggerOnce delay={500}>
                    <h3>{item.name}</h3>
                  </Fade>

                  <Fade duration={1000} triggerOnce delay={500} direction="up">
                    <p>{item.desc}</p>
                  </Fade>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
