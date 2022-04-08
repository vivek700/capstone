import { useEffect, useRef, useState } from "react";


export default function useHover() {

    const [hovered, setHovered] = useState(false)

    function enter() {
        setHovered(true)
    }
    function leave() {
        setHovered(false)
    }

    const refElement = useRef(null)

    useEffect(() => {

        const ref = refElement.current
        ref.addEventListener('mouseenter', enter)
        ref.addEventListener('mouseleave', leave)
        
        return () => {
            ref.removeEventListener('mouseenter', enter)
            ref.removeEventListener('mouseleave', leave)
            
        }

    },[])
    return [hovered, refElement ]


}