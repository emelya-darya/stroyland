import { PhoneFill, EnvelopeFill, GeoAltFill, ClockFill, Map } from 'react-bootstrap-icons'
import shortid from 'shortid'
import { motion, useCycle } from 'framer-motion'
import { ContactForm } from './ContactForm'

import c from './contactsBlock.module.scss'

type ContactsBlockPropsType = {
    phone: string,
    email: string,
    address: string,
    schedule: string,
}

const trimPhone = (phoneStr: string): string => phoneStr.replace(/\D/g, '')

const contactsVisible = {
    open: {
        x: 0,
        transition: { restDelta: 2 }
    },
    closed: {
        x: '-100%',
        transition: { restDelta: 2 }
    }
};

const btnVariants = { open: { x: 0 }, closed: { x: '100%' }, }


const ContactsBlock: React.FC<ContactsBlockPropsType> = (props) => {
    const [isOpen, toggleOpen] = useCycle(true, false);

    const contactsArr = Object.entries(props)

    const contactsArrJSX = contactsArr.map((cont, i) => {

        if (!cont[1]) return ''

        let letteringInner: JSX.Element
        let liBody: JSX.Element

        switch (cont[0]) {
            case ('phone'):
                letteringInner = <p className={c.contactLettering}><PhoneFill /><span>Телефон:</span></p>
                liBody = <a className={c.contactBody} href={`tel:${trimPhone(cont[1])}`}> {cont[1]}  </a>
                break
            case ('email'):
                letteringInner = <p className={c.contactLettering}><EnvelopeFill /> <span>Email:</span></p>
                liBody = <a className={c.contactBody} href={`mailto:${cont[1]}`}>{cont[1]} </a>
                break
            case ('address'):
                letteringInner = <p className={c.contactLettering}><GeoAltFill /> <span>Адрес:</span></p>
                liBody = <p className={c.contactBody}> {cont[1]}</p>
                break
            case ('schedule'):
                letteringInner = <p className={c.contactLettering}><ClockFill /> <span>График работы:</span></p>
                liBody = <p className={c.contactBody}>{cont[1]} </p>
                break
            default:
                letteringInner = <p className={c.contactLettering}></p>
                liBody = <p className={c.contactBody}>{cont[1]} </p>
                break
        }

        return (<motion.li key={shortid.generate()} initial={{ opacity: 0, x: '-100%' }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 1 }}>
            {letteringInner}
            {liBody}
        </motion.li>)
    })


    return (
        <section className={`${c.contactsWr}`} id='contacts'>
            <div className={c.leftPart}>
                <div className={c.cartWrapper}>
                    <iframe src='https://yandex.ru/map-widget/v1/?um=constructor%3Af9f578758d5ce1bee274830efdbbe7ea951b55be91bf1621271c3d85ea6fa448&amp;source=constructor' width='100%' height='100%' frameBorder='0' />
                </div>
                <motion.div className={c.cartMask} animate={isOpen ? 'open' : 'closed'} variants={contactsVisible}>
                    <h2 className={`${c.smallerHeader} ${c.light}`}>Контакты</h2>

                    <ul className={c.contactsList}>
                        {contactsArrJSX}
                    </ul>

                    <motion.div className={c.hideContactsBtn} animate={isOpen ? 'open' : 'closed'} variants={btnVariants} onClick={() => toggleOpen()}>
                        <Map />
                    </motion.div>
                </motion.div>
            </div>

            <div className={`${c.rightPart}`}>
                <h2 className={`${c.smallerHeader}`}>Обратная связь</h2>

                <ContactForm />

            </div>
        </section>
    )
}

export { ContactsBlock }

