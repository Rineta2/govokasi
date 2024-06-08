'use client'

import { useState, useEffect } from "react"

import { logo, navLink } from "@/components/data/data"

import Image from "next/image"

import Link from "next/link"

import { RiMenu5Line } from "react-icons/ri";
import { FaTimes } from "react-icons/fa"

import "@/components/sass/Header.scss"

export default function Header() {

  const [open, setOpen] = useState(false)
  const [fixed, setFixed] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={fixed ? "fixed" : ""}>
      <nav className="nav container">

        <div className="logo">
          {
            logo.map((item) => {
              return (
                <Image key={item.id} src={item.img} alt="logo" quality={100} loading="lazy" />
              )
            })
          }
        </div>

        <ul className={`nav__list ${open ? "open" : ""}`}>
          {
            navLink.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              )
            })
          }
        </ul>

        <div className="nav__actions">
          <Link className="btn" href={"https://api.whatsapp.com/send/?phone=6281316653083&text&type=phone_number&app_absent=0"}>Contact Us</Link>

          <div className="menu" onClick={() => setOpen(!open)}>
            {open ? <FaTimes className='close' /> : <RiMenu5Line className='toggle' />}
          </div>
        </div>
      </nav>
    </header>
  )
}