import axios from "axios";

export const CONFIG = {
  baseURL: "https://shop-api-exam.herokuapp.com/api",
  withCredentials: true,
  validateStatus: (status) => status < 500,
  headers: {
    "content-type": "application/json",
  },
};

const instance = axios.create(CONFIG);

export const authAPI = {
  me() {
    return instance.get("/auth/me");
  },
  logUp({ name: nickname, password, email, phone }) {
    return instance.post("/auth/sign-up", { nickname, password, email, phone });
  },
  logIn({ email, password }) {
    return instance.post("/auth/sign-in", { email, password });
  },
  logOut() {
    return instance.post("/auth/logout");
  },
};

export const sendAPI = {
  sendEmail(data){
    console.log(data)
    return instance.post("/email" , data)
  }
}

export const setInterceptor = (setUser) => {
  instance.interceptors.response.use(async (response) => {
    if (response.status === 401) {
      const refreshResponse = await axios.request({
        ...CONFIG,
        url: "/auth/refresh",
        method: "GET",
      });

      if (refreshResponse.status === 401) {
        setUser(null);
        return response;
      }

      return axios.request(response.config);
    }

    return response;
  });
};
