import PropTypes from "prop-types";
import StatBox from "./StatBox";

const StatsBoxes = ({ stats }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
      {stats.map((stat, idx) => (
        <StatBox key={idx} stat={stat} />
      ))}
    </div>
  );
};

StatsBoxes.propTypes = {
  stats: PropTypes.array,
};

export default StatsBoxes;
