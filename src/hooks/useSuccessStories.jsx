import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
const useSuccessStories = () => {
  const axiosPublic = useAxiosPublic();
  const { data: successStories, isLoading } = useQuery({
    queryKey: ["success-story"],
    queryFn: async () => {
      const res = await axiosPublic.get("/unity-mates/v1/success-stories");

      return res.data;
    },
  });

  return { successStories, isLoading };
};

export default useSuccessStories;
