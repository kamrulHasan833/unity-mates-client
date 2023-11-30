import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "https://unity-mates-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
