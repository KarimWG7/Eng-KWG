import React, { useEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handlesResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handlesResize);
    return () => {
      window.removeEventListener("resize", handlesResize);
    };
  }, []);
  return width;
};

export default useWidth;
