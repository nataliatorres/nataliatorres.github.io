import { useState } from 'react'

const CONTACT_API_URL = 'https://nataliasportfolioapi.netlify.app/.netlify/functions/contact'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState<Status>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')

        try {
        const res = await fetch(CONTACT_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        })

        if (!res.ok) throw new Error('Failed to send')

        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
        } catch {
        setStatus('error')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full max-w-md mx-auto mt-4'>
        <input
            type='text'
            placeholder='Your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='px-4 py-3 rounded-lg border-2 border-[#909560] bg-white/50 text-[#4F5030] placeholder-[#4F5030]/60 focus:outline-none focus:border-[#CA9248]'
        />
        <input
            type='email'
            placeholder='Your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='px-4 py-3 rounded-lg border-2 border-[#909560] bg-white/50 text-[#4F5030] placeholder-[#4F5030]/60 focus:outline-none focus:border-[#CA9248]'
        />
        <textarea
            placeholder='Your message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className='px-4 py-3 rounded-lg border-2 border-[#909560] bg-white/50 text-[#4F5030] placeholder-[#4F5030]/60 focus:outline-none focus:border-[#CA9248] resize-none'
        />
        <button
            type='submit'
            disabled={status === 'submitting'}
            className='px-6 py-3 rounded-lg bg-[#4F5030] text-[#DFD3BD] font-semibold transition-transform duration-200 hover:scale-105 hover:bg-[#CA9248] disabled:opacity-50 disabled:hover:scale-100'
        >
            {status === 'submitting' ? 'Sending...' : 'Send message'}
        </button>

        {status === 'success' && (
            <p className='text-[#4F5030] text-center'>Thanks for reaching out! I'll get back to you soon.</p>
        )}
        {status === 'error' && (
            <p className='text-red-700 text-center'>Something went wrong. Please try again or reach out via LinkedIn.</p>
        )}
        </form>
    )
}

export default ContactForm