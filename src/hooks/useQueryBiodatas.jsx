import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useQueryBiodatas = () => {
  const [string, setSting] = useState();
  const axiosPublic = useAxiosPublic();
  const { loading } = useAuth();
  const {
    data: queryBiodatas,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["query-biodatas"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/unity-mates/v1/biodatas/query${string ? string : "?name=undefined"}`
      );
      const biodatas = res.data;

      return biodatas ? biodatas : [];
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch, string]);
  return { queryBiodatas, isLoading, setSting };
};

export default useQueryBiodatas;
