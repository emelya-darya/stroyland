
import shortid from 'shortid'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

import arrowDown from '../../../assets/img/arrow.webp'

import { Pagination, A11y, Autoplay,EffectCreative } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-creative'

import c from './banner.module.scss'


const Banner: React.FC<{ slogan: string, bannerImages: Array<string> }> = ({ slogan, bannerImages }) => {

    const slidesArr = bannerImages.map(img => {
        return <SwiperSlide
            className={c.bannerSlide}
            key={shortid.generate()}
            style={{ background: `url(${img}) center 100%/cover no-repeat fixed`, }} />
    })

    return (
        <section className={c.bannerWr}>
            <Swiper className={`${c.bannerSlider} bannerSlider`}
                effect={'cube'}
                creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: [0, 0, -400],
                    },
                    next: {
                      translate: ['100%', 0, 0],
                    },
                  }}
                modules={[Pagination, A11y, Autoplay,EffectCreative]}
                spaceBetween={0}
                slidesPerView={1}

                pagination={{ clickable: true }}

                speed={1000} loop
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}

            >
                {slidesArr}

            </Swiper>

            <div className={c.container}>
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3 }}>
                    {slogan}
                </motion.h1>

                <Link activeClass={c.active} smooth={true} offset={-60} duration={500} spy={true} to='aboutUs' >
                    <motion.img className={c.arrow} src={arrowDown}
                        animate={{
                            x: ['-50%', '-50%', '-50%'],
                            y: ['0px', '20px', '0px'],
                        }}
                        transition={{
                            duration: 3,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatDelay: 0,
                        }}
                    />

                </Link>
            </div>

        </section>

    )

}

export { Banner }