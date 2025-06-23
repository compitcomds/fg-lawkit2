
import { Link } from "react-router-dom";
import { useHobble } from "../../lib/hooks/useHobble";

import avatar1 from "/wa.png";
import avatar2 from "/yt.png";
import avatar3 from "/insta.png";
import heroImg1 from "../../assets/img/home_2/hero_img_1.png";
import heroImg2 from "../../assets/img/home_2/hero_img_2.png";
import heroImg3 from "../../assets/img/home_2/hero_img_3.png";
import heroImg4 from "../../assets/img/home_2/hero_img_4.png";
import heroImg5 from "../../assets/img/home_2/hero_img_5.png";
import heroImg6 from "../../assets/img/home_2/hero_img_6.png";
import heroShape1 from "../../assets/img/home_2/hero_shape_1.svg";
import heroShape2 from "../../assets/img/home_2/hero_shape_2.svg";
import heroShape4 from "../../assets/img/home_2/hero_shape_4.svg";
import heroShape5 from "../../assets/img/home_2/hero_shape_5.svg";

export const HeroTwo = () => {
  useHobble();

  return (
    <section className="td_hero td_style_2 td_center text-center td_hobble">
      <div className="container">
        <div
          className="td_hero_text wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >

          <h1 className="td_hero_title td_fs_50 td_mb_30">
            For First-Gen Lawyers,<br /> By First-Gen Lawyers..
          </h1>
          <p className="td_hero_subtitle td_fs_18 td_heading_color td_mb_40">
            Learn from People Who Have Themselves Cleared the Exam — Get Guidance from Those Who’ve Been in Your Shoes and Succeeded

          </p>
          <div className="td_btns_group">
            <Link
              to="/courses"
              className="td_btn td_style_1 td_radius_30 td_medium td_with_shadow"
            >
              <span className="td_btn_in td_white_color td_accent_bg">
                <span>Explore More</span>
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
            <div className="td_avatars_wrap">
              <div className="td_avatars">
                <div>
                  <img src={avatar1} alt="Student Avatar 1" />
                </div>                
                <div>
                  <img src={avatar3} alt="Student Avatar 3" />                  
                </div>
                <div>
                  <img src={avatar2} alt="Student Avatar 2" />
                </div>
              </div>
              <div>
                <h3 className="mb-0 td_fs_20 td_semibold">+50k community</h3>
                <p className="mb-0 td_fs_18 td_opacity_6">
                  No Student Without Resources!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_hero_img_box_left">
        <div
          className="td_hero_img_1 position-absolute wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          <img src={heroImg1} alt="Hero Image 1" />
        </div>
        <div
          className="td_hero_img_2 position-absolute wow fadeInLeft"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          <img src={heroImg2} alt="Hero Image 2" />
        </div>
        <div
          className="td_hero_img_3 position-absolute wow fadeInRight"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          <img src={heroImg3} alt="Hero Image 3" />
        </div>
        <div className="td_hero_shape_1 position-absolute td_hover_layer_3">
          <img src={heroShape1} alt="Hero Shape 1" />
        </div>
        <div className="td_hero_shape_2 position-absolute td_hover_layer_3">
          <img src={heroShape2} alt="Hero Shape 2" />
        </div>
      </div>
      <div className="td_hero_img_box_right">
        <div
          className="td_hero_img_4 position-absolute wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          <img src={heroImg4} alt="Hero Image 4" />
        </div>
        <div
          className="td_hero_img_5 position-absolute wow fadeInRight"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          <img src={heroImg5} alt="Hero Image 5" />
        </div>
        <div
          className="td_hero_img_6 position-absolute wow fadeInLeft"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          <img src={heroImg6} alt="Hero Image 6" />
        </div>
        <div className="td_hero_shape_3 position-absolute td_hover_layer_5">
          <img src={heroShape1} alt="Hero Shape 3" />
        </div>
        <div className="td_hero_shape_4 position-absolute" />
      </div>
      <div className="td_hero_shape_5 position-absolute td_hover_layer_5">
        <img src={heroShape4} alt="Hero Shape 4" />
      </div>
      <div className="td_hero_shape_6 position-absolute">
        <img src={heroShape5} alt="Hero Shape 5" />
      </div>
    </section>
  );
};
