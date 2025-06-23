import { useEffect, useState } from "react";
import { CourseCard } from "./CoursesAllGrid";
import axios from "axios";
import config from "../../lib/config";

export const CoursesTwo = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get(
        `${config.backendApiUrl}/api/meta-datas?pagination[pageSize]=6&fields[0]=handle&fields[1]=meta_data&filters[meta_format][documentId][$eq]=ojz6l3nldu1hzpjultyqros9&${config.appendTenentId}`
      );
      setCourses(data.data);
    };

    fetchCourses();
  }, []);
  return (
    <section className="td_gray_bg_4">
      <div className="td_height_112 td_height_lg_75" />
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
              Our Action-Oriented Courses
            </h2>
          </div>
        </div>
        <div className="td_height_50 td_height_lg_50" />
        <div className="row td_gap_y_30 td_row_gap_30">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      <div className="td_height_112 td_height_lg_75" />
    </section>
  );
};
