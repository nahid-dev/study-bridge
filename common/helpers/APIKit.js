import HTTPKit, { client } from "./HTTPKits";

const defaultFileUploadConfig = {
  headers: { "Content-Type": "multipart/form-data" },
};

const APIKit = {
  setClientToken: HTTPKit.setClientToken,

  auth: {
    register: (payload) => {
      const url = "/auth/sign-up";
      return client.post(url, payload);
    },
    login: (payload) => {
      const url = "auth/token";
      return client.post(url, payload);
    },
    getMe: () => {
      const url = "/me";
      return client.get(url);
    },
  },

  public: {
    getCourses: ({ params }) => {
      const url = "/courses";
      return client.get(url, { params });
    },
    getCourseDetails: (course_uid) => {
      const url = `/courses/${course_uid}`;
      return client.get(url);
    },
    getCourseCurriculum: (course_uid) => {
      const url = `/courses/${course_uid}/curriculum`;
      return client.get(url);
    },
    getCourseReviews: (course_uid) => {
      const url = `/courses/${course_uid}/reviews`;
      return client.get(url);
    },
    postEnrollCourse: (course_uid) => {
      const url = `/courses/${course_uid}/enrollment`;
      return client.post(url);
    },
  },
  student: {
    getCourseContinue: (course_uid) => {
      const url = `/courses/${course_uid}/continue`;
      return client.get(url);
    },
    getMyCourses: () => {
      const url = "/me/courses";
      return client.get(url);
    },
    postLectureComplete: (course_uid, lecture_uid, payload) => {
      const url = `/courses/${course_uid}/lecture/${lecture_uid}/lecture-complete`;
      return client.post(url, payload);
    },
    getQuizzes: (course_uid, lesson_uid) => {
      const url = `/courses/${course_uid}/lesson/${lesson_uid}/quiz`;
      return client.get(url);
    },
    postQuizAnswer: (course_uid, lesson_uid, payload) => {
      const url = `/courses/${course_uid}/lesson/${lesson_uid}/quiz-submission`;
      return client.post(url, payload);
    },
    getQuizResult: (course_uid, lesson_uid) => {
      const url = `/courses/${course_uid}/lesson/${lesson_uid}/quiz-submission-result`;
      return client.get(url);
    },
  },
};

export default APIKit;
