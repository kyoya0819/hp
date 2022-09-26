import { useCallback, useEffect, useRef } from "react";

const useAnimationFrame = (callback: () => void) => {
    const reqIdRef = useRef<number>();

    const animation = useCallback(() => {
        callback();
        reqIdRef.current = requestAnimationFrame(animation);
    }, [callback]);

    useEffect(() => {
        reqIdRef.current = requestAnimationFrame(animation);

        return () => {
            if (reqIdRef.current)
                return cancelAnimationFrame(reqIdRef.current);
        };
    }, [animation]);
};
export default useAnimationFrame;