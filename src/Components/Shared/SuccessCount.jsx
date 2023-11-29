import PropTypes from "prop-types";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const SuccessCount = ({ count }) => {
  const { size, title } = count;

  return (
    <div className=" text-center bg-secondary-color text-white p-6 ">
      <VisibilitySensor>
        {({ isVisible }) => (
          <div>
            {isVisible ? (
              <CountUp start={0} end={size} duration={1} suffix="+">
                {({ countUpRef }) => (
                  <div>
                    <span className="text-4xl font-bold" ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            ) : (
              ""
            )}
            <span className="capitalize">{title} </span>
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
