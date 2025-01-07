"use client";

import { configure } from "mobx";
import { Provider } from "mobx-react";
import rootStore from "@/stores/root";

export default function MobxProvider({ children }) {
  configure({
    enforceActions: "always",
  });

  return (
    <Provider rootStore={rootStore} meStore={rootStore.meStore}>
      {children}
    </Provider>
  );
}
