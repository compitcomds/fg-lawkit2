import { Link } from "react-router-dom";
import { coursesList } from "../../data/courses";
import user from "../../assets/img/icons/user_3.svg";
import book from "../../assets/img/icons/book.svg";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import config from "../../lib/config";
import axios from "axios";

import { CourseCard } from "./CoursesAllGrid";

export const CouresesNine = ({ currentCourseSlug }) => {
  const [relatedCourses, setRelatedCourses] = useState([]);

  useEffect(() => {
    const fetchRelatedCourses = async () => {
      const { data } = await axios.get(
        `${config.backendApiUrl}/api/meta-datas?pagination[pageSize]=3&filters[handle][$ne]=${currentCourseSlug}&fields[0]=handle&fields[1]=meta_data&filters[meta_format][documentId][$eq]=ojz6l3nldu1hzpjultyqros9&${config.appendTenentId}`
      );
      console.log(data);
      if (data.data.length < 1) return;
      setRelatedCourses(data.data);
    };

    fetchRelatedCourses();
  }, [currentCourseSlug]);

  if (relatedCourses.length < 1)
    return <section className="td_height_60 td_height_lg_60"></section>;

  return (
    <section>
      <div className="td_height_60 td_height_lg_60" />
      <div className="container">
        <h2 className="td_fs_48 td_mb_50">Courses you May Like</h2>

        <div className="row td_gap_y_30 td_row_gap_30">
          {relatedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};

CouresesNine.propTypes = {
  currentCourseSlug: PropTypes.string.isRequired,
};
