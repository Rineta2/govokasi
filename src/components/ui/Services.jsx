'use client'
import { useState, useRef } from "react"

import { dataServices } from "@/components/data/data"

import animasi from "@/components/assets/services/lamp.gif"

import Image from "next/image"

import { FaTimes } from "react-icons/fa";

import Axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Services() {

  const [model, setModel] = useState(false)

  const formRef = useRef(null);
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwguVF-XG1EQhuaNNk4ghJz54p51YTzokyGN4DlF6J3Yc7HMod8eOrFCOLLae92yilz/exec";
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const formDataInput = {
      nama: formData.get('nama'),
      email: formData.get('email'),
      nomber: `'${formData.get('nomber')}`,
      date: formData.get('date'),
    };

    if (formDataInput.nama && formDataInput.email && formDataInput.nomber && formDataInput.date) {
      try {
        const isDuplicate = await checkDuplicate(formDataInput.email, formDataInput.nomber);

        if (isDuplicate) {
          setErrorMessage('Email atau nomor sudah terdaftar.');
        } else {
          const response = await fetch(scriptUrl, {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            toast.success("Pesan telah dikirim 🥳");
            formRef.current.reset();
          } else {
            toast.error("Gagal mengirim pesan 😔");
          }
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error("Gagal mengirim pesan 😔");
      }
    } else {
      toast.error('Nama, Email, Nomber, dan date harus diisi!');
    }
  };

  const checkDuplicate = async (email, nomber) => {
    try {
      const response = await Axios.get(`https://script.google.com/macros/s/AKfycbwguVF-XG1EQhuaNNk4ghJz54p51YTzokyGN4DlF6J3Yc7HMod8eOrFCOLLae92yilz/exec?email=${email}&nomber=${nomber}`);
      return response.data.exists;
    } catch (error) {
      console.error('Error checking duplicate:', error);
      return false;
    }
  };

  return (
    <section className="services" id='services'>
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
            <form ref={formRef} onSubmit={handleSubmit}>
              <label> Nama
                <input type="text" name="nama" />
              </label>

              <label>Email
                <input type="email" name="email" />
              </label>

              <label>Number Phone
                <input type="tel" name="nomber" />
              </label>

              <label>Tanggal
                <input type="datetime-local" name="date" />
              </label>

              <div className="btn">
                <button type="submit">Kirim</button>
                <ToastContainer />
              </div>
            </form>

            {errorMessage && <div className="error-message">{errorMessage}</div>}

          </div>

          <div className="close" onClick={() => setModel(false)}>
            <FaTimes className="icons" />
          </div>
        </div>

      </div>
    </section>
  )
}