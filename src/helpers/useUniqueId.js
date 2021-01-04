import { useMemo } from "react";
const shortid = require("shortid");

const useUniqueId = () => {
  const uniqueId = useMemo(() => shortid.generate(), []);
  return (elementNameSuffix) => `${uniqueId}_${elementNameSuffix}`;
};

export default useUniqueId;
