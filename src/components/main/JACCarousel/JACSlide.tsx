import React from 'react'
import shortid from 'shortid'
import { motion } from 'framer-motion'
import { BoxSeamFill, TicketDetailedFill, FuelPumpFill, Bezier, ArrowRight, X } from 'react-bootstrap-icons'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import type { JACItemType } from '../../../redux/JACReducer'
import nophoto from '../../../assets/img/nophoto.webp'
import c from './JACCarousel.module.scss'


const iconStyle = { width: '15px', height: '15px' }

const style = {
    boxShadow: 24,
    p: 4,
}

const JACSlide: React.FC<{ itemData: JACItemType }> = ({ itemData }) => {
    console.log(itemData)

    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)


    const charactersList = Object.entries(itemData.characters).map(char => {

        let icon: JSX.Element

        switch (char[0]) {
            case ('Грузоподъёмность'): icon = <BoxSeamFill style={iconStyle} />
                break
            case ('Объем двигателя'): icon = <TicketDetailedFill style={iconStyle} />
                break
            case ('Объем кузова'): icon = <FuelPumpFill style={iconStyle} />
                break
            default: icon = <Bezier style={iconStyle} />
        }
        return (<li key={shortid.generate()} >
            <div>
                {icon}
                <span>{char[0]}:</span>
            </div>
            <span>{char[1]}</span>
        </li>)
    })

    const charactersListCopy = [...charactersList]
    charactersListCopy.length = 3

    return (
        <>
            <div className={c.itemName}>
                <h3>{itemData.name}</h3>
            </div>
            <div className={c.imgWrapper}>
                <motion.img src={itemData.photo ? itemData.photo : nophoto} whileHover={{ scale: 1.1 }} />
            </div>
            <ul className={c.charactersList}>
                {charactersListCopy}
            </ul>
            <div className={c.showAll} onClick={handleOpen}>
                <span>Больше характеристик</span>  <ArrowRight />
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={c.modalBox}>
                    <X onClick={handleClose} />

                    <div className={c.modalTopPart}>
                        <div className={c.modalTopLeftPart}>
                            <div className={c.modalImgWraper}>
                                <img src={itemData.photo ? itemData.photo : nophoto} />
                            </div>
                        </div>

                        <div className={c.modalTopRightPart}>
                            <h3 className={c.name}>
                                {itemData.name}
                            </h3>
                            <p className={c.weight}>
                                {itemData.weight}
                            </p>
                            <p className={c.descriptionTitle}>Описание:</p>
                            <p className={c.description}>
                                {itemData.description}
                            </p>

                            <div className={c.priceBlock}>
                                <p className={c.priceTitle}>Цена:</p>
                                <p className={c.price}>{itemData.price}</p>
                            </div>


                          
                        </div>
                    </div>





                    <ul className={`${c.charactersList} ${c.modalCharactersList}`}>
                        {charactersList}
                    </ul>
                </Box>
            </Modal>
        </>
    )
}

export { JACSlide }