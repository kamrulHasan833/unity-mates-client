const checkStrinOrNumber = (value) => {
  const newValue =
    typeof value === "string" || typeof value === "number"
      ? value
      : value.value;

  return newValue;
};

export default checkStrinOrNumber;
