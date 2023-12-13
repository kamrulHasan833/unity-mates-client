import usePlay from "../../hooks/usePlay";
import MiniPlayer from "./MiniPlayer";

const VideoModal = () => {
  const { handlePlay } = usePlay();
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box rounded-none max-w-[335px] md:max-w-[704px] lg:max-w-[944px] xl:max-w-7xl max-h-[188.4375px]  md:max-h-[396px] lg:max-h-[531px] xl:max-h-[720px] h-full p-0 ">
        <MiniPlayer />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => handlePlay(false)}>close</button>
      </form>
    </dialog>
  );
};

export default VideoModal;
