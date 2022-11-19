import shortid from 'shortid'
import c from './aboutUs.module.scss'

const AboutUs: React.FC<{ aboutUs: Array<string> }> = ({ aboutUs }) => {

    const text = aboutUs.map(p => <p key={shortid.generate()}>{p}</p>)
    return (
        <section className={`${c.aboutUsWr} section-page`} id='aboutUs'>
            <div className={c.container}>
                <h2 className={'section-header'}>О компании</h2>
                <div className={c.text}>
                    {text}
                </div>
            </div>
        </section>
    )
}

export { AboutUs }