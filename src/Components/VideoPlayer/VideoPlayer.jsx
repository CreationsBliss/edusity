import './VideoPlayer.css';
import video from "../../assets/college-video.mp4"

const VideoPlayer = () => {
    return (
        <section className="video-player hide">
            <video src={video} autoPlay muted controls></video>
        </section>
    );
};

export default VideoPlayer;
