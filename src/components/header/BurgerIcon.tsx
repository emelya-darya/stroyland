import { motion } from "framer-motion";
import c from './header.module.scss'

type pathClosedOpenProp = {
    d?: string,
    opacity?: number
}

type pathPropsType = {
    variants: {
        closed: pathClosedOpenProp,
        open: pathClosedOpenProp
    },
    transition?: { duration: number }
    d?: string
}

const Path: React.FC<pathPropsType> = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="#1C488D"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle: React.FC<{ toggle: () => void, isOpen: boolean }> = ({ toggle }) => (
    <button onClick={toggle} className={c.burgerBtn}>
        <svg viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);

export { MenuToggle }