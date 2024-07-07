import { ArrowCircleUp } from "@mui/icons-material";
import "./ScrollToUp.css";
import { useEffect, useState } from "react";

export function ScrollToUp(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) setIsVisible(true);
        else setIsVisible(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <div className={`ScrollToUp ${isVisible ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
			<ArrowCircleUp fontSize="large"/>
        </div>
    );
}
