import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import FilterFields from "../Components/Sections/FilterFields";
import Biodata from "../Components/Shared/Biodata";
import SectionHeader from "../Components/Shared/SectionHeader";
import SectionWrapper from "../Components/Shared/SectionWrapper";
import useBiodatas from "../hooks/useBiodatas";
import useDocumentSizes from "../hooks/useDocumentSizes";
import useQueryBiodatas from "../hooks/useQueryBiodatas";

const Biodatas = () => {
  const { biodatas, setLimit, setSkip, isLoading } = useBiodatas();
  const { queryBiodatas, isLoading: isLoading3, setSting } = useQueryBiodatas();
  const { sizes, isLoading: isLoading2 } = useDocumentSizes();
  const [currentBiodatas, setCurrentBiodatas] = useState([]);
  const totalBiodatasSize = sizes ? sizes[0]?.size : 0;
  const [selectedOption, setSelectedOption] = useState({ value: "all" });

  const handleChange = (currenpage, limit) => {
    const skip = (currenpage - 1) * limit;
    setLimit(limit);
    setSkip(skip);
  };

  useEffect(() => {
    const value = selectedOption.value;
    const isAll = value === "all";
    const isAge = value === "20-30" || value === "31-40" || value === "41-50";
    const isType = value === "male" || value === "female";
    const isOthers = !isAge && !isType && !isAll;

    if (!isLoading && isAll) {
      setCurrentBiodatas(biodatas);
    }
    if (!isLoading3 && queryBiodatas && queryBiodatas.length > 0) {
      setCurrentBiodatas(queryBiodatas);
    }
    if (!isLoading3 && isAge) {
      setSting(`?age=${value}`);
    } else if (!isLoading3 && isType) {
      setSting(`?biodataType=${value}`);
    } else if (!isLoading3 && isOthers) {
      setSting(`?division=${value}`);
    }
  }, [
    biodatas,
    selectedOption,
    isLoading,
    isLoading3,
    queryBiodatas,
    setSting,
  ]);
  return (
    <section>
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-10 pb-10 md:pb-14">
          <div className="col-start-1 col-span-1 ">
            <SectionHeader title={` Filter Biodatas`}>
              <FiFilter />
            </SectionHeader>
            <div>
              {" "}
              <FilterFields setSelectedOption={setSelectedOption} />
            </div>
          </div>
          <div className="col-start-1 lg:col-start-2 col-span-1 lg:col-span-2 xl:col-span-3">
            <SectionHeader
              title={`all Biodatas ${
                selectedOption.value ? `(${selectedOption.value})` : ""
              }`}
            />
            {isLoading || isLoading2 || isLoading3 ? (
              <p>loading...</p>
            ) : !isLoading &&
              !isLoading2 &&
              !isLoading3 &&
              !currentBiodatas.length ? (
              <p>no biodatas</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentBiodatas.map((biodata) => (
                  <Biodata key={biodata._id} biodata={biodata} />
                ))}
              </div>
            )}
            {isLoading2 ? (
              <p>loading...</p>
            ) : !isLoading2 && !totalBiodatasSize ? (
              <p>no biodatas</p>
            ) : !isLoading2 &&
              totalBiodatasSize &&
              selectedOption.value === "all" ? (
              <div className="flex justify-center pt-10">
                <Pagination
                  total={totalBiodatasSize}
                  onChange={handleChange}
                  showTotal={(total, range) =>
                    `${range[0]}-${range[1]} of ${total} biodatas`
                  }
                  defaultPageSize={20}
                  defaultCurrent={1}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Biodatas;
