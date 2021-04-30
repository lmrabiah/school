import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  //if user have value mean it's liged in else he is not
  user = null;

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    this.user = decode(token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);

      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);

      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signout = () => {
    this.user = null;
    localStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization;
  };
  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
