'use client'
import { useEffect } from 'react'

import { homeImg, homeImg2, dataHome, dataHome2, dataHome3 } from '@/components/data/data'

import Image from 'next/image'

import "@/components/sass/Home.scss"

import { TypeAnimation } from 'react-type-animation';

import Link from 'next/link'

export default function page() {

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax__image');
      parallaxElements.forEach((el) => {
        const speed = el.getAttribute('data-speed');
        const yPos = window.scrollY * speed;
        el.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="home">
        <div className="home__container container grid">
          {homeImg.map((item) => (
            <div className='bg' key={item.id}>
              <Image src={item.img} alt="home" quality={100} className="parallax__image"
                loading="lazy"
                layout="fill"
                objectFit="cover"
                data-speed="0.5" />
            </div>
          ))}

          <div className="content">

            <div className="profile">
              {
                homeImg2.map((item) => {
                  return (
                    <Image src={item.img} alt="home" quality={100} loading="lazy" />
                  )
                })
              }

              <div className="text">
                {
                  dataHome.map((item) => {
                    return (
                      <>
                        <h1 key={item.id}>{item.title} <span>{item.span}</span></h1>
                        <TypeAnimation
                          sequence={[

                            'Career',
                            1000,
                            'Intern',
                            1000,
                            'Future',
                            1000
                          ]}
                          wrapper="span"
                          speed={50}
                          style={{ fontSize: '2.4rem', display: 'inline-block', color: "#d3b574", fontWeight: '400', letterSpacing: '1px', marginTop: '.4rem', }}
                          repeat={Infinity}
                        />
                      </>
                    )
                  })
                }
              </div>

              <div className="btn">
                <>
                  {
                    dataHome2.map((item) => {
                      return (
                        <Link key={item.id} href={item.path} className="primary">{item.name}</Link>
                      )
                    })
                  }
                </>
              </div>

              <div className="secondary">
                <Link href={"https://form.smartsuite.com/swgnyg44/pcSNOwKfLz"}>Join Us <span><b>Company Partner</b></span> <h5>Of Govokasi</h5></Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}