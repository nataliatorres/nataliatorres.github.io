import { useEffect, type RefObject } from 'react'

const useScrollReveal = (ref: RefObject<HTMLElement | null>) => {
    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0]
            if (entry?.isIntersecting) {
                entry.target.classList.add('reveal-visible')
                observer.unobserve(entry.target)
            }
        },
        { threshold: 0.1 }
        )
    if (ref.current) observer.observe(ref.current)
            return () => observer.disconnect()
    }, [])
}

export default useScrollReveal