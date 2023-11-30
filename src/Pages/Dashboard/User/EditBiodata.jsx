import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import useSingleBiodataByEmail from "../../../hooks/useSingleBiodataByEmail";
import EditBiodataForm from "./EditBiodataForm";

const EditBiodata = () => {
  const { biodata, isLoading, refetch } = useSingleBiodataByEmail();

  return (
    <section>
      <SectionWrapperSmall>
        <SectionHeader title={biodata ? "edit biodata" : "create bidata"} />
        {isLoading ? (
          <p>Loading..</p>
        ) : (
          <EditBiodataForm biodata={biodata} refetch={refetch} />
        )}
      </SectionWrapperSmall>
    </section>
  );
};

export default EditBiodata;
