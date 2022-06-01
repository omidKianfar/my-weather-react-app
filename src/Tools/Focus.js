import { useRef, useEffect } from "react";

// Focus in input city
export const Focus = ({ city }) => {
  const refCity = useRef();

  useEffect(() => {
    if (!city) refCity.current.focus();
  });

  return refCity;
};
