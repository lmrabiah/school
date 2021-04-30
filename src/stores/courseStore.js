// import slugify from "react-slugify";

import { makeAutoObservable } from "mobx";

import instance from "./instance";

class CourseStore {
  courses = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCourses = async () => {
    try {
      const response = await instance.get("/course");
      this.courses = response.data;
      this.loading = false;
    } catch (error) {
      console.error("StoreStore -> fetchStores -> error", error);
    }
  };

  creatCourse = async (newCourse) => {
    try {
      const response = await instance.post("/course", newCourse);
      this.courses.push(response.data);
    } catch (error) {
      console.error(console.error);
    }
  };

  updateCourses = async (updateCourses, cb) => {
    try {
      const formData = new FormData();
      for (const key in updateCourses) formData.append(key, updateCourses[key]);
      await instance.put(`/course/${updateCourses.id}`, updateCourses);
      cb();
      const Course = this.Course.find(
        (Course) => Course.id === updateCourses.id
      );
      for (const key in Course) Course[key] = updateCourses[key];
    } catch (error) {
      console.log("Coursestore -> updateCourses -> error", error);
    }
  };
}

const courseStore = new CourseStore();
courseStore.fetchCourses();
export default courseStore;
