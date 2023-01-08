import { useRef } from "react";

export const useContactRef = () => {
  const contactRef = useRef(null);
  const handleClickContactButton = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return {
    contactRef,
    handleClickContactButton,
  };
};
