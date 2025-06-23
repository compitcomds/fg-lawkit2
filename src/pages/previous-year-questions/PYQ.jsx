import { Layout } from "../../layouts/Layout";
import "../../assets/css/style4.css";
import PropTypes from "prop-types";

const DownloadIcon = ({ link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="currentColor"
      className="bi bi-cloud-arrow-down-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708"></path>
    </svg>
  </a>
);

DownloadIcon.propTypes = {
  link: PropTypes.string.isRequired,
};

const PYQ = () => {
  return (
    <Layout
      breadcrumbTitle="Previous Year Question Papers"
      breadcrumbSubtitle="Previous Year Question Papers"
    >
      <div className="td_height_80 td_height_lg_40" />

      <div className="container">
        <div className="td_section_heading td_style_1 td_type_2 td_with_tab_menu wow fadeInUp">
          <div className="">
            <p className="subtitle">
              <i></i> Previous Year Question Papers <i></i>
            </p>
            <p className="description">
              As the Delhi University website is often inaccessible, we’ve
              shared previous year question papers here in good faith for
              students to access anytime.
            </p>
          </div>
        </div>
        <div className="td_height_20 td_height_lg_10" />
        <div className="case-material-container">
          <div className="case-material-image">
            <img src="https://placehold.co/500x300" alt="Study Material" />
          </div>

          <div className="case-material-content1">
            {/* Term I */}
            <div className="term1">
              <h2>Past Year Papers</h2>
              <ul>
                <li>
                  Past Year Paper 2020{" "}
                  <DownloadIcon link="/pdfs/Past Year Paper 2020.pdf" />
                </li>
                <li>
                  Past Year Paper 2021{" "}
                  <DownloadIcon link="/pdfs/Past Year Paper 2021.pdf" />
                </li>
                <li>
                  Past Year Paper 2022{" "}
                  <DownloadIcon link="/pdfs/Past Year Paper 2022.pdf" />
                </li>
                <li>
                  Past Year Paper 2023{" "}
                  <DownloadIcon link="/pdfs/Past Year Paper 2023.pdf" />
                </li>
                <li>
                  Past Year Paper 2024{" "}
                  <DownloadIcon link="/pdfs/Past Year Paper 2024.pdf" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </Layout>
  );
};

export default PYQ;
