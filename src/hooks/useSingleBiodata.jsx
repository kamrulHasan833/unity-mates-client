import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useSingleBiodata = (firstId) => {
  const [id, setId] = useState(firstId);
  const axiosPrivate = useAxiosPrivate();
  const { loading } = useAuth();
  const {
    data: biodata,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["single-biodata"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPrivate.get(
        `/unity-mates/v1/biodatas/single/${id}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [id, refetch]);
  return { biodata, isLoading, setId };
};

export default useSingleBiodata;
