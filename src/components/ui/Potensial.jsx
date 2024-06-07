'use client'
import { headExperience, experience } from "@/components/data/data"

import Link from "next/link"

import { Fade } from "react-awesome-reveal"
export default function Potensial() {

  return (
    <section className="potensial">
      <div className="potensial__container container grid">

        <div className="content">

          <div className="box">
            {
              headExperience.map((item) => {
                return (
                  <Fade duration={1000} triggerOnce direction="down" delay={500} key={item.id}>
                    <h1 key={item.id}>{item.name}</h1>
                  </Fade>
                )
              })
            }

            {
              experience.map((item) => {
                return (
                  <Fade duration={1000} triggerOnce delay={500} key={item.id}>
                    <p key={item.id}>
                      {item.name}
                    </p>
                  </Fade>
                )
              })
            }

            <Fade duration={1000} triggerOnce delay={500} direction="up">
              <Link className="buttons" href={"https://api.whatsapp.com/send/?phone=6281316653083&text&type=phone_number&app_absent=0"}>Free Consultation </Link>
            </Fade>
          </div>

          <div className="video">
            <Fade duration={1000} triggerOnce delay={500}>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/i3Z_s7R3Ke0?si=vQiwp78gsn5RB9Hl" title={"YouTube video player"}
                frameBorder={0} allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"} referrerPolicy={"strict-origin-when-cross-origin"} allowfullscreen
              ></iframe>
            </Fade>
          </div>

        </div>

      </div>
    </section>
  )
}
