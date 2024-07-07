import "./MyStoryPage.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import myStorySrc from "../../../Assets/Images/my-story.jpeg";
import useTitle from "../../../Utils/UseTitle";

export function MyStoryPage(): JSX.Element {

    useTitle("אביתר ידעי 🎶 | הסיפור שלי");

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="MyStoryPage">
            <h1 className="title" data-aos="fade-down">הסיפור שלי</h1>
            <div className="content">
                <div className="story-section" data-aos="fade-right">
                    <img src={myStorySrc} alt="My Story 1" className="story-image" />
                    <p className="story-text">
                        זהו הסיפור שלי, התחילתי את הדרך בגיל צעיר מאוד, תמיד נמשכתי למוזיקה וליצירה. כבר מגיל צעיר הייתי מחובר לצלילים ולמנגינות, והיה לי חלום לעלות על במה ולשיר את שיריי. עם הזמן, החלום הזה הפך למציאות והתחלתי לכתוב ולהלחין מוזיקה משלי. 
                    </p>
                </div>
                <h2 className="subtitle" data-aos="fade-left">התחלות</h2>
                <div className="story-section" data-aos="fade-left">
                    <p className="story-text">
                        בגיל 10 קיבלתי את הגיטרה הראשונה שלי, ומשם הכל התפתח למקומות שלא דמיינתי. בשנים האלו למדתי את יסודות המוזיקה, והתעמקתי בכלי הנגינה השונים. התשוקה שלי למוזיקה רק הלכה וגדלה עם הזמן, ובגיל הנעורים כבר הופעתי באירועים מקומיים.
                    </p>
                    <img src={myStorySrc} alt="My Story 2" className="story-image" />
                </div>
                <h2 className="subtitle" data-aos="fade-right">הופעות ראשונות</h2>
                <div className="story-section" data-aos="fade-right">
                    <img src={myStorySrc} alt="My Story 3" className="story-image" />
                    <p className="story-text">
                        ההופעה הראשונה שלי הייתה בכיתה י', זה היה הרגע שבו הבנתי שאני רוצה לעשות את זה כל חיי. התרגשתי מאוד לעמוד מול קהל ולהופיע, והאנרגיות שקיבלתי מהקהל היו מדהימות. מאז אותה הופעה, התחלתי להופיע ביותר ויותר מקומות, והחוויה הייתה פשוט נפלאה.
                    </p>
                </div>
                <h2 className="subtitle" data-aos="fade-left">קריירה מקצועית</h2>
                <div className="story-section" data-aos="fade-left">
                    <p className="story-text">
                        אחרי שירות צבאי, התחלתי להופיע ולהוציא שירים מקוריים, ופה התחילה הקריירה המקצועית שלי. התחלתי לעבוד עם מפיקים מוזיקליים ומוזיקאים מקצועיים, ולהקליט באולפנים מתקדמים. השירים שלי התחילו להתפרסם ולהיות מושמעים ברדיו, והקהל שלי הלך וגדל.
                    </p>
                    <img src={myStorySrc} alt="My Story 4" className="story-image" />
                </div>
                <h2 className="subtitle" data-aos="fade-right">שיאים והצלחות</h2>
                <div className="story-section" data-aos="fade-right">
                    <img src={myStorySrc} alt="My Story 5" className="story-image" />
                    <p className="story-text">
                        במהלך השנים זכיתי להופיע על במות גדולות ולקבל פרסים ותשבחות. ההצלחה הכי גדולה שלי הייתה להופיע מול אלפי אנשים בפסטיבלים ובאירועים גדולים, ולקבל אהבה ותמיכה מהקהל. כל זה העניק לי את הכוח להמשיך וליצור מוזיקה חדשה ולהתרגש בכל פעם מחדש מהיצירה.
                    </p>
                </div>
            </div>
        </div>
    );
}
