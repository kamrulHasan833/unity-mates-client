import PropTypes from "prop-types";
const SectionWrapperSmall = ({ children }) => {
  return (
    <div className="max-w-small mx-6 md:mx-10 lg:mx-auto pt-10 md:pt-14 pb-10 md:pb-14">
      {children}
    </div>
  );
};

SectionWrapperSmall.propTypes = {
  children: PropTypes.node,
};

export default SectionWrapperSmall;
