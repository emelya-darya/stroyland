import shortid from 'shortid'
import { useParams, NavLink } from 'react-router-dom'
import { ArrowLeftSquare } from 'react-bootstrap-icons'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/scrollbar'
import 'swiper/scss/mousewheel'


import type { InitialZoomlionStateType } from '../../../../redux/zoomlionReducer'

import pnf from '../../../../assets/img/pnf.webp'
import { ZoomlionItemSlide } from './ZoomlionItemSlide'
import c from '../zoomlionCarousel.module.scss'
import { PNF404 } from '../PageNotFound'





type MapStatePropsType = { zoomlionData: InitialZoomlionStateType }


const ZoomlionItemsCarousel: React.FC<MapStatePropsType> = ({ zoomlionData }) => {
    const catUrl: string | undefined = useParams().zoomlionCatName

    const currCat = zoomlionData.zoomlionCategories.find(item => catUrl == item.categoryUrl)


    const slides = currCat?.items.map(item => {
        return (
            <SwiperSlide className={`${c.zoomLionSlide} ${c.zoomLionItemSlide}`} key={shortid.generate()}>
                <ZoomlionItemSlide
                    itemUrl={item.itemUrl}
                    img={item.img}
                    chars={item.chars}
                    name={item.name}
                />
            </SwiperSlide>
        )
    })

    return (
        <>
            <div className={c.zoomlionBreadcrumbs}>
                <NavLink to='/'><ArrowLeftSquare /></NavLink>
                <span>/</span>
                <h3>{currCat?.name}</h3>
            </div>

            {currCat
                ? <Swiper className={`${c.zoomlionItemsSlider} zoomlionSlider`}
                    modules={[Navigation, A11y]}
                    speed={1000} navigation spaceBetween={20} watchSlidesProgress={true}
                    breakpoints={{
                        1: { slidesPerView: 1 },
                        450: { slidesPerView: 2 },
                        1250: { slidesPerView: 3 },
                    }}
                >
                    {slides}
                </Swiper>
                : <PNF404 par1='Упс, нет такой категории(' par2='Вернитесь на уровень выше' />
            }

        </>
    )
}




export { ZoomlionItemsCarousel }