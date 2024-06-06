'use client'
import { useState } from "react"

import { dataServices } from "@/components/data/data"

import animasi from "@/components/assets/services/lamp.gif"

import Image from "next/image"

import { FaTimes } from "react-icons/fa";

export default function Services() {

  const [model, setModel] = useState(false)

  return (
    <section className="services" id='career'>
      <div className="services__container container grid">

        <div className="heading">
          <h1>Why Choose Us?</h1>
          <div onClick={() => setModel(true)} className="button">Click Here To Book An Appointment</div>
        </div>

        <div className="content">
          {
            dataServices.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <i>{item.icons}</i>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              )
            })
          }
        </div>

        <div className="animasi">
          <Image src={animasi} alt="animasi" loading="lazy" />
        </div>

        <div className={model ? "model open" : "model"}>
          <div className="box">
            <form>
              <label> Nama
                <input type="text" />
              </label>

              <label>Number Phone
                <input type="text" />
              </label>

              <label>Tanggal
                <input type="date" />
              </label>

              <button type="submit">Kirim</button>
            </form>
          </div>

          <div className="close" onClick={() => setModel(false)}>
            <FaTimes className="icons" />
          </div>
        </div>

      </div>
    </section>
  )
}