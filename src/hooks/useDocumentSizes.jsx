import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const useDocumentSizes = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading } = useQuery({
    queryKey: ["document-sizes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/unity-mates/v1/biodatas/size");
      return res.data;
    },
  });

  return { sizes: data, isLoading };
};

export default useDocumentSizes;
