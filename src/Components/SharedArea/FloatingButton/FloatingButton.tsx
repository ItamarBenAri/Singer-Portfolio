import "./FloatingButton.css";
import { Action, Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { Add, Call, Sms, WhatsApp } from "@mui/icons-material";
import { useState } from "react";

export function FloatingButton(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const sendMessageText = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="FloatingButton">
            <Fab
                mainButtonStyles={{ backgroundColor: "#1976D2" }}
                style={{ bottom: 84, right: -35 }}
                icon={<div className="iconWrapper" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <Add fontSize="large" /> : <Sms sx={{ transform: "scaleX(-1)" }} />}</div>}
                text={isOpen ? "סגור" : "צור קשר"}
                event="click"
            >
                <a href="https://wa.me/50-272-7183?text=שלום!+הגעתי+מהאתר,+אשמח+לפרטים" rel="noreferrer" target="_blank" onClick={sendMessageText}>
                    <Action
                        about="שלח הודעת טקסט בוואצפ"
                        text="ווצאפ"
                        style={{ backgroundColor: "#25D366", marginRight: "45px" }}
                    >
                        <WhatsApp fontSize="large" />
                    </Action>
                </a>
                <a href="tel:050-272-7183" rel="noreferrer" target="_blank" onClick={sendMessageText}>
                    <Action
                        about="התקשר בשיחת טלפון"
                        text="טלפון"
                        style={{ backgroundColor: "rgb(25, 118, 210)", marginRight: "45px" }}
                        onClick={sendMessageText}
                    >
                        <Call fontSize="large" />
                    </Action>
                </a>
            </Fab>
        </div>
    );
}
