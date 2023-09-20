const toCapitalised = (string) => {
  return [...string][0].toUpperCase() + [...string].slice(1).join("");
};

export default toCapitalised;
