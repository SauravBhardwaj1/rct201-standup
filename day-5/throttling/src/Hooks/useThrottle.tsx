import { useEffect, useRef, useState } from "react";

function useThrotlle<T>(value: T, interval: number = 500): T {
    const [throttledValue, setThrottledValue] = useState<T>(value);
    const lastExecuted = useRef(Date.now());

    useEffect(() => {
        if(Date.now() >= lastExecuted.current + interval) {
            lastExecuted.current = Date.now();
            setThrottledValue(value);
        } else {
            const timerId = setTimeout(() => {
                lastExecuted.current = Date.now();
                setThrottledValue(value);
            }, interval);

            return () => clearTimeout(timerId);
        }
    }, [value, interval]);

    return throttledValue;
}

export default useThrotlle;