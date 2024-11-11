import videoSrc from '../assets/operator-hero-v4.mp4';

function VideoSec() {
  return (
    <div>
      <video width="100%" height="auto" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoSec;
