import useDocumentSizes from "../../hooks/useDocumentSizes";
import SectionHeader from "../Shared/SectionHeader";
import SectionWrapper from "../Shared/SectionWrapper";
import SuccessCount from "../Shared/SuccessCount";
const SuccessCouters = () => {
  const { sizes, isLoading } = useDocumentSizes();

  return (
    <section>
      <SectionWrapper>
        <SectionHeader title="success counter" />
        {isLoading ? (
          <p>loading..</p>
        ) : !isLoading && sizes.length === 0 ? (
          <p>no data</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {" "}
            {sizes.map((size, id) => (
              <SuccessCount key={id} count={size} />
            ))}
          </div>
        )}
      </SectionWrapper>
    </section>
  );
};

export default SuccessCouters;
