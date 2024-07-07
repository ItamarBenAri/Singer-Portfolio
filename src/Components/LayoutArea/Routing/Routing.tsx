
import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "../page404/page404";
import { HomePage } from "../../HomeArea/HomePage/HomePage";
import { MyStoryPage } from "../../MyStoryArea/MyStoryPage/MyStoryPage";
import { ShowsPage } from "../../ShowsArea/ShowsPage/ShowsPage";
import { SocialVideosPage } from "../../SocialVideosArea/SocialVideosPage/SocialVideosPage";
import { ContactUsPage } from "../../ContactUsArea/ContactUsPage/ContactUsPage";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                {/* App Routes */}
                <Route path="/home" element={<HomePage />} />
                <Route path="/my-story" element={<MyStoryPage />} />
                <Route path="/shows" element={<ShowsPage />} />                
                <Route path="/social-media-videos" element={<SocialVideosPage />} />
                <Route path="/contact-me" element={<ContactUsPage />} />

                {/* Default Route: */}
                <Route path="/" element={<Navigate to="/home" />} />

                {/* Page not found routes: */}
                <Route path="/pageNotFound" element={<Page404 />} />
                <Route path="*" element={<Page404 />} />

            </Routes>

        </div>
    );
}

export default Routing;
