export const getBiodataFromLocalstorage = () => {
  const jsonformatedBiodatas = localStorage.getItem("viewed_biodatas");

  const biodatas = jsonformatedBiodatas ? JSON.parse(jsonformatedBiodatas) : [];
  let locataStorageBiodatas;
  if (biodatas && biodatas.length > 0) {
    locataStorageBiodatas = biodatas;
  } else {
    locataStorageBiodatas = [];
  }
  return locataStorageBiodatas;
};
const biodataSeclectForLocalStorage = (newBiodata) => {
  const locataStorageBiodatas = getBiodataFromLocalstorage();
  const existedBiodata = locataStorageBiodatas.find(
    (biodata) => biodata._id === newBiodata._id
  );
  let biodatasForLocalStorage;
  const isExist =
    existedBiodata && (existedBiodata._id === newBiodata._id) > 0
      ? true
      : false;

  if (isExist) {
    const filteredBiodatas = locataStorageBiodatas.filter(
      (biodata) => biodata._id !== newBiodata._id
    );
    filteredBiodatas.unshift({
      ...newBiodata,
      viewedAt: Date.now(),
    });
    biodatasForLocalStorage = filteredBiodatas;
  } else {
    locataStorageBiodatas.unshift({
      ...newBiodata,
      viewedAt: Date.now(),
    });
    biodatasForLocalStorage = locataStorageBiodatas;
  }
  return biodatasForLocalStorage;
};

const setBiodatToLocalStorage = (newBiodatas) => {
  const biodatasForLocalStorage = JSON.stringify(
    biodataSeclectForLocalStorage(newBiodatas)
  );

  localStorage.setItem("viewed_biodatas", biodatasForLocalStorage);
};
const useLocalstorageBiodata = () => {
  return setBiodatToLocalStorage;
};

export default useLocalstorageBiodata;
