import { useEffect } from "react";
import { useCurrentPage } from "../../shared/routing/routerUtils.ts";

let savedScrollY = 0;

const handleScroll = () => {
  savedScrollY = window.scrollY;
  console.log(window.scrollY);
};

export default function ScrollToTop({ children }: { children: React.ReactNode }) {
  const currentPage = useCurrentPage();

  useEffect(() => {
    if (currentPage.scrollOptions === "never") {
      window.scrollTo(0, savedScrollY);
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  return <div onClick={handleScroll}>{children}</div>;
}
