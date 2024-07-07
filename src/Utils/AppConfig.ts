class AppConfig {
    public readonly recaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
    public readonly recaptchaSiteSecret = process.env.REACT_APP_RECAPTCHA_SITE_SECRET;
    public readonly emailJsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    public readonly emailJsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    public readonly emailJsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
}

export const appConfig = new AppConfig();
