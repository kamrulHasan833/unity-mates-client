import PropTypes from "prop-types";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const SuccessCount = ({ count }) => {
  const { size, title } = count;

  return (
    <div className=" text-center bg-secondary-color text-white p-10 ">
      <VisibilitySensor>
        {({ isVisible }) => (
          <div className="flex flex-col gap-3 ">
            {isVisible ? (
              <CountUp
                end={size}
                duration={3}
                className="text-6xl"
                suffix="+"
              ></CountUp>
            ) : (
              ""
            )}
            <span className="capitalize ">{title} </span>
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
};

SuccessCount.propTypes = {
  count: PropTypes.object,
};

export default SuccessCount;
