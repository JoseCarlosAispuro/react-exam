import {useEffect, useState} from "react";

export const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0)

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return {scrollPosition}
}
