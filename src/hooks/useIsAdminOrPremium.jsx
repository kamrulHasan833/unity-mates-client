import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";
const useIsAdminOrPremium = () => {
  const axiosPublic = useAxiosPrivate();
  const { user, loading } = useAuth();

  const isFetchStart = !loading && user?.email ? true : false;
  const { data } = useQuery({
    queryKey: ["is-admin"],
    enabled: isFetchStart,
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/unity-mates/v1/auth?email=${user?.email}`
      );
      return res.data;
    },
  });

  return data;
};

export default useIsAdminOrPremium;
