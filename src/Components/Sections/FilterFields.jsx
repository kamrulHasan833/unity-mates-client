import PropTypes from "prop-types";
import Select from "react-select";
const typeOptions = [
  { value: "Biodata Types", label: "Biodatas  Types" },
  { value: "male", label: "male" },
  { value: "female", label: "female" },
];
const divisionOptions = [
  { value: "Divisions", label: "Divisions" },
  { value: "dhaka", label: "dhaka" },
  { value: "barisal", label: "barisal" },
  { value: "chattagram", label: "chattagram" },
  { value: "rangpur", label: "rangpur" },
  { value: "khulna", label: "khulna" },
  { value: "maymansign", label: "maymansign" },
  { value: "sylhet", label: "sylhet" },
];
const ageRange = [
  { value: "age ranges (years)", label: "age ranges (years)" },
  { value: "20-30", label: "20-30" },
  { value: "31-40", label: "31-40" },
  { value: "41-50", label: "41-50" },
];
const FilterFields = ({ setSelectedOption }) => {
  return (
    <div className="capitalize flex flex-wrap gap-3 justify-center">
      <Select
        defaultValue={typeOptions[0]}
        onChange={setSelectedOption}
        options={typeOptions}
      />
      <Select
        defaultValue={divisionOptions[0]}
        onChange={setSelectedOption}
        options={divisionOptions}
      />
      <Select
        defaultValue={ageRange[0]}
        onChange={setSelectedOption}
        options={ageRange}
      />
    </div>
  );
};

FilterFields.propTypes = {
  setSelectedOption: PropTypes.func,
};
export default FilterFields;
