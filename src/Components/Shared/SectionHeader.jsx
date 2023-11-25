import PropTypes from "prop-types";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="pt-14 md:pt-20 pb-6 md:pb-8">
      <h3 className="text-2xl md:text-3xl pb-1 md:pb-2 lg:text-4xl font-semibold capitalize">
        {title}
      </h3>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionHeader;
