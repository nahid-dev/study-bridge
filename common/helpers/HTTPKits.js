import axios from "axios";
import { AUTH_TOKEN_KEY } from "./KeyChain";
import { deferred } from "./UtilKit";

const defaultErrors = {
  NOT_AUTHENTICATED: new Error({
    error: "NOT_AUTHENTICATED",
    message: "Client is not authenticated!",
  }),
};

export let client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

const defer = new deferred();

let clientIsAuthenticated = false;

export const setClientToken = (token) => {
  const promise = new Promise((resolve, reject) => {
    try {
      client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      clientIsAuthenticated = true;
      isReady();
      console.log(`Setting JSONWebToken in client: ${token}`);
      resolve(client);
    } catch (error) {
      reject(error);
    }
  });
  return promise;
};

const isReady = () => {
  function raiseNoteAuthenticatedError() {
    console.log("Does not have token, rejecting promise...");
    throw defaultErrors.NOT_AUTHENTICATED;
  }

  try {
    if (clientIsAuthenticated) {
      console.log("Client is already authenticated, resolving client ...");
      defer.resolve(client);
    } else {
      const token = localStorage.get(AUTH_TOKEN_KEY);
      if (token) {
        setClientToken(token)
          .then(() => {
            console.log("Receive token, resolving client...");
            defer.resolve(client);
          })
          .catch(() => {
            raiseNoteAuthenticatedError();
          });
      } else {
        raiseNoteAuthenticatedError();
      }
    }
  } catch (error) {
    defer.reject(error);
  }
};

const HTTPKit = {
  setClientToken,
  isReady: defer,
  get: (url, options) => {
    return client.get(url, options);
  },
  post: (url, payload) => {
    return client.post(url, payload);
  },
  put: (url, payload) => {
    return client.put(url, payload);
  },
  patch: (url, payload) => {
    return client.patch(url, payload);
  },
  delete: (url) => {
    return client.delete(url);
  },
};

export default HTTPKit;
