import { Layout } from "../../layouts/Layout";
import "../../assets/css/style4.css";
import PropTypes from "prop-types";

const DownloadIcon = ({ link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16"><path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708"></path></svg>
  </a>
);

DownloadIcon.propTypes = {
  link: PropTypes.string.isRequired,
};

const CaseMaterial = () => {
  return (
    <Layout
      breadcrumbTitle="DU Case Material"
      breadcrumbSubtitle="DU Case Material"
    >
      <div className="td_height_80 td_height_lg_40" />

      <div className="container">
        <div className="td_section_heading td_style_1 td_type_2 td_with_tab_menu wow fadeInUp">
          <div className="">
            <p className="subtitle">
              <i></i> DU Case Materials <i></i>
            </p>
            <p className="description">
              Many times, the Delhi University website isn&#39;t working, so we
              have uploaded DU case material here in good faith. This way,
              students can access it freely whenever they want.
            </p>
          </div>
        </div>
        <div className="td_height_20 td_height_lg_10" />

        {/* Main Content Section */}
        <div className="case-material-content">
          {/* Term I */}
          <div className="term">
            <h2>I Term LL.B.</h2>
            <ul>
              <li>
                LB-101 Jurisprudence-I{" "}
                <DownloadIcon link="/pdfs/LB-101 Jurisprudence-I.pdf" />
              </li>
              <li>
                LB-102 Principles of Contract{" "}
                <DownloadIcon link="/pdfs/LB-102 Principles of Contract.pdf" />
              </li>
              <li>
                LB-103 Law of Torts{" "}
                <DownloadIcon link="/pdfs/LB-103 Law of Torts.pdf" />
              </li>
              <li>
                LB-104 Law of Crimes- I{" "}
                <DownloadIcon link="/pdfs/LB-104 Law of Crimes- I.pdf" />
              </li>
              <li>
                LB-105 Family Law I{" "}
                <DownloadIcon link="/pdfs/LB-105 Family Law I.pdf" />
              </li>
            </ul>
          </div>

          {/* Term II */}
          <div className="term">
            <h2>II Term LL.B.</h2>
            <ul>
              <li>
                LB-201 Law of Evidence{" "}
                <DownloadIcon link="/pdfs/LB- 201 Law of Evidence.pdf" />
              </li>
              <li>
                LB-202 Family Law{" "}
                <DownloadIcon link="/pdfs/LB- 202 Family Law.pdf" />
              </li>
              <li>
                LB-203 Law of Crimes- II{" "}
                <DownloadIcon link="/pdfs/LB- 203 Law of Crimes- II.pdf" />
              </li>
              <li>
                LB-204 Property Law{" "}
                <DownloadIcon link="/pdfs/LB- 204 Property Law.pdf" />
              </li>
              <li>
                LB-205 Public International Law{" "}
                <DownloadIcon link="/pdfs/LB- 205 Public International Law.pdf" />
              </li>
            </ul>
          </div>

          {/* Term III */}
          <div className="term">
            <h2>III Term LL.B.</h2>
            <div className="compulsory">
              <h3>Compulsory Subjects:</h3>
              <ul>
                <li>
                  LB-301 Constitutional Law – I{" "}
                  <DownloadIcon link="/pdfs/LB-301_ Constitutional Law – I.pdf" />
                </li>
                <li>
                  LB-302 Code of Civil Procedure and Limitation Act{" "}
                  <DownloadIcon link="/pdfs/LB-302_ Code of Civil Procedure and Limitation Act.pdf" />
                </li>
                <li>
                  LB-303 Company Law{" "}
                  <DownloadIcon link="/pdfs/LB-303_ Company Law.pdf" />
                </li>
                <li>
                  LB-304 Special Contracts{" "}
                  <DownloadIcon link="/pdfs/LB-304_ Special Contracts.pdf" />
                </li>
              </ul>
            </div>
            <div className="optional">
              <h3>Optional Subjects:</h3>
              <ul>
                <li>
                  LB-3031 Media and Law{" "}
                  <DownloadIcon link="/pdfs/LB-3031_ Media and Law.pdf" />
                </li>
                <li>
                  LB-3032: Private International Law{" "}
                  <DownloadIcon link="/pdfs/LB-3032_ Private International Law.pdf" />
                </li>
                <li>
                  LB-3033: Legal Philosophy including Theory of Justice{" "}
                  <DownloadIcon link="/pdfs/LB-3033_ Legal Philosophy including Theory of Justice.pdf" />
                </li>
                <li>
                  LB-3034: White Collar Crimes{" "}
                  <DownloadIcon link="/pdfs/LB-3034_ White Collar Crimes.pdf" />
                </li>
              </ul>
            </div>
          </div>
          {/* Term IV */}
          <div className="term">
            <h2>IV Term LL.B.</h2>
            <ul>
              <li>
                Constitution Law{" "}
                <DownloadIcon link="/pdfs/Constitution Law.pdf" />
              </li>
              <li>
                Administrative Law{" "}
                <DownloadIcon link="/pdfs/Administrative Law.pdf" />
              </li>
              <li>
                Labour Law{" "}
                <DownloadIcon link="/pdfs/Labour Law.pdf" />
              </li>
              <li>
                Gender Justice & Feminist Jurisprudence{" "}
                <DownloadIcon link="/pdfs/Gender Justice & Feminist Jurisprudence.pdf" />
              </li>
              <li>
                International Institutions{" "}
                <DownloadIcon link="/pdfs/International Institutions.pdf" />
              </li>
              <li>
                Competition Law{" "}
                <DownloadIcon link="/pdfs/Competition Law.pdf" />
              </li>
              <li>
                Legislative Drafting{" "}
                <DownloadIcon link="/pdfs/Legislative Drafting.pdf" />
              </li>
              <li>
                Humanitarian Law and Refugee Law{" "}
                <DownloadIcon link="/pdfs/Humanitarian Law and Refugee Law.pdf" />
              </li>
              <li>
                Intellectual Property Rights Law-I{" "}
                <DownloadIcon link="/pdfs/Intellectual Property Rights Law-I.pdf" />
              </li>
            </ul>
          </div>
          {/* Term V */}
          <div className="term">
            <h2>V Term LL.B.</h2>
            <ul>
              <li>
                LB 501 - Moot Court Exercise and Internship{" "}
                <DownloadIcon link="#" />
              </li>
              <li>
                LB 502 - Drafting, Pleading and Conveyance{" "}
                <DownloadIcon link="/pdfs/Drafting-Pleadings-and-Conveyancing.pdf" />
              </li>
              <li>
                LB 503 - Industrial Law (including IDRA,){" "}
                <DownloadIcon link="/pdfs/Industrial-Law-including-IDRA.pdf" />
              </li>
              <li>
                LB-504 - Principles of Taxation Law{" "}
                <DownloadIcon link="/pdfs/Principles of Taxation Law.pdf" />
              </li>
              <div className="optional">
                <h3>Optional Subjects (Opt any two of the following)</h3>
                <li>
                  LB 5031 - Information Technology Law{" "}
                  <DownloadIcon link="/pdfs/Information-technology-law-2020.pdf" />
                </li>
                <li>
                  LB 5033 - Criminology{" "}
                  <DownloadIcon link="/pdfs/Criminology-2020.pdf" />
                </li>
                <li>
                  LB 5034 - International Trade Law{" "}
                  <DownloadIcon link="/pdfs/International-Trade-Law-2020.pdf" />
                </li>
                <li>
                  LB 5035 - Rent Control and Slum Clearance{" "}
                  <DownloadIcon link="/pdfs/Rent-Control-2020.pdf" />
                </li>
                <li>
                  LB 5036 - Business Regulations{" "}
                  <DownloadIcon link="/pdfs/Business-Regulations-July-2020.pdf" />
                </li>
                <li>
                  LB-5037 - Intellectual Property Rights Law-II{" "}
                  <DownloadIcon link="/pdfs/Intellectual Property Rights Law-I.pdf" />
                </li>
              </div>
            </ul>
          </div>
          {/* Term VI */}
          <div className="term">
            <h2>VI Term LL.B.</h2>
            <ul>
              <li>
                Advocacy Professional Ethics and Accountancy for Lawyers{" "}
                <DownloadIcon link="/pdfs/Advocacy Professional Ethics and Accountancy for Lawyers.pdf" />
              </li>
              <li>
                ADR Course <DownloadIcon link="/pdfs/ADR Course.pdf" />
              </li>
              <li>
                Environmental Law{" "}
                <DownloadIcon link="/pdfs/Environmental Law.pdf" />
              </li>
              <li>
                Principles of Taxation Law{" "}
                <DownloadIcon link="/pdfs/Principles of Taxation Law.pdf" />
              </li>
              <li>
                Interpretation of Statutes{" "}
                <DownloadIcon link="/pdfs/Interpretation of Statutes.pdf" />
              </li>
              <li>
                Insurance and Banking Law{" "}
                <DownloadIcon link="/pdfs/Insurance and Banking Law.pdf" />
              </li>
              <li>
                Election Laws{" "}
                <DownloadIcon link="/pdfs/Election Laws.pdf" />
              </li>
              <li>
                Minor Acts and Supreme Courts Rules{" "}
                <DownloadIcon link="/pdfs/Minor Acts and Supreme Courts Rules.pdf" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </Layout>
  );
};

export default CaseMaterial;
