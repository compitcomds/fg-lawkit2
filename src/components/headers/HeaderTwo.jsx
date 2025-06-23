
import { Link } from "react-router-dom";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";
import { HeaderSearch } from "./HeaderSearch";

import callIcon from "../../assets/img/icons/call.svg";
import envelopeIcon from "../../assets/img/icons/envlop.svg";

import logoV2 from "/logo.webp";

export const HeaderTwo = () => {
  useMobilemenu();
  useStickyHeader();

  return (
    <header className="td_site_header td_style_1 td_type_2 td_sticky_header td_medium td_heading_color">
      <div className="td_top_header td_heading_bg td_white_color">
        <div className="container">
          <div className="td_top_header_in">
            <div className="td_top_header_left">
              <ul className="td_header_contact_list td_mp_0 td_normal">
                <li>
                  <img src={callIcon} alt="" />
                  <span>
                    Call: <a href="tel:9057240576">+91 90572 40576</a>
                  </span>
                </li>
                <li>
                  <img src={envelopeIcon} alt="" />
                  <span>
                    Email:
                    <a href="mailto:parth@fglawkit.com">parth@fglawkit.com</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="td_top_header_right">
              <div className="td_hero_icon_btns position-relative">
                <div className="position-relative">
                  <HeaderSearch />
                </div>
                <a href="https://www.instagram.com/fg_lawkit?igsh=MWxud3p3YW5qa21mMw==">
                <button className="td_circle_btn td_center" type="button">                 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>  
                </button></a>
                <a href="https://www.youtube.com/@fglawkit">
                <button className="td_circle_btn td_center" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_main_header">
        <div className="container">
          <div className="td_main_header_in">
            <div className="td_main_header_left">
              <Link to="/" className="td_site_branding">
                <img src={logoV2} alt="Logo" />
              </Link>
            </div>
            <div className="td_main_header_center">
              <nav className="td_nav">
                <div className="td_nav_list_wrap">
                  <div className="td_nav_list_wrap_in">
                    <ul className="td_nav_list">
                      <li>
                        <Link to="/">Home</Link>
                        {/* <ul>
                          <li>
                            <Link to="/">University</Link>
                          </li>
                          <li>
                            <Link to="/home-v2">Online Educations</Link>
                          </li>
                          <li>
                            <Link to="/home-v3">Education</Link>
                          </li>
                          <li>
                            <Link to="/home-v4">Kindergarten</Link>
                          </li>
                          <li>
                            <Link to="/home-v5">Modern Language</Link>
                          </li>
                          <li>
                            <Link to="/home-v6">Al-Quran Learning</Link>
                          </li>
                          <li>
                            <Link to="/home-v7">Motivation Speaker</Link>
                          </li>
                          <li>
                            <Link to="/home-v8">Kitchen Coach</Link>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <Link to="/courses">Courses & Mocks</Link>
                        
                      </li>
                      {/* <li>
                        <Link to="/about">About</Link>
                      </li> */}
                      <li>
                        <Link to="/case-briefs">Case Briefs</Link>
                        
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Pages</Link>
                        <ul>
                          <li>
                            <Link to="/case-material">DU Casemat</Link>
                          </li>
                          <li>
                            <Link to="/previous-year-questions">PYQ(Previous Year Question) Papers</Link>
                          </li>
                          
                        </ul>
                      </li>
                      {/* <li className="menu-item-has-children">
                        <Link to="#">Blogs</Link>
                        <ul>
                          <li>
                            <Link to="/blog">Blogs</Link>
                          </li>
                          <li>
                            <Link to="/blog-with-sidebar">
                              Blog With Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                        </ul>
                      </li> */}
                      <li className="menu-item-has-children">
                        <Link to="/contact">Contact</Link>
                        <ul>
                          <li>
                            <Link to="/join-us">Join Us</Link>
                          </li>
                          <li>
                            <Link to="/internship-form">Intership</Link>
                          </li>
                          
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="td_main_header_right">
              <div className="td_header_btns">
                <Link
                  to="/signin"
                  className="td_btn td_style_1 td_type_1 td_radius_30 td_medium td_with_shadow"
                >
                  <span className="td_btn_in td_accent_color td_white_bg">
                    <span>Sign in</span>
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1575 4.34302L3.84375 15.6567"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
                <Link
                  to="/signup"
                  className="td_btn td_style_1 td_radius_30 td_medium td_with_shadow"
                >
                  <span className="td_btn_in td_white_color td_accent_bg">
                    <span>Sign up</span>
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1575 4.34302L3.84375 15.6567"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
