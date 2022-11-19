import shortid from 'shortid'

import { Navigation, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/scrollbar'
import 'swiper/scss/mousewheel'

import { JACSlide } from './JACSlide'
import type { InitialJACStateType } from '../../../redux/JACReducer'
import c from './JACCarousel.module.scss'



type MapStatePropsType = { JACData: InitialJACStateType }

const JACCarousel: React.FC<MapStatePropsType> = ({ JACData }) => {

    const slides = JACData.JACItems.map(item => {
        return (
            <SwiperSlide className={c.zoomLionSlide} key={shortid.generate()}>
                <JACSlide itemData={item} />
            </SwiperSlide>
        )
    })


    return (
        <section className={`${c.JACWr} section-page`} id='JACSlider'>
            <div className={`${c.container} container`}>
                <h2 className={'section-header'}>Автомобили JAC в России - наш модельный ряд</h2>
                <Swiper className='JACSlider slider'
                    modules={[Navigation, Scrollbar, A11y, Autoplay, Mousewheel]}
                    speed={1000} navigation loop scrollbar={{ draggable: true }} mousewheel={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true
                    }}
                    spaceBetween={30} slidesPerView={4}
                    breakpoints={{
                        1: { slidesPerView: 1 },
                        500: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1250: { slidesPerView: 4 },
                    }}
                >
                    {slides}

                </Swiper>
            </div>
        </section>
    )
}



export { JACCarousel }