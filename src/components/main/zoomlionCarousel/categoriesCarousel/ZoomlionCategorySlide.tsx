import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'react-bootstrap-icons'
import c from '../zoomlionCarousel.module.scss'
import nophoto from '../../../../assets/img/nophoto.webp'

import type { ZoomlionItemType } from '../../../../redux/zoomlionReducer'


type ZoomlionCategorySlidePropsType = {
    // catItems: [] | Array<ZoomlionItemType>,
    catUrl: string
    catName: string,
    catCharacter: string,
    catCharacterValue: string,
    catPhoto: string,
}

const ZoomlionCategorySlide: React.FC<ZoomlionCategorySlidePropsType> = ({ catUrl, catName, catCharacter, catCharacterValue, catPhoto }) => {
    // console.log(catItems)
    return (
        <>
            <div className={c.slideText}>
                <h3 className={c.slideName}>{catName}</h3>
                <p className={c.slideCharName}>{catCharacter}</p>
                <p className={c.slideCharValue}>{catCharacterValue}</p>
            </div>
            <div className={c.imgWrapper}>
                <motion.img src={catPhoto ? catPhoto : nophoto} whileHover={{ scale: 1.1 }} alt={catName}/>
            </div>
            <NavLink to={catUrl} className={c.showAll}>
                <span>Смотреть все товары категории</span>  <ArrowRight />
            </NavLink>
        </>
    )
}

export { ZoomlionCategorySlide }