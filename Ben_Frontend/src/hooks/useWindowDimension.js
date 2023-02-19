import React, { useEffect, useState } from "react";

const useWindowDimension = () => {
    const [windowSize, setWidth] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const getWidth = () => setWidth({ width: window.innerWidth, height: window.innerHeight });
    

    useEffect(() => {
        window.addEventListener('resize', getWidth)
      return () => {
        window.removeEventListener('resize', getWidth)
      }
    }, [windowSize])    

    return windowSize;
}

export default useWindowDimension;
