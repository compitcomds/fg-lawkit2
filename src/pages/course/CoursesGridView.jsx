import { Layout } from "../../layouts/Layout";
import { CoursesAllGrid } from "../../components/courses/CoursesAllGrid";
import { CoursesAllContainer } from "../../components/courses/CoursesAllContainer";

export const CoursesGridView = () => {
  return (
    <Layout
      breadcrumbTitle={"Courses & Mocks"}
      breadcrumbSubtitle={"Courses & Mocks"}
    >
      <CoursesAllContainer isGrid>
        <CoursesAllGrid />
      </CoursesAllContainer>
    </Layout>
  );
};
