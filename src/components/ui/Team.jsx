'use client'
import { teamData } from '@/components/data/data'

import Image from 'next/image'

import { Fade } from "react-awesome-reveal"
export default function Team() {

  let team = [
    {
      id: 1,
      name: "Meet The Team"
    }
  ]

  return (
    <section className="team">
      <div className="team__container container grid">

        {
          team.map((item) => {
            return (
              <div className="heading" key={item.id}>
                <Fade duration={1000} triggerOnce direction="down" delay={500}>
                  <h1>{item.name}</h1>
                </Fade>
              </div>
            )
          })
        }

        <div className="content">
          {
            teamData.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Fade duration={1000} triggerOnce delay={500} direction="down">
                    <Image src={item.img} alt={item.name} loading='lazy' quality={100} />
                  </Fade>

                  <Fade duration={1000} triggerOnce delay={500}>
                    <h1>{item.name}</h1>
                  </Fade>

                  <Fade duration={1000} triggerOnce delay={500} direction="up">
                    <span>{item.job}</span>
                  </Fade>
                </div>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}