'use client'
import { useEffect } from 'react'

import { homeImg, homeImg2, dataHome, dataHome2 } from '@/components/data/data'

import Image from 'next/image'

import "@/components/sass/Home.scss"

import { TypeAnimation } from 'react-type-animation';

import Link from 'next/link'

import { useSpring, animated } from "@react-spring/web";

import { useInView } from "react-intersection-observer";

import { Fade } from 'react-awesome-reveal';

export default function Home() {

  const NumberComponent = ({ n }) => {
    const { ref, inView } = useInView();

    const { number } = useSpring({
      from: { number: 0 },
      to: { number: inView ? n : 0 },
      delay: 100,
      reset: false,
      onStart: () => console.log('onStart'),
      config: { mass: 1, tension: 20, friction: 10 },
    });

    return (
      <div ref={ref}>
        <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
      </div>
    );
  };

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
      <section className="home" id="home">
        <div className="home__container container grid">
          {homeImg.map((item) => (
            <div className='bg' key={item.id}>
              <Image src={item.img} alt="home" quality={100} className="parallax__image"
                loading="lazy"
                data-speed="0.5" />
            </div>
          ))}

          <div className="content">

            <div className="profile">
              {
                homeImg2.map((item) => {
                  return (
                    <Image src={item.img} alt="home" quality={100} loading="lazy" key={item.id} />
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

      <div className="count">
        <div className="counter container">
          <div className="box">
            <Fade duration={1000} triggerOnce cascade direction="down" delay={500}>
              <h1>+<NumberComponent n={6000} /></h1>
            </Fade>

            <Fade duration={1000} triggerOnce cascade direction="up" delay={500}>
              <h3>Talent Pool</h3>
            </Fade>
            <div className="row"></div>
          </div>

          <div className="box">
            <Fade duration={1000} triggerOnce cascade direction="down" delay={500}>
              <h1>+ <NumberComponent n={120} /></h1>
            </Fade>

            <Fade duration={1000} triggerOnce cascade direction="up" delay={500}>
              <h3>Startup Partners</h3>
            </Fade>
            <div className="row"></div>
          </div>

          <div className="box">
            <Fade duration={1000} triggerOnce cascade direction="down" delay={500}>
              <h1>+ <NumberComponent n={500} /></h1>
            </Fade>

            <Fade duration={1000} triggerOnce cascade direction="up" delay={500}>
              <h3>Hours On Training</h3>
            </Fade>
            <div className="row"></div>
          </div>

          <div className="box">
            <Fade duration={1000} triggerOnce cascade direction="down" delay={500}>
              <h1><NumberComponent n={80} />%</h1>
            </Fade>

            <Fade duration={1000} triggerOnce cascade direction="up" delay={500}>
              <h3>Hours On Training</h3>
            </Fade>
          </div>

        </div>
      </div>
    </>
  )
}