import shortid from 'shortid'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Mousewheel, Scrollbar } from 'swiper'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/scrollbar'
import 'swiper/scss/mousewheel'

import { ZoomlionCategorySlide } from './ZoomlionCategorySlide'
import type { InitialZoomlionStateType } from '../../../../redux/zoomlionReducer'

import c from '../zoomlionCarousel.module.scss'



type PropsType = { zoomlionData: InitialZoomlionStateType }


const ZoomlionCategoriesCarousel: React.FC<PropsType> = ({ zoomlionData }) => {

    const slides = zoomlionData.zoomlionCategories.map(cat => {
        return (
            <SwiperSlide className={c.zoomLionSlide} key={shortid.generate()}>
                <ZoomlionCategorySlide
                    catUrl={cat.categoryUrl}
                    catName={cat.name}
                    catCharacter={cat.character}
                    catCharacterValue={cat.characterValue}
                    catPhoto={cat.photo}
                />
            </SwiperSlide>
        )
    })


    return (
        <>
            <Swiper className='zoomlionSlider'
                modules={[Navigation, Autoplay, Mousewheel, Scrollbar]}
                speed={1000} navigation loop mousewheel={true}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true
                }}
                spaceBetween={20} slidesPerView={4}
                breakpoints={{
                    1: { slidesPerView: 1 },
                    450: { slidesPerView: 2 },
                    1250: { slidesPerView: 3 },
                }}
            >
                {slides}
            </Swiper>
        </>
    )
}




export { ZoomlionCategoriesCarousel }