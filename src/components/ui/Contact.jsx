'use client'
import { contactData, contactImg, headContact } from "@/components/data/data"

import Image from "next/image"

import Link from "next/link"

import { Fade } from 'react-awesome-reveal'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container container grid">
        {
          contactImg.map((item) => {
            return (
              <Image src={item.img} alt="contact" key={item.id} quality={100} loading="lazy" />
            )
          })
        }

        <div className="content">
          {
            headContact.map((item) => {
              return (
                <Fade duration={1000} triggerOnce direction="down" delay={500}>
                  <h1 key={item.id}>{item.name}</h1>
                </Fade>
              )
            })
          }

          <div className="contact__data">
            {
              contactData.map((item) => {
                return (
                  <Link className="box" key={item.id} href={item.path}>
                    <Fade duration={1000} triggerOnce direction="down" delay={500}>
                      <i>{item.icons}</i>
                    </Fade>

                    <Fade duration={1000} triggerOnce direction="up" delay={500}>
                      <span>{item.name}</span>
                    </Fade>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}