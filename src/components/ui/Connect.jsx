import { dataConnect, dataTitle } from "@/components/data/data"

import Image from "next/image"

import assets from "@/components/assets/bakat/assets.png"

export default function Connect() {
  return (
    <section className="connect">
      <div className="connect__container container grid">
        <div className="content">
          <div className="img">
            {
              dataConnect.map((item) => {
                return (
                  <Image src={item.img} alt="connect" key={item.id} quality={100} />
                )
              })
            }

            <div className="assets">
              <Image src={assets} alt="assets" loading="lazy" />
            </div>
          </div>

          <div className="text">
            <div className="heading">
              <h1>How We Do It ?</h1>
              <span><b>Connect</b> Talents</span>
              <div className="row"></div>
            </div>
            {
              dataTitle.map((item) => {
                return (
                  <div className="box" key={item.id}>
                    <div className="box__icons">
                      <i>{item.icons}</i>
                      <h3>{item.name}</h3>
                    </div>

                    <p>{item.desc}</p>
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