import axios from "axios";
import useAuth from "./useAuth";
const axiosPrivate = axios.create({
  baseURL: "https://unity-mates-server.vercel.app",
});
const useAxiosPrivate = () => {
  const { logout } = useAuth();

  // Add a request interceptor
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
  // Add a response interceptor
  axiosPrivate.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      // const errorStatus = error?.response?.status;
      // const isUnauthorized = errorStatus === 401 || errorStatus === 403;
      // if (isUnauthorized) {
      //   logout()
      //     .then(() => {})
      //     .catch(() => {});
      // }
      return Promise.reject(error);
    }
  );
  return axiosPrivate;
};

export default useAxiosPrivate;
