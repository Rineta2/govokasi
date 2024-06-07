'use client'
import { dataConnect, dataTitle } from "@/components/data/data"

import Image from "next/image"

import assets from "@/components/assets/bakat/assets.png"

import { Fade } from 'react-awesome-reveal';

export default function Connect() {
  return (
    <section className="connect">
      <div className="connect__container container grid">
        <div className="content">
          <div className="img">
            {
              dataConnect.map((item) => {
                return (
                  <Fade duration={1000} triggerOnce key={item.id} delay={500}>
                    <Image src={item.img} alt="connect" key={item.id} quality={100} />
                  </Fade>
                )
              })
            }

            <div className="assets">
              <Image src={assets} alt="assets" loading="lazy" />
            </div>
          </div>

          <div className="text">
            <div className="heading">
              <Fade duration={1000} triggerOnce direction="down" delay={500}>
                <h1>How We Do It ?</h1>
              </Fade>

              <Fade duration={1000} triggerOnce direction="up" delay={500}>
                <span><b>Connect</b> Talents</span>
              </Fade>
              <div className="row"></div>
            </div>
            {
              dataTitle.map((item) => {
                return (
                  <div className="box" key={item.id}>
                    <div className="box__icons">
                      <Fade duration={1000} triggerOnce key={item.id} delay={500}>
                        <i>{item.icons}</i>
                        <h3>{item.name}</h3>
                      </Fade>
                    </div>

                    <Fade duration={1000} triggerOnce key={item.id} delay={500}>
                      <p>{item.desc}</p>
                    </Fade>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}