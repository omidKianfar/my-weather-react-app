import { useRef, useEffect } from "react";

export const Focus = ({ city }) => {
  const refCity = useRef();

  useEffect(() => {
    if (!city) refCity.current.focus();
  });

  return refCity;
};
