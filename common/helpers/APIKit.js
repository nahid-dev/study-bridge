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
    getCourseContinue: (course_uid) => {
      const url = `/courses/${course_uid}/continue`;
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
};

export default APIKit;
