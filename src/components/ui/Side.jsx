'use client'
import { useState } from "react";

import Link from "next/link";

import { dataSide } from "@/components/data/data"

import { IoMdArrowDropright } from "react-icons/io";

export default function Side() {

  const [open, setOpen] = useState(false)

  return (
    <div className={`sidebar ${open ? 'active' : ''}`}>

      <div className="open">
        <IoMdArrowDropright className="icons" onClick={() => setOpen(!open)} />
      </div>

      {
        dataSide.map((item, index) => {
          return (
            <Link href={item.path} key={index} onClick={() => setOpen(!open)}>
              {item.icons}
            </Link>
          )
        })
      }
    </div>
  )
}
