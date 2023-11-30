import axios from "axios";
const axiosPrivate = axios.create({
  baseURL: "https://unity-mates-server.vercel.app",
});

const useAxiosPrivate = () => {
  axiosPrivate.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");

      config.headers.Authorization = token;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axiosPrivate;
};

export default useAxiosPrivate;
