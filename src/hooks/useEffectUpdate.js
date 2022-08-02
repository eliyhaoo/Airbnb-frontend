import { useEffect, useRef } from "react"

export const useEffectUpdate = (cb, dependices) => {
    const isMounted = useRef(false)

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
            return
        }
        cb()
    }, [dependices])
}