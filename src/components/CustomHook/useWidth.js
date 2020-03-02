import { useState, useEffect } from 'react';

function useWidth() {
    const [width, setWidth] = useState(0)

    const Listener = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize',  Listener());
    }, [width])

    return [width]
}


export default useWidth