import { makeAutoObservable } from "mobx";

import instance from "./instance";

class SubjectStore {
  subjects = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  getSubjectId = (subjectId) =>
    this.subjects.find((subject) => subject.id === subjectId);

  fetchSubjects = async () => {
    try {
      const response = await instance.get("/subjects");
      this.subjects = response.data;
      this.loading = false;
    } catch (error) {
      console.error("SubjectStore -> fetchSubjects -> error", error);
    }
  };

  updateSubjects = async (updateSubjects, cb) => {
    try {
      const formData = new FormData();
      for (const key in updateSubjects)
        formData.append(key, updateSubjects[key]);
      await instance.put(`/subjects/${updateSubjects.id}`, updateSubjects);
      cb();
      const subject = this.subject.find(
        (subject) => subject.id === updateSubjects.id
      );
      for (const key in subject) subject[key] = updateSubjects[key];
    } catch (error) {
      console.log("SubjectStore -> updateSubjects -> error", error);
    }
  };
}

creatSubject = async (newSubject, course) => {
  // newSubject.slug = slugify(newSubject.name);
  // newSubject.id = this.subjects[this.subjects.length - 1].id + 1;
  // this.subjects.push(newSubject);

  try {
    const formData = new FormData();

    for (const key in newSubject) formData.append(key, newSubject[key]);
    const response = await instance.post(
      `/course/${course.id}/subjects`,
      formData
    );
    this.subjects.push(response.data);
    course.subjects.push({ id: response.data.id });
  } catch (error) {
    console.error(console.error);
  }
};

deleteSubject = async (subjectId, course) => {
  try {
    await instance.delete(`/subjects/${subjectId}`);

    const newSubjects = course.subjects.filter(
      (subject) => subject.id !== subjectId
    );
    course.subjects = newSubjects;
    this.subjects = this.subjects.filter((subject) => subject.id !== subjectId);
  } catch (error) {
    console.error(
      "🚀 ~ file: subjectStore.js ~ line 53 ~ SubjectStore ~ deleteSubject ~ error",
      error
    );
  }
};

const subjectStore = new SubjectStore();
subjectStore.fetchSubjects();
export default subjectStore;
