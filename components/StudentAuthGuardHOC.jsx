"use client";
import APIKit from "@/common/helpers/APIKit";
import HTTPKit from "@/common/helpers/HTTPKits";
import { AUTH_TOKEN_KEY } from "@/common/helpers/KeyChain";
import { inject, observer } from "mobx-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const setJWTTokenAndRedirect = (token, redirector = () => {}) => {
  const onSuccess = (client) => {
    let token = client.defaults.headers.common["Authorization"];
    token = token.replace("Bearer ", "");
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    HTTPKit.isReady.resolve(client);
    redirector();
  };

  return APIKit.setClientToken(token)
    .then(onSuccess)
    .catch((error) => console.log(error));
};

function StudentAuthGuardHOC(props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [state, setState] = useState({
    isAuthenticated: false,
    hasCheckedLocalStorageToken: false,
  });

  const { meStore } = props;

  useEffect(() => {
    const fetchMe = async () => {
      const handleSuccess = ({ data }) => {
        meStore.setMe(data);
      };

      const handleFailure = (error) => {
        if (error) {
          router.push("/logout");
        }
      };

      return APIKit.auth.getMe().then(handleSuccess).catch(handleFailure);
    };
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      setJWTTokenAndRedirect(token)
        .then(fetchMe)
        .then(() => {
          router.push("/dashboard/my-courses");
        })
        .then(
          setState((prevState) => ({
            ...prevState,
            hasCheckedLocalStorageToken: true,
          }))
        )
        .catch(() => {
          router.push("/");
        });
    } else {
      console.log("error: Not authenticated");
      router.push("/");
    }
  }, [meStore, router]);

  return state.hasCheckedLocalStorageToken ? props.children : null;
}

export default inject("meStore")(observer(StudentAuthGuardHOC));
