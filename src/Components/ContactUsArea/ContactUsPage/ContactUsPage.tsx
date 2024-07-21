import { useEffect } from "react";
import useTitle from "../../../Utils/UseTitle";
import { ContactUsForm } from "../ContactUsForm/ContactUsForm";
import "./ContactUsPage.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function ContactUsPage(): JSX.Element {
    useTitle("אביתר ידעי 🎶 | צור קשר");
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="ContactUsPage" data-aos="fade-up">
            <h1 className="title" data-aos="fade-in">צור קשר</h1>
            <ContactUsForm />
        </div>
    );
}
