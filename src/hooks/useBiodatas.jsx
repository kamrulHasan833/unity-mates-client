import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
const useBiodatas = () => {
  const axiosPublic = useAxiosPublic();
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);

  const {
    data: biodatas = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/unity-mates/v1/biodatas?limit=${limit}&&skip=${skip}`
      );

      return res.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch, skip, limit]);
  return { biodatas, isLoading, setSkip, setLimit };
};

export default useBiodatas;
