
import { Link } from "react-router-dom";
import footerLogo from "/footer.png";

export const FooterTwo = () => {
  return (
    <footer className="td_footer td_style_1 td_color_1">
      <div className="container">
        <div className="td_footer_row">
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <div className="td_footer_text_widget td_fs_18">
                <img src={footerLogo} alt="Logo" />
                <p>
                  We are a socio-economic legal edtech venture. Want us to tell your story or collaborate? Email us now.
                </p>
              </div>
              <ul className="td_footer_address_widget td_medium td_mp_0">
                <li>
                  <i className="fa-solid fa-phone-volume"></i>
                  <a href="tel:+919057240576">+91 90572 40576</a>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:parth@fglawkit.com">parth@fglawkit.com</a>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Jaipur, Rajasthan, 302019
                </li>
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Navigate
              </h2>
              <ul className="td_footer_widget_menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/case-briefs">Case Brief</Link>
                </li>
                <li>
                  <Link to="/case-material">Du Case Mat</Link>
                </li>
                <li>
                  <Link to="/previous-year-questions">PYQ</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Courses
              </h2>
              <ul className="td_footer_widget_menu">
                <li>
                  <Link to="/course-details">Business Coach</Link>
                </li>
                <li>
                  <Link to="/course-details">Development Coach</Link>
                </li>
                <li>
                  <Link to="/course-details">Testimonials</Link>
                </li>
                <li>
                  <Link to="/course-details">Seo Optimization</Link>
                </li>
                <li>
                  <Link to="/course-details">Web design</Link>
                </li>
                <li>
                  <Link to="/course-details">Life Coach</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Our Policies
              </h2>
              {/* <div className="td_newsletter td_style_1">
                <p className="td_mb_20 td_opacity_7">
                  Far far away, behind the word mountains, far from the
                  Consonantia.
                </p>
                <form action="#" className="td_newsletter_form">
                  <input
                    type="email"
                    className="td_newsletter_input"
                    placeholder="Email address"
                  />
                  <button
                    type="submit"
                    className="td_btn td_style_1 td_radius_30 td_medium"
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Subscribe</span>
                    </span>
                  </button>
                </form>
              </div> */}
              <ul className="td_footer_widget_menu">
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/refund-policy">Refund Policy</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/shipping-policy">Shipping Policy</Link>
                </li>
                
              </ul>
              
            </div>
          </div>
        </div>
      </div>
      <div className="td_footer_bottom td_fs_18">
        <div className="container">
          <div className="td_footer_bottom_in">
            <p className="td_copyright mb-0">
              Copyright FG Lawkit | All Right Reserved
            </p>
            <div className="td_footer_social_btns td_fs_20">
                <a href="https://www.youtube.com/@fglawkit" className="td_center">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                {/* <a href="#" className="td_center">
                  <i className="fa-brands fa-x-twitter"></i>
                </a> */}
                <a href="https://www.instagram.com/fg_lawkit?igsh=MWxud3p3YW5qa21mMw==" className="td_center">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                {/* <a href="#" className="td_center">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a> */}
              </div>
            {/* <ul className="td_footer_widget_menu">
              <li>
                <Link to="#"> Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Refund Policy</Link>
              </li>
              
            </ul>
            <ul className="td_footer_widget_menu">
              
              <li>
                <Link to="#"> Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Shipping Policy</Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
