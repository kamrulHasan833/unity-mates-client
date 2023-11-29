import PropTypes from "prop-types";
import { useEffect } from "react";
import useQueryBiodatas from "../../hooks/useQueryBiodatas";
import Biodata from "../Shared/Biodata";
import SectionHeader from "../Shared/SectionHeader";
const BiodataDetailsRight = ({ biodata_type }) => {
  const { queryBiodatas, isLoading, setSting } = useQueryBiodatas();
  useEffect(() => {
    if (!isLoading) {
      setSting(`?biodataType=${biodata_type}`);
    }
  }, [biodata_type, setSting, isLoading]);

  return (
    <section>
      <SectionHeader title="Related Biodatas" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {isLoading ? (
          <p>loading...</p>
        ) : !isLoading && !queryBiodatas?.length ? (
          <p>no biodatas found</p>
        ) : (
          queryBiodatas.map((biodata) => (
            <Biodata key={biodata._id} biodata={biodata} />
          ))
        )}
      </div>
    </section>
  );
};

BiodataDetailsRight.propTypes = {
  biodata_type: PropTypes.string,
};

export default BiodataDetailsRight;
