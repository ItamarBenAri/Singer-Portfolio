import "./ShowsPage.css";
import { useEffect, useState } from "react";
import telAvivShowSrc from "../../../Assets/Images/tel-aviv-show.jpg";
import ganSakerShowSrc from "../../../Assets/Images/gan-saker-show.jpg";
import haifaShowSrc from "../../../Assets/Images/haifa-show.jpg";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import 'aos/dist/aos.css';
import AOS from 'aos';
import useTitle from "../../../Utils/UseTitle";

interface Show {
    date: string;
    location: string;
    description: string;
    image: string;
}

const shows: Show[] = [
    { date: "2024-07-15", location: "תל אביב, ישראל", description: "הופעה חיה בזירת תל אביב", image: telAvivShowSrc },
    { date: "2024-08-05", location: "ירושלים, ישראל", description: "הופעה חיצונית בגן סאקר", image: ganSakerShowSrc },
    { date: "2024-09-10", location: "חיפה, ישראל", description: "אירוע צדקה באודיטוריום חיפה", image: haifaShowSrc }
];

export function ShowsPage(): JSX.Element {
    
    useTitle("אביתר ידעי 🎶 | הופעות קרובות");

    const [upcomingShows, setUpcomingShows] = useState<Show[]>([]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        setUpcomingShows(shows);
    }, []);

    return (
        <div className="ShowsPage" data-aos="fade-up">
            <h1 className="title">הופעות קרובות</h1>
            <div className="content">
                {upcomingShows.length > 0 ? (
                    upcomingShows.map((show, index) => (
                        <div key={index} className="show-card" >
                            <img src={show.image} alt={`Show at ${show.location}`} className="show-image" />
                            <div className="show-details">
                                <div className="show-date">{show.date}</div>
                                <div className="show-location">{show.location}</div>
                                <div className="show-description">{show.description}</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-shows"  data-aos="fade-up" >
                        <EventAvailableIcon className="no-shows-icon" />
                        <div className="no-shows-text">אין הופעות קרובות כרגע</div>
                        <div className="no-shows-subtext">חזרו בקרוב למידע נוסף על הופעות עתידיות!</div>
                    </div>
                )}
            </div>
        </div>
    );
}
