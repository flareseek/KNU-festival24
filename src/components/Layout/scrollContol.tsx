import { useEffect } from "react";
import { useCurrentPage } from "../../shared/routing/routerUtils.ts";

const savedScrollYKey = "savedScrollY";

const handleScroll = () => {
  sessionStorage.setItem(savedScrollYKey, String(window.scrollY));
};

export default function ScrollToTop({ children }: { children: React.ReactNode }) {
  const currentPage = useCurrentPage();

  useEffect(() => {
    if (currentPage.scrollOptions === "never") return;
    if (currentPage.scrollOptions === "save") {
      setTimeout(
        () => window.scrollTo(0, Number(sessionStorage.getItem(savedScrollYKey)) || 0),
        500,
      );
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  return <div onClick={handleScroll}>{children}</div>;
}
