import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0});
    }, [pathname]); // Mỗi khi pathname thay đổi, scroll sẽ về đầu trang

    return null;
};

export default ScrollToTop;

// { top: 0, behavior: "smooth" }