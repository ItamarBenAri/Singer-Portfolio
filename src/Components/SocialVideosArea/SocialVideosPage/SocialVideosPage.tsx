import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import { FaPlay, FaPause } from 'react-icons/fa';
import "./SocialVideosPage.css";
import video1Src from "../../../Assets/Videos/video1.mp4";
import video2Src from "../../../Assets/Videos/video2.mp4";
import video3Src from "../../../Assets/Videos/video3.mp4";
import useTitle from "../../../Utils/UseTitle";

export function SocialVideosPage(): JSX.Element {

    useTitle("אביתר ידעי 🎶 | סרטונים מהרשת");

    const videos = [
        { src: video1Src, views: "18K" },
        { src: video2Src, views: "18K" },
        { src: video3Src, views: "18K" }
    ];

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [videoStates, setVideoStates] = useState<boolean[]>(Array(videos.length).fill(false));
    const [showBubble, setShowBubble] = useState<number | null>(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handlePlayPause = (index: number) => {
        const videoElement = videoRefs.current[index];
        if (videoElement) {
            if (videoElement.paused) {
                videoElement.play();
                setVideoStates(prev => prev.map((state, i) => (i === index ? true : state)));
                setShowBubble(index);
                setTimeout(() => setShowBubble(null), 1000);
            } else {
                videoElement.pause();
                setVideoStates(prev => prev.map((state, i) => (i === index ? false : state)));
                setShowBubble(index);
                setTimeout(() => setShowBubble(null), 1000);
            }
        }
    };

    return (
        <div className="SocialVideosPage">
            <h1 className="title" data-aos="fade-in">סרטונים מהרשת</h1>
            {videos.map((video, index) => (
                <div className="video-container" key={index} data-aos="fade-up">
                    <DeviceFrameset device="iPhone X" color="black" zoom={0.6}>
                        <video
                            ref={el => (videoRefs.current[index] = el)}
                            className="video-content"
                            controls={false}
                            onClick={() => handlePlayPause(index)}
                        >
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="video-views">{video.views}</div>
                        {showBubble === index && (
                            <div className="play-pause-bubble">
                                {videoStates[index] ? <FaPause /> : <FaPlay />}
                            </div>
                        )}
                    </DeviceFrameset>
                </div>
            ))}
        </div>
    );
}
