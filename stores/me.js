"use client";
import APIKit from "@/common/helpers/APIKit";
import { action, observable, computed, makeObservable, toJS } from "mobx";

class MeStore {
  me_ = null;
  we_ = null;

  constructor() {
    makeObservable(this, {
      me_: observable,
      me: computed,
      we_: observable,
      we: computed,

      setMe: action,
      setWe: action,

      logout: action,
    });
  }

  fetch = async () => {
    if (this.isLoading) return;

    this.isLoading = true;
    try {
      const { data } = await APIKit.auth.getMe();
      this.setMe(data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    } finally {
      this.isLoading = false;
    }
  };

  // ACTIONS
  setMe = (me) => {
    this.me_ = this.me_ ? Object.assign(this.me_, me) : me;
  };

  setWe = (we) => {
    this.we_ = this.we_ ? Object.assign(this.we_, we) : we;
  };

  // GETTERS
  get me() {
    if (!this.me_ && !this.isLoading) {
      this.fetch(); // Auto fetch if no data
    }
    return toJS(this.me_);
  }

  get we() {
    return toJS(this.we_);
  }

  logout = () => {
    this.me_ = null;
    localStorage.removeItem("@AUTH_TOKEN"); // <-- clear token
  };

  destroy() {
    // Custom cleanup logic if needed
    console.log("Store destroyed");
  }
}

export default new MeStore();
