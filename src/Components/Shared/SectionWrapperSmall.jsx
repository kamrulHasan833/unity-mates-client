import PropTypes from "prop-types";
const SectionWrapperSmall = ({ children }) => {
  return <div className="max-w-small mx-6 md:mx-10 lg:mx-aut0">{children}</div>;
};

SectionWrapperSmall.propTypes = {
  children: PropTypes.node,
};

export default SectionWrapperSmall;
