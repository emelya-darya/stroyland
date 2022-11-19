import c from './beforeFooter.module.scss'

type BeforeFooterPropsType = {
    logo: string,
    slogan: string,
    label: string
}

const BeforeFooter: React.FC<BeforeFooterPropsType> = ({ logo, slogan, label }) => {
    return (
        <div className={c.beforeFooterBlock}>
            <div className='container'>
                <div className={c.logoWrapper}>
                    {logo ? <img src={logo} alt={label} /> : <p>{label}</p>}
                </div>
                <p className={c.sloganPar}>{slogan}</p>
            </div>
        </div>
    )
}

export { BeforeFooter }