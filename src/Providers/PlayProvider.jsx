import PropTypes from "prop-types";
import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const playContext = createContext(null);

const PlayProvider = ({ children }) => {
  const [play, setPlay] = useState(false);
  const handlePlay = (isPlay) => {
    setPlay(isPlay);
  };

  return (
    <playContext.Provider value={{ play, handlePlay }}>
      {children}
    </playContext.Provider>
  );
};
PlayProvider.propTypes = {
  children: PropTypes.node,
};
export default PlayProvider;
