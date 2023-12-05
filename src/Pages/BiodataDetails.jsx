import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BiodataDetailsLeft from "../Components/Sections/BiodataDetailsLeft";
import BiodataDetailsRight from "../Components/Sections/BiodataDetailsRight";
import SuccessStories from "../Components/Sections/SuccessStories";
import LoadingSpiner from "../Components/Shared/LoadingSpiner";
import Nodata from "../Components/Shared/Nodata";
import SectionWrapper from "../Components/Shared/SectionWrapper";
import Title from "../Components/Shared/Title";
import useSingleBiodata from "../hooks/useSingleBiodata";
const BiodataDetails = () => {
  const { id } = useParams();
  const { biodata, isLoading, setId } = useSingleBiodata(id);
  const { biodata_type } = biodata ? biodata : {};
  useEffect(() => {
    if (!isLoading) {
      setId(id);
    }
  }, [id, isLoading, setId]);
  return (
    <main>
      <Title title="Biodata Details" />
      <SectionWrapper>
        {isLoading ? (
          <LoadingSpiner />
        ) : !isLoading && !biodata_type ? (
          <Nodata />
        ) : (
          <div className="grid grid-cols-1 gap-0 lg:gap-10 lg:grid-cols-2 ">
            <BiodataDetailsLeft biodata={biodata}></BiodataDetailsLeft>
            <BiodataDetailsRight biodata_type={biodata_type} />
          </div>
        )}
      </SectionWrapper>
      <SuccessStories />
    </main>
  );
};

export default BiodataDetails;
