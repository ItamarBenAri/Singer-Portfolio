import "./SocialMediaLinks.css";
import { TiktokIcon } from "../../SharedArea/IconsArea/TiktokIcon/TiktokIcon";
import Link from "@mui/material/Link";
import { YouTube, Facebook, Instagram } from "@mui/icons-material";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import { Divider } from "@mui/material";

export function SocialMediaLinks(): JSX.Element {
    return (
        <div className="SocialMediaLinks">
            <div className="divider">
                <Divider variant="middle" />
            </div>
            <Link href="https://www.youtube.com/results?search_query=%D7%99%D7%A8%D7%95%D7%9F+%D7%93%D7%9E%D7%90%D7%A8%D7%99"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={AppComponentsStyle.copyrightsLink}
            >
                <YouTube />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100044136550811"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={AppComponentsStyle.copyrightsLink}
            >
                <Facebook />
            </Link>
            <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={AppComponentsStyle.copyrightsLink}
            >
                <Instagram />
            </Link>
            <Link
                href="https://www.tiktok.com/explore?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={AppComponentsStyle.copyrightsLink}
            >
                <TiktokIcon />
            </Link>
        </div>
    );
}
