'use client'

import { useState } from "react"

import { faqData, faq } from "@/components/data/data"

import { Fade } from "react-awesome-reveal"

export default function Faq() {

  const [active, setActive] = useState("")

  const toggleActive = (id) => {
    setActive(active === id ? "" : id);
  }

  return (
    <section className="faq">
      <div className="faq__container">
        {
          faq.map((item) => {
            return (
              <div className="heading">
                <Fade duration={1000} triggerOnce delay={500} direction="down">
                  <h1>{item.title}</h1>
                </Fade>

                <Fade duration={1000} triggerOnce delay={500} direction="up">
                  <p>{item.text}</p>
                </Fade>
              </div>
            )
          })
        }
        <div className="box">
          {
            faqData.map((item) => {
              return (
                <div className={`content ${active === item.id ? "active" : ""}`} onClick={() => toggleActive(item.id)} key={item.id}>
                  <div className="top">
                    <h2>{item.name} <i>{item.icons}</i></h2>
                    <p>{item.desc}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}