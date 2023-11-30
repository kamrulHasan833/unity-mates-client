import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";
const useSingleBiodataByEmail = () => {
  const { user, loading } = useAuth();
  const email = user?.email;
  const axiosPrivate = useAxiosPrivate();
  const {
    data: biodata,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["biodata"],
    enabled: !loading && email ? true : false,
    queryFn: async () => {
      const res = await axiosPrivate.get(
        `/unity-mates/v1/biodatas/single?email=${email}`
      );
      return res?.data;
    },
  });

  return { biodata, isLoading, refetch };
};

export default useSingleBiodataByEmail;
