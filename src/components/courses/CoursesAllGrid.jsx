import { Link } from "react-router-dom";
import user from "../../assets/img/icons/user_3.svg";
import book from "../../assets/img/icons/book.svg";
import { useEffect, useState } from "react";
import config from "../../lib/config";
import axios from "axios";
import CourseImage from "./CourseImage";

export const CoursesAllGrid = () => {
  const [courses, setCourses] = useState([]);
  const [meta, setMeta] = useState({
    page: null,
    pageSize: null,
    pageCount: null,
    total: null,
  });

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get(
        `${config.backendApiUrl}/api/meta-datas?fields[0]=handle&fields[1]=meta_data&filters[meta_format][documentId][$eq]=ojz6l3nldu1hzpjultyqros9&${config.appendTenentId}`
      );
      setCourses(data.data);
      setMeta(data.meta);
    };

    fetchCourses();
  }, []);

  return (
    <div className="row td_gap_y_30 td_row_gap_30">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export function CourseCard({ course }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="td_card td_style_3 d-block td_radius_10">
        {course.meta_data.label && (
          <span className="td_card_label td_accent_bg td_white_color">
            {course.meta_data.label}
          </span>
        )}
        <Link to={`/course-details/${course.handle}`} className="td_card_thumb">
          <CourseImage
            imageId={course.meta_data.thumbnail}
            title={course.meta_data.title}
          />
        </Link>
        <div className="td_card_info td_white_bg">
          <div className="td_card_info_in">
            <ul className="td_card_meta td_mp_0 td_fs_18 td_medium td_heading_color">
              <li>
                <img src={user} alt="" />
                <span className="td_opacity_7">
                  {course.meta_data.no_of_students} Enrolled
                </span>
              </li>
              <li>
                <img src={book} alt="" />
                <span className="td_opacity_7">
                  {course.meta_data.duration}
                </span>
              </li>
            </ul>
            <p className="td_card_category td_fs_14 td_bold td_heading_color td_mb_14">
              {course.meta_data.tag}
            </p>
            <h2 className="td_card_title td_fs_24 td_mb_16">
              <Link to={`/course-details/${course.handle}`}>
                {course.meta_data.title}
              </Link>
            </h2>
            <p className="td_card_subtitle td_heading_color td_opacity_7 td_mb_20">
              {course.meta_data.excerpt}
            </p>
            <div className="td_card_review">
              <div className="td_rating" data-rating={course.meta_data.rating}>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <div className="td_rating_percentage">
                  <i className="fa-solid fa-star fa-fw"></i>
                  <i className="fa-solid fa-star fa-fw"></i>
                  <i className="fa-solid fa-star fa-fw"></i>
                  <i className="fa-solid fa-star fa-fw"></i>
                  <i className="fa-solid fa-star fa-fw"></i>
                </div>
              </div>
              <span className="td_heading_color td_opacity_5 td_medium">
                ({course.meta_data.rating}/5 Ratings)
              </span>
            </div>
            <div className="td_card_btn">
              <Link
                to={`/course-details/${course.handle}`}
                className="td_btn td_style_1 td_radius_10 td_medium"
              >
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>Enroll Now</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
