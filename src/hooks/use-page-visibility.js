// https://gist.github.com/viclafouch/52a8a6409c14220492d0183f509c76cd
import { useState, useLayoutEffect } from "react";

function usePageVisibility() {
    const [isPageVisible, setIsPageVisible] = useState(!document.hidden);

    useLayoutEffect(() => {
        const handleVisibility = () => {
            setIsPageVisible(!document.hidden);
        };
        document.addEventListener("visibilitychange", handleVisibility);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, []);

    return { isPageVisible };
}

export default usePageVisibility;
