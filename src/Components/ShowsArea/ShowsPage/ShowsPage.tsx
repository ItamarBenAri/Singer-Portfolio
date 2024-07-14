import "./ShowsPage.css";
import { useEffect, useState } from "react";
import myStorySrc from "../../../Assets/Images/my-story.jpeg";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import 'aos/dist/aos.css';
import AOS from 'aos';
import useTitle from "../../../Utils/UseTitle";
import ShowModel from "../../../Models/ShowModel";

export function ShowsPage(): JSX.Element {
    
    useTitle("אביתר ידעי 🎶 | הופעות קרובות");
    
    const shows: ShowModel[] = [
        { date: "2024-07-15", location: "תל אביב, ישראל", description: "הופעה חיה בזירת תל אביב", image: myStorySrc },
        { date: "2024-08-05", location: "ירושלים, ישראל", description: "הופעה חיצונית בגן סאקר", image: myStorySrc },
        { date: "2024-09-10", location: "חיפה, ישראל", description: "אירוע צדקה באודיטוריום חיפה", image: myStorySrc }
    ];

    const [upcomingShows, setUpcomingShows] = useState<ShowModel[]>([]);

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
