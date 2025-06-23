import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../layouts/Layout";
import "../../assets/css/style2.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const CaseBriefs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const sectionRefs = useRef({});
  const [caseBriefs, setCaseBriefs] = useState([]); // now dynamic
  const url = `https://mentosapi2-wi4z7.ondigitalocean.app/api/blogs?filters[tenent_id][$eq]=FgLawkitCDP&populate=categories`;

  useEffect(() => {
    async function dataFetch() {
      try {
        const res = await fetch(url);
        const jsonData = await res.json();

        const briefs = jsonData.data.map((item) => ({
          title: item.title,
          category: item.categories?.name || "Uncategorized",
          categorySlug: item.categories?.slug || "uncategorized",
        }));

        setCaseBriefs(briefs);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    }

    dataFetch();
  }, []);

  const grouped = {};
  caseBriefs.forEach((brief) => {
    const letter = brief.category?.charAt(0).toUpperCase();
    if (!grouped[letter]) grouped[letter] = new Map();
    grouped[letter].set(brief.category, brief.categorySlug);
  });

  const getFilteredCategories = (letter) => {
    const categories = grouped[letter];
    if (!categories) return [];

    return Array.from(categories.entries())
      .filter(([category]) =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a[0].localeCompare(b[0]));
  };

  return (
    <Layout breadcrumbTitle="Case Brief" breadcrumbSubtitle="Case Brief">
      <div className="td_height_80 td_height_lg_40" />

      <div className="container">
        <div
          className="td_section_heading td_style_1 td_type_2 td_with_tab_menu wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="td_section_heading_left">
            <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
              <i></i>
              Explore Courses
              <i></i>
            </p>
            <h2 className="td_section_title td_fs_48 mb-0">
              Our Action-Oriented Case Briefs
            </h2>
          </div>
        </div>

        <div className="td_height_20 td_height_lg_10" />

        {/* Search Bar */}
        <div className="search-bar-wrapper">
          <input
            type="text"
            className="case-search-input"
            placeholder="🔍 Search case categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="alphabet-cards">
          {alphabet.map((letter) => {
            const filteredCategories = getFilteredCategories(letter);
            return filteredCategories.length > 0 ? (
              <div
                className="card case-card"
                key={letter}
                ref={(el) => (sectionRefs.current[letter] = el)}
              >
                <h2 className="case-letter">{letter}</h2>
                <ul className="case-category-list">
                  {filteredCategories.map(([category, slug]) => (
                    <Link
                      to={`/case-briefs/${slug}`} // now slug = categorySlug
                      className="case-link"
                      key={slug}
                    >
                      <li>
                        {category
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (c) => c.toUpperCase())}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ) : null;
          })}
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </Layout>
  );
};

export default CaseBriefs;
