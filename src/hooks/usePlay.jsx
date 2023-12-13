import { useContext } from "react";
import { playContext } from "../Providers/PlayProvider";

const usePlay = () => {
  const playInfo = useContext(playContext);
  return playInfo;
};
export default usePlay;
