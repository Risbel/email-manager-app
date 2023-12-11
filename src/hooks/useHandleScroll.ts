import { useCallback, useState } from "react";

type HandleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => void;

const useHandleScroll = (): {
  handleScroll: HandleScroll;
  currentSection: string | null;
  setCurrentSection: React.Dispatch<React.SetStateAction<string | null>>;
} => {
  const [currentSection, setCurrentSection] = useState<any>(null);
  const handleScroll: HandleScroll = useCallback((event, href) => {
    event.preventDefault();

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetSection = document.querySelector(href);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });

        setCurrentSection(targetSection.id);
      }
    }
  }, []);

  return { handleScroll, currentSection, setCurrentSection };
};

export default useHandleScroll;
