import { useLayoutEffect } from "react";
import { ScrollToTop } from "../components/scroll_to_top/ScrollToTop";
// import { HeaderOne } from "../components/headers/HeaderOne";
// import { FooterOne } from "../components/footers/FooterOne";
import { HeaderTwo } from "../components/headers/HeaderTwo";
import { FooterTwo } from "../components/footers/FooterTwo";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
// import { HeaderThree } from "../components/headers/HeaderThree";
// import { FooterThree } from "../components/footers/FooterThree";
// import { HeaderFour } from "../components/headers/HeaderFour";
// import { FooterFour } from "../components/footers/FooterFour";
// import { HeaderFive } from "../components/headers/HeaderFive";
// import { FooterFive } from "../components/footers/FooterFive";
// import { HeaderSix } from "../components/headers/HeaderSix";
// import { FooterSix } from "../components/footers/FooterSix";
// import { HeaderSeven } from "../components/headers/HeaderSeven";
// import { FooterSeven } from "../components/footers/FooterSeven";
// import { HeaderEight } from "../components/headers/HeaderEight";
// import { FooterEight } from "../components/footers/FooterEight";
// import { HeaderNine } from "../components/headers/HeaderNine";
import { Breadcrumb } from "../components/breadcrumb/Breadcrumb";

export const Layout = ({
  children,
  header = 9,
  footer = 1,
  bodyClass,
  breadcrumbTitle,
  breadcrumbSubtitle,
}) => {
  const { pathname } = useLocation();

  // theme
  useLayoutEffect(() => {
    document.body.classList.add(bodyClass);

    return () => document.body.classList.remove(bodyClass);
  }, [bodyClass, pathname]);

  return (
    <>
      {/* scroll to top */}
      <ScrollToTop />

      {/* header */}
      {header === 1 && <HeaderTwo />}
      {header === 2 && <HeaderTwo />}
      {header === 3 && <HeaderTwo />}
      {header === 4 && <HeaderTwo />}
      {header === 5 && <HeaderTwo />}
      {header === 6 && <HeaderTwo />}
      {header === 7 && <HeaderTwo />}
      {header === 8 && <HeaderTwo />}
      {header === 9 && <HeaderTwo />}

      {/* breadcrumb */}
      {breadcrumbTitle && (
        <Breadcrumb title={breadcrumbTitle} subtitle={breadcrumbSubtitle} />
      )}

      {children}

      {/* footer */}
      {footer === 1 && <FooterTwo />}
      {footer === 2 && <FooterTwo />}
      {footer === 3 && <FooterTwo />}
      {footer === 4 && <FooterTwo />}
      {footer === 5 && <FooterTwo />}
      {footer === 6 && <FooterTwo />}
      {footer === 7 && <FooterTwo />}
      {footer === 8 && <FooterTwo />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  header: PropTypes.number,
  footer: PropTypes.number,
  bodyClass: PropTypes.string,
  breadcrumbTitle: PropTypes.string,
  breadcrumbSubtitle: PropTypes.string,
};
