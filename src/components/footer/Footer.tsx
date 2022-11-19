import React from 'react'
import shortid from 'shortid'
import { Eye, X } from 'react-bootstrap-icons'
import { Box, Typography, Modal } from '@mui/material'

import c from './footer.module.scss'


const style = { boxShadow: 24, p: 4, }

const Footer: React.FC<{ userAgree: Array<string>, copyright: string }> = ({ userAgree, copyright }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const userAgreeJSX = userAgree.map(par => <p key={shortid.generate()}>{par}</p>)

    return (
        <footer className={`${c.footer} footer`}>
            <div className={c.container}>
                <div className={c.userAgreeBtn} onClick={handleOpen}>
                    <Eye />
                    <span>Пользовательское соглашение</span>
                </div>
                <div className={c.copyright}>
                    {copyright}
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style} className={c.modalUserAgree}>
                    <X onClick={handleClose}/>
                    <Typography variant="h5" component="h3" className={c.userAgreeTitle}>
                        Условия пользовательского соглашения
                    </Typography>
                    <Typography sx={{ mt: 2 }} component="div">
                        {userAgreeJSX}
                    </Typography>
                </Box>
            </Modal>
        </footer>
    )
}

export { Footer }