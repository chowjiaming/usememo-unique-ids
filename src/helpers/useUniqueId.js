import { useMemo } from "react";
const shortid = require("shortid");

const useUniqueId = () => {
  const id = useMemo(() => shortid.generate(), []);
  return (suffix) => `${id}_${suffix}`;
};

export default useUniqueId;
