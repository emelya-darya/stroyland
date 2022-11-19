import pnf from '../../../assets/img/pnf.webp'
import c from './zoomlionCarousel.module.scss'

type PropsType = {
    par1: string,
    par2: string,
}

const PNF404: React.FC<PropsType> = ({ par1, par2 }) => {
    return (
        <div className={c.notFound}>
            <div className={c.pnfImgWrapper}>
                <img src={pnf} />
            </div>

            <div className={c.pnfTextWrapper}>
                <p className={c.pnfTitle}>{par1}</p>
                <p className={c.pnfSubTitle}>{par2}</p>
            </div>
        </div>
    )
}

export { PNF404 }