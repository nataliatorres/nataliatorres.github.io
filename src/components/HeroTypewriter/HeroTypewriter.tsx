import { useState, useEffect } from 'react'

const text: string = "Hi, I'm Natalia"

const HeroTypewriter = () => {
  const [displayed, setDisplayed] = useState<string>('')
  const [index, setIndex] = useState<number>(0)
  const [done, setDone] = useState<boolean>(false)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      setDone(true)
    }
  }, [index])

  return (
    <div className='min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#4F5030]'>
      <h1 className='text-8xl text-[#DFD3BD]'>
        {displayed}
        <span
          className={`inline-block w-0.75 h-[1em] bg-white ml-1 align-middle ${
                    done ? 'animate-blink' : 'opacity-100'
                }`}
        />
      </h1>

      <style>{`
            @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
            }
            .animate-blink {
            animation: blink 1s step-end infinite;
            }
        `}
      </style>
    </div>
  )
}

export default HeroTypewriter
