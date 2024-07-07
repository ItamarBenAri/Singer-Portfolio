import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "./Copyrights.css";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";

function Copyrights(): JSX.Element {
    return (
        <div className="Copyrights">
            <Box sx={AppComponentsStyle.copyrightsBox}>
                <Typography variant="body2" color="text.secondary" align="center">
                    {"© "} {new Date().getFullYear()} {"איתמר בן ארי, ישראל. כל הזכויות שמורות."}
                </Typography>
            </Box>
        </div>
    );
}

export default Copyrights;