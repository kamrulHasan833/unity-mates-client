const divisions = [
  "dhaka",
  "barisal",
  "khulna",
  "maymansign",
  "chattagram",
  "rangpur",
  "sylhet",
];

let parmanentDivisionName = [
  { value: "Parmanent Division", label: "Parmanent Division" },
];

for (let i = 0; i < divisions.length; i++) {
  parmanentDivisionName.push({
    value: divisions[i],
    label: divisions[i],
  });
}

let presentDivisionName = [
  { value: "present Division", label: "preset Division" },
];
for (let i = 0; i < divisions.length; i++) {
  presentDivisionName.push({
    value: divisions[i],
    label: divisions[i],
  });
}

let heightOption = [{ value: "height", label: "height" }];

for (let i = 153; i <= 190; i++) {
  heightOption.push({
    value: i,
    label: i,
  });
}

let weightOption = [{ value: "weight", label: "weight" }];
for (let i = 50; i <= 90; i++) {
  weightOption.push({
    value: i,
    label: i,
  });
}

let partnerHeightOption = [
  { value: "expected partner height", label: "expected partner height" },
];

for (let i = 153; i <= 190; i++) {
  partnerHeightOption.push({
    value: i,
    label: i,
  });
}

let patnerWeightOption = [
  { value: "expected partner weight", label: "expected partner weight" },
];
for (let i = 50; i <= 90; i++) {
  patnerWeightOption.push({
    value: i,
    label: i,
  });
}

const occupationOption = [
  { value: "occupation", label: "occupation" },
  { value: "student", label: "student" },
  { value: "house wife", label: "house wife" },
  { value: "job", label: "job" },
];
const biodataTypeOption = [
  { value: "biodata type", label: "biodata type" },
  { value: "male", label: "male" },
  { value: "female", label: "female" },
];

const raceOption = [
  { value: "race", label: "race" },
  { value: "muslim", label: "muslim" },
  { value: "hindu", label: "hindu" },
  { value: "christian", label: "christian" },
  { value: "buddho", label: "buddho" },
  { value: "chakma", label: "chakma" },
];

const options = {
  biodataTypeOption,
  heightOption,
  weightOption,
  occupationOption,
  raceOption,
  parmanentDivisionName,
  presentDivisionName,
  partnerHeightOption,
  patnerWeightOption,
};
export default options;
