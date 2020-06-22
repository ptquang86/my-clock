import React, { useEffect, useState } from "react";

import Clock from "./Clock";
import useTheme from "./hooks/use-theme";
import usePageVisibility from "./hooks/use-page-visibility";
import { useViewport } from "./hooks/use-viewport";

import "./App.css";

const TIMEOUT = 1000;

function App() {
    useTheme();
    useViewport();

    const { isPageVisible } = usePageVisibility();
    const [time, setTime] = useState(new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(() => new Date().getTime());
        }, TIMEOUT);
        return () => clearInterval(interval);
    }, [isPageVisible]);

    useEffect(() => {
        if (isPageVisible) {
            document.title = "My Clock";
        } else {
            document.title = "My Clock - Back to me :(";
        }
        // TODO: CLEAR INTERVAL ON VISIBILITY CHANGED
    }, [isPageVisible]);

    return <Clock time={time} />;
}

export default App;
