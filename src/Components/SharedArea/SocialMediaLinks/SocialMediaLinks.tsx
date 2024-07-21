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
            <Link href="http://www.youtube.com/@user-in1pv7lh1v"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={AppComponentsStyle.copyrightsLink}
            >
                <YouTube />
            </Link>
            <Link href="https://www.facebook.com/evyatar.yadaie"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={AppComponentsStyle.copyrightsLink}
            >
                <Facebook />
            </Link>
            <Link
                href="https://www.instagram.com/evyatar_yadaie_"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={AppComponentsStyle.copyrightsLink}
            >
                <Instagram />
            </Link>
            <Link
                href="https://www.tiktok.com/@evyatar_yadaie"
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
