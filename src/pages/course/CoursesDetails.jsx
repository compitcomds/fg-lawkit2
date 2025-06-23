import { useParams } from "react-router-dom";
import { Layout } from "../../layouts/Layout";
import { CouresesNine } from "../../components/courses/CouresesNine";
import { CourseDetailContent } from "../../components/courses/CourseDetailContent";

export const CoursesDetails = () => {
  const { slug } = useParams();
  return (
    <Layout
      breadcrumbTitle="Course Details"
      breadcrumbSubtitle="Course Details"
    >
      {/* details */}
      <CourseDetailContent />

      {/* popular */}
      <CouresesNine currentCourseSlug={slug || ""} />
    </Layout>
  );
};
