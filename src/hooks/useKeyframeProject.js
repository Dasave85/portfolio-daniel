import { useEffect, useRef, useState } from "react";

export const useKeyframeProject = () => {
  const [focusprojects, setFocusProjects] = useState(false);
  const textProjects = useRef(null);
  const handleClick = () => {
    textProjects.current.scrollIntoView({
      behavior: "smooth",
    });
    setTimeout(() => {
      setFocusProjects(true);
    }, 650);
  };

  useEffect(() => {
    setTimeout(() => {
      setFocusProjects(false);
    }, 1000);
  }, [focusprojects]);

  return {
    focusprojects,
    textProjects,
    handleClick,
  };
};
