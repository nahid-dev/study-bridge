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

  fetch = () => {
    // Fetch user data
    const onSuccess = ({ data }) => {
      this.setMe(data);
    };
    const onFailure = (error) => {
      console.error("Failed to fetch user data:", error);
    };
    return APIKit.auth.getMe().then(onSuccess).catch(onFailure);
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
    return toJS(this.me_);
  }

  get we() {
    return toJS(this.we_);
  }

  logout = () => {
    this.me_ = null;
  };
}

export default new MeStore();
