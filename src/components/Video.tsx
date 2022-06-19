import React, { FC, useRef, useEffect, DetailedHTMLProps, VideoHTMLAttributes } from "react";
import Hls from "hls.js";

const VideoPlayer: FC<DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>> = (props) => {

    const video = useRef<HTMLVideoElement>(null);

    useEffect(() => {

        if (!video.current)
            return;

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource("http://localhost:3000/assets/test.m3u8");
            hls.attachMedia(video.current);
        }
        else if (video.current.canPlayType("application/vnd.apple.mpegurl")) {
            video.current.src = "http://localhost:3000/assets/test.m3u8";
        }
    }, []);

    return (
        <div>
            <video
                ref={ video } autoPlay muted { ...props }
            />
        </div>
    );
};
export default VideoPlayer;
