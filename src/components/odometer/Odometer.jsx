
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

export const Odometer = ({ end, suffix, prefix, className = "odometer" }) => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  return (
    <span ref={ref} className={"odometer " + className}>
      <CountUp
        end={!inView ? 0 : end}
        suffix={suffix}
        prefix={prefix}
        separator=""
      />
    </span>
  );
};

Odometer.propTypes = {
  end: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  suffix: PropTypes.string,
  prefix: PropTypes.string,
  className: PropTypes.string,
};
