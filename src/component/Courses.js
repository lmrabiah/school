import React from "react";
import { observer } from "mobx-react";

import { Tabledata } from "../styles";
import courseStore from "../stores/courseStore";
import AddCourseButton from "./buttons/AddCourseButton";

function Courses() {
  const CoursesList = courseStore.courses.map((course) => (
    <tr>
      <td align="center">
        <Tabledata>{course.enddate}</Tabledata>
      </td>

      <td align="center">
        <Tabledata>{course.startCourse}</Tabledata>
      </td>
      <td align="center">
        <Tabledata>{course.name}</Tabledata>
      </td>
    </tr>
  ));

  return (
    <div>
      <AddCourseButton />
      <div class="table-responsive">
        <table class="table table-bordered ">
          <thead
            class="thead-dark"
            bg="light"
            expand="lg"
            sticky="top"
            position="fixed"
          >
            <tr>
              <th align="center">
                <h3 align="center">الفصول الدراسية </h3>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="table-responsive">
        <table class="table table-bordered ">
          <thead
            class="thead-light"
            bg="light"
            expand="lg"
            sticky="top"
            position="fixed"
          >
            <tr>
              <th align="center">
                <h3 align="center">تاريخ نهاية الفصل </h3>
              </th>

              <th align="center">
                <h3 align="center">تاريخ بداية الفصل </h3>
              </th>
              <th align="center">
                <h3 align="center">اسم الفصل الدراسي </h3>
              </th>
            </tr>
          </thead>

          <tbody class="table table-striped" bgColor="white">
            {CoursesList}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default observer(Courses);
