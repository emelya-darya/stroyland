import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'react-bootstrap-icons'
import nophoto from '../../../../assets/img/nophoto.webp'

import c from '../zoomlionCarousel.module.scss'

import { ZoomlionItemType } from "../../../../redux/zoomlionReducer"



const ZoomlionItemSlide: React.FC<ZoomlionItemType> = ({ itemUrl, name, chars, img }) => {
   
    return (
        <>
            <div className={c.slideText}>
                <h3 className={c.slideName}>{name}</h3>
            </div>
            <div className={c.imgWrapper}>
                <motion.img src={img ? img : nophoto} whileHover={{ scale: 1.1 }} />
            </div>
            <NavLink to={itemUrl} className={c.showAll}>
                <span>Основные характеристики</span>  <ArrowRight />
            </NavLink>
        </>
    )
}

export { ZoomlionItemSlide }