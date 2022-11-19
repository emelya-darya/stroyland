
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import shortid from 'shortid'

import { ZoomlionItem } from './item/ZoomlionItem'
import { ZoomlionItemsCarousel } from './itemsCarousel/ZoomlionItemsCarousel'
import { ZoomlionCategoriesCarousel } from './categoriesCarousel/ZoomlionCategoriesCarousel'


import { InitialZoomlionStateType } from '../../../redux/zoomlionReducer'

import c from './zoomlionCarousel.module.scss'

type PropsType = { zoomlionData: InitialZoomlionStateType }

const ZoomlionContainer: React.FC<PropsType> = ({ zoomlionData }) => {

    return (
        <section className={`${c.zoomlionWr} section-page`} id='zoomlionSlider'>
            <div className={`${c.container} container`}>
                <h2 className={'section-header'}>Каталог продукции Zoomlion</h2>
             
                <Routes>
                    <Route key={shortid.generate()} path='/:zoomlionCatName/:itemName' element={<ZoomlionItem zoomlionData={zoomlionData} />} />
                    <Route key={shortid.generate()} path='/:zoomlionCatName' element={<ZoomlionItemsCarousel zoomlionData={zoomlionData} />} />
                    <Route key={shortid.generate()} path='/' element={<ZoomlionCategoriesCarousel zoomlionData={zoomlionData} />} />
                </Routes>
                
                
            </div>
        </section>
    )
}

export { ZoomlionContainer }