
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";
import PropTypes from "prop-types";

export const VideoPlayer = ({ trigger, src }) => {
  return (
    <>
      <Popup
        trigger={trigger}
        position=""
        modal={true}
        contentStyle={{ width: "80%", maxWidth: 1920 }}
        lockScroll
      >
        <Iframe
          url={src ?? "https://www.youtube.com/embed/rRid6GCJtgc"}
          width="100%"
          height="400px"
          id=""
          className=""
          display="block"
          position="relative"
        />
      </Popup>
    </>
  );
};

VideoPlayer.propTypes = {
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  src: PropTypes.string,
};
