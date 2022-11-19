import { ArrowLeftSquare, Tools } from 'react-bootstrap-icons'
import { useParams, NavLink } from 'react-router-dom'
import shortid from 'shortid'
import type { InitialZoomlionStateType } from "../../../../redux/zoomlionReducer"

import nophoto from '../../../../assets/img/nophoto.webp'

import c from '../zoomlionCarousel.module.scss'
import { PNF404 } from '../PageNotFound'


const ZoomlionItem: React.FC<{ zoomlionData: InitialZoomlionStateType }> = ({ zoomlionData }) => {
    const catUrl: string | undefined = useParams().zoomlionCatName
    const itemUrl: string | undefined = useParams().itemName

    const currCat = zoomlionData.zoomlionCategories.find(item => catUrl == item.categoryUrl)
    const currItem = currCat?.items.find(item => itemUrl == item.itemUrl)

    const currItemChars = currItem?.chars.map(el => {
        const charArr = Object.entries(el)

        return (
            <li key={shortid.generate()}>
                <p className={c.charSubtitle}>
                    <Tools />
                    <span >{charArr[0][0]}:</span>
                </p>
                <span className={c.charValue}>{charArr[0][1]}</span>
            </li>
        )
    })


    return (<>
        <div className={c.zoomlionBreadcrumbs}>
            <NavLink to='/'><ArrowLeftSquare /></NavLink>
            <span>/</span>
            <NavLink to={`/${currCat?.categoryUrl}`}><h3>{currCat?.name}</h3></NavLink>

            <span>/</span>
            <h3>{currItem?.name}</h3>
        </div>


        {currItem
            ? <div className={c.itemWrapper}>
                <div className={c.itemPageImgWrapper}>
                    <img src={currItem?.img ? currItem?.img : nophoto} alt={currItem?.name} />
                </div>
                <div className={c.itemPageTextCont}>
                    <ul className={c.itemPageCharsList}>
                        {currItemChars}
                    </ul>
                </div>
            </div>
            : <PNF404 par1='Упс, нет такой позиции(' par2='Вернитесь на уровень выше' />
        }

    </>)
}

export { ZoomlionItem }