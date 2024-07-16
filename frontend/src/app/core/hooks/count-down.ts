import React, {useLayoutEffect} from "react";

export function useCountdown(timeout: number) {
    const [countdown, setCountdown] = React.useState(timeout);
    let timer: ReturnType<typeof setInterval> | undefined;

    useLayoutEffect(() => {

        const callback = () => {
            if (countdown < timeout) {
                setCountdown(timeout);
            } else if (countdown > 0) {
                setCountdown((p) => p - 1);
            } else if (timer) {
                clearInterval(timer);
            }
        };
        timer = setInterval(callback, 1000);

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, []);

    return {countdown, setCountdown};
}
