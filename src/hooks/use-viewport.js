// https://gist.github.com/viclafouch/7a5423f1ab76b22c253d3ff7c0e2c500
import { useState, useEffect, useLayoutEffect } from "react";

export const DESKTOP = "desktop";
export const MOBILE = "mobile";
export const TABLET = "tablet";

const getDevice = (width) => {
    if (width < 768) return MOBILE;
    else if (width < 992) return TABLET;
    else return DESKTOP;
};

export function useViewport() {
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        device: getDevice(window.innerWidth),
    });

    useEffect(() => {
        const handleResize = () =>
            setViewport({
                width: window.innerWidth,
                device: getDevice(window.innerWidth),
            });
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useLayoutEffect(() => {
        document.documentElement.setAttribute("data-viewport", viewport.device);
    }, [viewport]);

    return { viewport };
}
