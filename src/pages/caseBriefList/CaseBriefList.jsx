import { useParams, Link } from "react-router-dom";
import "../../assets/css/style2.css";
import { Layout } from "../../layouts/Layout";
import { useEffect, useState } from "react";

const CaseBriefsByCategory = () => {
  const { category } = useParams();
  const [blogObj, setBlogObj] = useState({});
  const url = `https://mentosapi2-wi4z7.ondigitalocean.app/api/blogs?filters[tenent_id][$eq]=FgLawkitCDP`;

  useEffect(() => {
    dataFetch();
  }, [category]);

  async function dataFetch() {
    try {
      const res = await fetch(`${url}&fields[0]=title&filters[categories][slug][$eq]=${category}`);
      const json = await res.json();
      console.log("Fetched data:", json);
      setBlogObj(json);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  }

  const blogData = blogObj?.data || [];

  const groupedBriefs = blogData.reduce((acc, item) => {
    const title = item.title || "Untitled";
    const firstLetter = title.charAt(0).toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(item);
    return acc;
  }, {});

  const formattedCategory = category
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // if (blogData.length === 0)
  //   return (
  //     <p className="no-briefs-message">
  //       No case briefs found for this category.
  //     </p>
  // );

  return (
    <Layout
      breadcrumbTitle={formattedCategory}
      breadcrumbSubtitle={formattedCategory}
    >
      <div className="td_height_80 td_height_lg_40" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 td_type_2 td_with_tab_menu wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="td_section_heading_left">
            <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
              {formattedCategory}
            </p>
          </div>
        </div>
        <div className="td_height_20 td_height_lg_10" />
        <div className="category-list">
          {blogData.length === 0 ? (
            <div>Data Not Found</div>
          ) : (
            Object.keys(groupedBriefs)
              .sort() 
              .map((letter) => (
                <div key={letter} className="category-group">
                  <p className="category-title">{letter}</p>
                  <ul className="briefs-list">
                    {groupedBriefs[letter]
                      .sort((a, b) => a.title.localeCompare(b.title)) 
                      .map((item) => (
                        <li key={item.id} className="category-item">
                          <Link
                            to={`/case-briefs/${category}/${item.title}`}
                            className="brief-link"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))
          )}
        </div>
      </div>
      <div className="td_height_60 td_height_lg_40" />
    </Layout>
  );
};

export default CaseBriefsByCategory;
