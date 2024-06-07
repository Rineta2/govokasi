'use client'

import { magangData, dataButton } from "@/components/data/data"

import Link from "next/link"

import { Fade } from 'react-awesome-reveal';

export default function About() {
  return (
    <section className="magang" id='about'>
      <div className="magang__container container grid">
        <div className="content">
          {
            magangData.map((item) => {
              return (
                <div className="text" key={item.id}>
                  <Fade duration={1000} triggerOnce key={item.id} direction="down" delay={500}>
                    <h1>{item.title}</h1>
                  </Fade>

                  <Fade duration={1000} triggerOnce key={item.id} delay={500}>
                    <span>{item.name}</span>
                  </Fade>

                  <Fade duration={1000} triggerOnce key={item.id} delay={500}>
                    <p>Our objective is to help both interns and companies <b>grow</b>. By helping interns find the right internship program to help them realize their <b>full potential</b>.</p>
                  </Fade>

                  <Fade duration={1000} triggerOnce key={item.id} delay={500}>
                    <p>During the internship, we provide <b>continuous training & coaching</b> to help companies cultivate the interns potential.</p>
                  </Fade>

                </div>
              )
            })
          }

          <Fade duration={1000} triggerOnce delay={500} direction="up">
            <div className="button">
              {
                dataButton.map((item) => {
                  return (
                    <Link href={item.path} key={item.id}>{item.name}</Link>
                  )
                })
              }
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}