import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BiodataDetailsLeft from "../Components/Sections/BiodataDetailsLeft";
import BiodataDetailsRight from "../Components/Sections/BiodataDetailsRight";
import SectionWrapper from "../Components/Shared/SectionWrapper";
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
      <SectionWrapper>
        {isLoading ? (
          <p>loading..</p>
        ) : !isLoading && !biodata_type ? (
          <p>no biodata found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <BiodataDetailsLeft biodata={biodata}></BiodataDetailsLeft>
            <BiodataDetailsRight biodata_type={biodata_type} />
          </div>
        )}
      </SectionWrapper>
    </main>
  );
};

export default BiodataDetails;
