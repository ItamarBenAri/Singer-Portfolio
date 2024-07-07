import "./HomePage.css";
import profileImageSrc from "../../../Assets/Images/profile.jpeg"
import { NavLink } from "react-router-dom";
import { ContactMail } from "@mui/icons-material";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import useTitle from "../../../Utils/UseTitle";

export function HomePage(): JSX.Element {

    useTitle("אביתר ידעי 🎶 | דף הבית");

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    
    return (
        <div className="HomePage" data-aos="fade-up">
            <div className="imageContainer" >
                <img src={profileImageSrc} alt="Singer profile" />
            </div>
            <div className="describing">אומן / זמר / יוצר / מלחין / זמר / יוצר / מלחין / זמר / יוצר / מלחין</div>
            <div className="myName">אביתר ידעי</div>
            <NavLink to="/contact-me" className="menu-link"><ContactMail sx={AppComponentsStyle.btnIcon} /> צור קשר</NavLink>
        </div>
    );
}
