import { Box, Button, CircularProgress } from "@mui/material";
import "./ContactUsForm.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import MessageModel from "../../../Models/MessageModel";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import { appConfig } from "../../../Utils/AppConfig";
import { useNavigate } from "react-router-dom";
import { ContactUsTextField } from "../ContactUsTextField/ContactUsTextField";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const theme = createTheme({ direction: 'rtl' })

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
})

export function ContactUsForm(): JSX.Element {
    const methods = useForm<MessageModel>();
    const { register, handleSubmit } = methods;
    const [isHuman, setIsHuman] = useState<boolean>(false);
    const [messageSending, setMessageSending] = useState<boolean>(false);
    const [reCaptchaLoaded, setReCaptchaLoaded] = useState<boolean>(false);
    const navigate = useNavigate();

    const send: SubmitHandler<MessageModel> = (data: MessageModel) => {
        setMessageSending(true);
        const formParams = {
            from_name: data.fullName,
            from_phone_number: data.phoneNumber,
            to_name: 'אביתר ידעי',
            message: data.message
        }

        emailjs
            .send(appConfig.emailJsServiceId,
                appConfig.emailJsTemplateId,
                formParams, {
                publicKey: appConfig.emailJsPublicKey
            })
            .then(
                () => {
                    toast.success("ההודעה נשלחה בהצלחה!");
                    methods.reset();
                    navigate("/Singer-Portfolio");
                    setMessageSending(false);
                },
                (error: any) => {
                    toast.error("אירעה שגיאה, אנא נסה שוב!");
                    setMessageSending(false);
                },
            );
    }

    return (
        <div className="ContactUsForm">
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <FormProvider {...methods}>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit(send)}
                        >
                            <ContactUsTextField
                                registerTo="fullName"
                                register={register}
                                label="שם מלא"
                            />
                            <ContactUsTextField
                                registerTo="phoneNumber"
                                register={register}
                                label="מספר טלפון"
                                type="tel"
                            />
                            <ContactUsTextField
                                registerTo="message"
                                register={register}
                                label="הודעה"
                                rows={4}
                            />
                            {!reCaptchaLoaded && (
                                <Box sx={AppComponentsStyle.circularProgress}>
                                    <CircularProgress />
                                    <span className="recaptchaContent">טוען אימות משתמש...</span>
                                </Box>
                            )}
                            <div className="recaptcha">
                                <ReCAPTCHA
                                    hl="iw"
                                    asyncScriptOnLoad={() => setReCaptchaLoaded(true)}
                                    sitekey={appConfig.recaptchaSiteKey}
                                    onChange={() => setIsHuman(true)}
                                    onErrored={() => toast.error("תקלת תקשורת, אנא נסה שוב!")}
                                    onExpired={() => setIsHuman(false)}
                                    style={AppComponentsStyle.contactUsReCAPTCHA}
                                />
                            </div>
                            <Button startIcon={messageSending && <CircularProgress color="inherit" size={25} />} disabled={!isHuman || messageSending} color="primary" variant="contained" fullWidth type="submit">{messageSending ? <span>שולח</span> : <span>שלח</span>}</Button>
                        </Box>
                    </FormProvider>
                </ThemeProvider>
            </CacheProvider>
        </div>
    );
}
