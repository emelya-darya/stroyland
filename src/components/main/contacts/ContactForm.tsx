import React from 'react'
import { Typography, Button, ButtonProps, Checkbox, FormControlLabel, TextField, Box, Container, Stack, InputAdornment } from '@mui/material'
import { styled } from '@mui/material/styles';
import { X, PersonCircle, EnvelopeFill, ChatDotsFill, PhoneFill } from 'react-bootstrap-icons'
import { motion, useCycle } from 'framer-motion'
import { useForm } from 'react-hook-form'

import c from './contactsBlock.module.scss'

type ValuesFromFOSType = {
    name: string,
    email: string,
    phone: boolean,
    message: string,
    userAgree: boolean
}

const regEmail: RegExp = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const regPhone: RegExp = /^[\d\(\)\-\s\+]{7,20}$/  


const CssTextField = styled(TextField)({
    '& label': { color: '#1C488D', },
    '&:hover label': { color: '#000', },
    '& label.Mui-focused': { color: '#41C8F4', },

    '& label.Mui-error': { color: '#D32F2F' },

    '& .MuiInput-underline:after': { borderBottomColor: '#1C488D', },

    '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: '#1C488D', },
        '& .MuiInputAdornment-root svg': { fill: '#1C488D', },

        '&:hover fieldset': { borderColor: '#000', },
        '&:hover .MuiInputAdornment-root svg': { fill: '#000', },

        '&.Mui-focused fieldset': { borderColor: '#41C8F4', },
        '&.Mui-focused .MuiInputAdornment-root svg': { fill: '#41C8F4', },

        '&.Mui-error fieldset': { borderColor: '#D32F2F', },
        '&.Mui-error .MuiInputAdornment-root svg': { fill: '#D32F2F', },
    },
});

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#1C488D'),
    backgroundColor: '#1C488D',
    borderRadius: '0px',
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'none',
    padding: '12px 40px',
    '&:hover': {
        backgroundColor: '#41C8F4',
    },
    '&.Mui-disabled': {
        backgroundColor: '#1C488D',
        fontWeight: 600,
        color: '#fff',
        opacity: '.7',
    }
}));

const modalSuccVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: { restDelta: 2 }
    },
    closed: {
        y: '110%',
        opacity: 0,
        transition: { restDelta: 2 }
    }
};

const svgStyle = { width: '18px', height: '18px' }


const ContactForm = () => {

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm<ValuesFromFOSType>({ mode: 'onChange' })

    let [userAgreeVal, setUserAgreeVal] = React.useState({ userAgree: true })

    const onChangeUserAgree = (e: React.SyntheticEvent) => {
        setUserAgreeVal({ userAgree: !userAgreeVal.userAgree })
    }

    const onSubmit = (data: ValuesFromFOSType) => {  // в data придут все поля с именами и значениями

        const showFormatData = {
            Имя: data.name,
            Почта: data.email,
            Телефон: data.phone,
            Сообщение: data.message,
        }
        console.log(showFormatData)
        toggleOpenSuccModal()

        setTimeout(() => {
            toggleOpenSuccModal()
        }, 3000)
        reset()
    }

    const [isOpenSuccModal, toggleOpenSuccModal] = useCycle(false, true);


    return (
        <>
            <Box component='form' className={c.formContainer} onSubmit={handleSubmit(onSubmit)}>

                <Container className={c.nameInpWrap}>

                    <CssTextField className={c.nameInp} fullWidth margin='normal' variant='outlined'
                        label='Ваше имя' required
                        {...register('name', { required: true, minLength: 3 })}
                        error={Boolean(errors?.name)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <PersonCircle style={svgStyle} />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Typography className={c.nameErr}>
                        {errors?.name && 'Укажите свое имя (минимальная длина 3 символа)'}
                    </Typography>

                </Container>


                <Stack direction='row' className={c.emailPhoneRow} >

                    <Container className={c.emailInpWrap}>
                        <CssTextField fullWidth className={c.emailInp} variant='outlined' margin='normal'
                            label='Ваша почта' required
                            {...register('email',
                                {
                                    required: true,
                                    validate: v => regEmail.test(String(v).toLowerCase()),
                                })}
                            error={Boolean(errors?.email)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <EnvelopeFill style={svgStyle} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Typography className={c.emailErr}>
                            {errors?.email && 'Поле не заполнено или email некорректный'}
                        </Typography>

                    </Container>


                    <Container className={c.phoneInpWrap}>
                        <CssTextField fullWidth margin='normal' variant='outlined' className={c.phoneInp}
                            label='Ваш телефон' required
                            {...register('phone',
                                {
                                    required: true, maxLength: 20, minLength: 7,
                                    validate: v => regPhone.test(String(v)),
                                })}
                            error={Boolean(errors?.phone)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <PhoneFill style={svgStyle} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Typography className={c.phoneErr}>
                            {errors?.phone && 'Введите корректный номер телефона'}
                        </Typography>
                    </Container>
                </Stack>

                <Container className={c.messageInpWrap}>

                    <CssTextField variant='outlined' fullWidth margin='normal' className={c.messageInp}
                        multiline rows={8} label='Ваше сообщение' required
                        {...register('message', { required: true, minLength: 10, })}
                        error={Boolean(errors?.message)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start' sx={{ alignSelf: 'flex-start', mt: '8px' }}>
                                    <ChatDotsFill style={svgStyle} />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Typography className={c.messageErr}>
                        {errors?.message && 'Минимальная длина сообщения 10 символов'}
                    </Typography>
                </Container>

                <Container className={c.userAgreeInpWrap}>
                    <FormControlLabel className={c.userAgreeCheckbox}
                        sx={{
                            '& span.Mui-checked svg': { color: '#1C488D' },
                            '& span': { color: userAgreeVal.userAgree ? '#1C488D' : '#D32F2F' }
                        }}
                        value={true} required
                        control={<Checkbox defaultChecked />}
                        label='Я согласен с условиями пользовательского соглашения'
                        labelPlacement='end'
                        {...register('userAgree')}

                        onChange={onChangeUserAgree}
                    />
                </Container>

                <Container className={c.btnWrap}>
                    <StyledButton className={c.sendBtn}
                        variant='contained' size='large'
                        disabled={!isValid || !userAgreeVal.userAgree}
                        type='submit'
                    >
                        Отправить
                    </StyledButton>
                </Container>

            </Box>


            <Box className={c.succesPopup} component={motion.div} animate={isOpenSuccModal ? 'open' : 'closed'} variants={modalSuccVariants}>
                <X onClick={() => { toggleOpenSuccModal() }} />
                <Typography>Сообщение успешно отправлено в консоль</Typography>
            </Box>
        </>

    )
}

export { ContactForm }