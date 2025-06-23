
import { Link } from "react-router-dom";
import { CategoryOneItem } from "./CategoryOneItem";

import categoryIcon1 from "/summary/Family Law.png";
import categoryIcon2 from "/summary/Environmental Law.png";
import categoryIcon3 from "/summary/white Collar Crimes.png";
import categoryIcon4 from "/summary/Election laws.png";
import categoryIcon5 from "/summary/Rent Control.png";
import categoryIcon6 from "/summary/trade mark.png";
import categoryIcon7 from "/summary/Ios Law.png";
import categoryIcon8 from "/summary/Explore More.png";

const categoryData = [
  {
    delay: 0.25,
    src: categoryIcon1,
    title: "Family Law",
    courses: 25,
  },
  {
    delay: 0.3,
    src: categoryIcon2,
    title: "Environmental Law",
    courses: 20,
  },
  {
    delay: 0.35,
    src: categoryIcon3,
    title: "White Collar Crimes",
    courses: 35,
  },
  {
    delay: 0.4,
    src: categoryIcon4,
    title: "Election Laws",
    courses: 15,
  },
  {
    delay: 0.3,
    src: categoryIcon5,
    title: "Rent Control",
    courses: 26,
  },
  {
    delay: 0.35,
    src: categoryIcon6,
    title: "Trade Mark",
    courses: 30,
  },
  {
    delay: 0.4,
    src: categoryIcon7,
    title: "IoS Law",
    courses: 40,
  },
  {
    delay: 0.45,
    src: categoryIcon8,
    title: "Explore More",
    courses: 50,
  },
];

export const CategoryOne = () => {
  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 td_type_1 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="td_section_heading_left">
            <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
              <i></i>
              Browse Case Summary
              <i></i>
            </p>
            <h2 className="td_section_title td_fs_48 mb-0">
              Well-Researched Case Summaries
            </h2>
          </div>
          <div className="td_section_heading_right">
            <p className="td_section_subtitle td_fs_18 td_mb_16 td_heading_color td_opacity_9">
              We have curated trusted case briefs for your law semester and other competitive examinations, aiming to cover all the landmark judgments.
            </p>
            <Link
              to="/case-briefs"
              className="td_btn td_style_2 td_heading_color td_medium td_mb_10"
            >
              Find Case Summary
              <i>
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
                  ></path>
                  <path
                    d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
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
                  ></path>
                  <path
                    d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </i>
            </Link>
          </div>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        {/* category cards */}
        <div className="row td_gap_y_24">
          {categoryData.map((category, index) => (
            <CategoryOneItem
              key={index}
              delay={category.delay}
              src={category.src}
              title={category.title}
              courses={category.courses}
            />
          ))}
        </div>
      </div>

      <div className="td_height_20 td_height_lg_30" />
    </section>
  );
};
