'use client'
import { testimonialsData } from "@/components/data/data"

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import Image from "next/image";

import { Fade } from 'react-awesome-reveal';

export default function Testimonials() {

  let heading = [
    {
      id: 1,
      name: "Testimonials"
    }
  ]

  return (
    <section className="testimonials">

      <div className="testimonials__container container grid">

        {
          heading.map((item) => {
            return (
              <div className="heading" key={item.id}>
                <Fade duration={1000} triggerOnce direction="down" delay={500}>
                  <h1>{item.name}</h1>
                </Fade>
              </div>
            )
          })
        }

        <Swiper modules={[Autoplay]} spaceBetween={30} effect="fade" speed={1000} loop={true} autoplay={{ delay: 2000 }}
          grabCursor={true}
          className="mySwiper">
          {
            testimonialsData.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="box">
                    <Image src={item.img} alt={item.name} loading="lazy" quality={100} />

                    <div className="profile">
                      <p>{item.desc}</p>
                      <h3>{item.name}</h3>
                      <span>{item.job}</span>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>

    </section>
  )
}