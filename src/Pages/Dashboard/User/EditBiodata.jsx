import LoadingSpiner from "../../../Components/Shared/LoadingSpiner";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import Title from "../../../Components/Shared/Title";
import useSingleBiodataByEmail from "../../../hooks/useSingleBiodataByEmail";
import EditBiodataForm from "./EditBiodataForm";

const EditBiodata = () => {
  const { biodata, isLoading, refetch } = useSingleBiodataByEmail();

  return (
    <section>
      <Title title="Edit Biodata" />
      <SectionWrapperSmall>
        <SectionHeader title={biodata ? "edit biodata" : "create bidata"} />
        {isLoading ? (
          <LoadingSpiner />
        ) : (
          <EditBiodataForm biodata={biodata} refetch={refetch} />
        )}
      </SectionWrapperSmall>
    </section>
  );
};

export default EditBiodata;
