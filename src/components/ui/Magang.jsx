import { magangData, dataButton } from "@/components/data/data"

import Link from "next/link"

export default function magang() {
  return (
    <section className="magang" id='magang'>
      <div className="magang__container container grid">
        <div className="content">
          {
            magangData.map((item) => {
              return (
                <div className="text" key={item.id}>
                  <h1>{item.title}</h1>
                  <span>{item.name}</span>
                  <p>Our objective is to help both interns and companies <b>grow</b>. By helping interns find the right internship program to help them realize their <b>full potential</b>.</p>
                  <p>During the internship, we provide <b>continuous training & coaching</b> to help companies cultivate the interns potential.</p>
                </div>
              )
            })
          }

          <div className="button">
            {
              dataButton.map((item) => {
                return (
                  <Link href={item.path} key={item.id}>{item.name}</Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}