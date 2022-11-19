import React from 'react'
import { Link } from 'react-scroll'
import { MenuToggle } from './BurgerIcon'
import c from './header.module.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

type sidebarType = {
    open: { x: number | string },
    closed: { x: number | string },
}
let sidebar: sidebarType = {
    open: { x: 0 },
    closed: { x: '-100%' },
}



const Header: React.FC<{ logo: string, label: string }> = ({ logo, label }) => {

    const [isOpen, toggleOpen] = React.useState(true);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');

        function handleShowNavbar(isSmallSize: boolean) {
            isSmallSize ? toggleOpen(false) : toggleOpen(true)
        }

        function handleShowNavbarWr(event: MediaQueryListEvent) { handleShowNavbar(event.matches) }

        handleShowNavbar(mediaQuery.matches)

        mediaQuery.addEventListener('change', handleShowNavbarWr)
        return () => { mediaQuery.removeEventListener('change', handleShowNavbarWr) }
    }, [])

    const closeMenuOnClickOnMobile= ()=>{
        if(window.innerWidth<768){
            toggleOpen(false)
        }
    }


    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });


    const { scrollY } = useScroll()
    const height = useTransform(
        scrollY,
        [0, 100],
        [80, 60]
    )



    return (
        <motion.header className={`${c.header} header`} style={{ height }}>
            <div className={c.container}>
                <div className={c.logoWrapper}>
                    {logo ? <img src={logo} alt={label} /> : <p>{label}</p>}
                </div>
                <motion.div className={c.menuWrap} animate={isOpen ? 'open' : 'closed'}>
                    <motion.nav animate={isOpen ? 'open' : 'closed'} variants={sidebar} transition={{ duration: 0.5 }}>
                        <ul className={c.navList}>
                            <li>
                                <Link activeClass={c.active} smooth={true} offset={-60} duration={500} spy={true} to='aboutUs' onClick={closeMenuOnClickOnMobile}>
                                    О нас
                                </Link>
                            </li>
                            <li>
                                <Link activeClass={c.active} smooth={true} offset={-60} duration={500} spy={true} to='zoomlionSlider' onClick={closeMenuOnClickOnMobile}>
                                    Продукция Zoomlion
                                </Link>
                            </li>
                            <li>
                                <Link activeClass={c.active} smooth={true} offset={-60} duration={500} spy={true} to='JACSlider' onClick={closeMenuOnClickOnMobile}>
                                    Техника JAC
                                </Link>
                            </li>
                            <li>
                                <Link activeClass={c.active} smooth={true} offset={-60} duration={500} spy={true} to='contacts' onClick={closeMenuOnClickOnMobile}>
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </motion.nav>

                    <MenuToggle isOpen={isOpen} toggle={() => toggleOpen(!isOpen)} />
                </motion.div>
            </div>
            <motion.div className='progress-bar' style={{ scaleX }} />
        </motion.header>
    )
}

export { Header }