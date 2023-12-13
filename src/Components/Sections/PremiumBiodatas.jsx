import { useQuery } from "@tanstack/react-query";

import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

import Biodata from "../Shared/Biodata";
import LoadingSpiner from "../Shared/LoadingSpiner";
import Nodata from "../Shared/Nodata";
import SectionHeader from "../Shared/SectionHeader";
import SectionWrapper from "../Shared/SectionWrapper";
const PremiumBiodatas = () => {
  const axiosPublic = useAxiosPublic();

  const { loading } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["premium-biodata"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/unity-mates/v1/biodatas/query?memberType=premium&skip=0&&limit=8`
      );
      return res.data;
    },
  });

  return (
    <section>
      <SectionWrapper>
        <SectionHeader title="Premium members" />
        {isLoading || loading ? (
          <LoadingSpiner />
        ) : !isLoading && data?.length === 0 ? (
          <Nodata />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data?.map((biodata) => (
              <Biodata key={biodata._id} biodata={biodata} />
            ))}
          </div>
        )}
      </SectionWrapper>
    </section>
  );
};

export default PremiumBiodatas;
