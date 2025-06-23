import { Layout } from "../../layouts/Layout";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BlogContainer } from "../../components/blogs/BlogContainer";
import { Link } from "react-router-dom";
import applyThemeClasses from "../../lib/applyClass";
import "./style3.scss";
import { Helmet } from "react-helmet";

const CaseBriefDetail = () => {
  const { slug } = useParams();
  const [blogObj, setBlogObj] = useState(null);
  const url = `https://mentosapi2-wi4z7.ondigitalocean.app/api/blogs?filters[tenent_id][$eq]=FgLawkitCDP`;

  useEffect(() => {
    dataFetch();
  }, []);

  async function dataFetch() {
    try {
      const res = await fetch(
        `${url}&filters[title][$containsi]=${slug}&populate=image&populate=tags`
      );
      const jsonData = await res.json();

      if (jsonData.data.length > 0) {
        setBlogObj(jsonData.data[0]);
      } else {
        setBlogObj(null);
      }
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    }
  }

  // SEO tags
  const seoTitle = blogObj
    ? `${blogObj.title} | FG Lawkit`
    : "Case Brief | FG Lawkit";
  const seoDescription = blogObj
    ? blogObj.excerpt || blogObj.title || "Read this case brief on FG Lawkit."
    : "Read detailed case briefs on FG Lawkit.";
  const seoKeywords =
    blogObj && blogObj.tags
      ? blogObj.tags.map((tag) => tag.tag_value).join(", ")
      : "case brief, law, legal, FG Lawkit";
  const seoImage =
    blogObj && (blogObj.image?.formats?.medium?.url || blogObj.image?.url)
      ? blogObj.image?.formats?.medium?.url || blogObj.image?.url
      : "https://placehold.co/1157x741";
  const seoUrl = typeof window !== "undefined" ? window.location.href : "";

  if (!blogObj) {
    return (
      <>
        <Helmet>
          <title>{seoTitle}</title>
          <meta name="description" content={seoDescription} />
          <meta name="keywords" content={seoKeywords} />
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={seoDescription} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={seoImage} />
          <meta property="og:url" content={seoUrl} />
        </Helmet>
        <Layout
          breadcrumbTitle={blogObj?.title || "Loading..."}
          breadcrumbSubtitle={blogObj?.title || ""}
        >
          <BlogContainer>
            {!blogObj ? (
              <div className="td_blog_details">
                <h2 className="title">Loading case brief...</h2>
                <p>Please wait while we load the content.</p>
              </div>
            ) : (
              <></>
            )}
          </BlogContainer>
        </Layout>
      </>
    );
  }

  const imageUrl =
    blogObj.image?.formats?.medium?.url ||
    blogObj.image?.url ||
    "https://placehold.co/1157x741";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={seoImage} />
        <meta property="og:url" content={seoUrl} />
      </Helmet>
      <Layout
        breadcrumbTitle={blogObj.title}
        breadcrumbSubtitle={blogObj.title}
      >
        <BlogContainer>
          <div className="td_blog_details_head td_mb_40 category_topic">
            <img
              src={imageUrl}
              alt={blogObj.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/1157x741";
              }}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div className="td_blog_details_head_meta">
              <div className="td_blog_details_avatar">
                <img
                  src={"/avatar.jpg"}
                  alt="Avatar"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/182x182";
                  }}
                />
                <p className="mb-0 td_heading_color td_bold">
                  <span className="td_normal td_opacity_5">By</span>{" "}
                  {blogObj.author}
                </p>
              </div>
              <ul className="td_blog_details_head_meta_list td_mp_0 td_heading_color">
                <li className="category td_card_label td_accent_bg td_white_color">
                  {blogObj.Blog_status}
                </li>
                <li>
                  <div className="td_icon_btns">
                    <span className="td_icon_btn td_center td_heading_color">
                      <svg
                        width="13"
                        height="15"
                        viewBox="0 0 13 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.4375 0.75C3.65625 0.75 3.875 0.96875 3.875 1.1875V2.5H9.125V1.1875C9.125 0.96875 9.31641 0.75 9.5625 0.75C9.78125 0.75 10 0.96875 10 1.1875V2.5H10.875C11.832 2.5 12.625 3.29297 12.625 4.25V13C12.625 13.9844 11.832 14.75 10.875 14.75H2.125C1.14062 14.75 0.375 13.9844 0.375 13V4.25C0.375 3.29297 1.14062 2.5 2.125 2.5H3V1.1875C3 0.96875 3.19141 0.75 3.4375 0.75Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  {new Date(blogObj.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </li>
                <li>
                  <div className="td_icon_btns">
                    <div className="td_icon_btn td_center td_heading_color">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-eye-icon lucide-eye"
                      >
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                  </div>
                  {blogObj.view} Views
                </li>
              </ul>
            </div>
          </div>

          <div className="td_blog_details">
            <h2 className="title" style={{ textTransform: "capitalize" }}>
              {blogObj.title}
            </h2>
            <div
              className="asdasd"
              style={{ color: "black", fontSize: "16px", listStyle: "none" }}
              dangerouslySetInnerHTML={{
                __html: applyThemeClasses(
                  blogObj.content,
                  {
                    ul: "td_list td_style_2 td_fs_18 td_medium td_heading_color td_mp_0",
                  },
                  { li: "td_accent_color" }
                ),
              }}
            />
          </div>

          <div className="td_post_share">
            <div className="td_categories">
              <h4 className="mb-0 td_fs_18">Tags:</h4>
              {blogObj.tags?.map((tag) => (
                <Link to="#" className="td_category" key={tag.id}>
                  {tag.tag_value}
                </Link>
              ))}
            </div>

            <div className="td_footer_social_btns td_fs_18 td_accent_color">
              {blogObj.socials?.map((social, index) => (
                <a href={social.link} className="td_center" key={index}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="td_height_40 td_height_lg_40" />
        </BlogContainer>
      </Layout>
    </>
  );
};

export default CaseBriefDetail;
