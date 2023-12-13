import ReactPlayer from "react-player";
import usePlay from "../../hooks/usePlay";
const MiniPlayer = () => {
  const { play } = usePlay();

  const videoURL = `https://www.youtube.com/watch?v=gaKiJE2C8Tk`;

  return (
    <>
      <div className={` h-full`}>
        {play && (
          <ReactPlayer
            width="100%"
            height="100%"
            className="marriage-player"
            url={videoURL}
            playing={play}
            controls={true}
          />
        )}
      </div>
    </>
  );
};

export default MiniPlayer;
