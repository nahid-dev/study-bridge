import HTTPKit, { client } from "./HTTPKits";

const defaultFileUploadConfig = {
  headers: { "Content-Type": "multipart/form-data" },
};

const APIKit = {
  setClientToken: HTTPKit.setClientToken,

  public: {
    getCourses: () => {
      const url = "/courses";
      return client.get(url);
    },
    getCourseDetails: (course_uid) => {
      const url = `/courses/${course_uid}`;
      return client.get(url);
    },
  },
  auth: {
    register: (payload) => {
      const url = "/auth/sign-up";
      return client.post(url, payload);
    },
  },
};

export default APIKit;
