'use client'

import Image from 'next/image'
import appLogo from './assets/logo.png'
import { useChat } from 'ai/react'
import { Message } from 'ai'
import PromptSuggestionRow from './components/PromptSuggestionRow'
import LoadingBubble from './components/LoadingBubble'
import Bubble from './components/Bubble'

import { v4 as uuidv4 } from 'uuid';

import WeatherInfo from './components/Weather'

const Home = () => {
    const { append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

    const noMessages = !messages || messages.length === 0

    const handlePromptClick = (promptText) => {
        const message: Message = {
            id: uuidv4(),
            content: promptText,
            role: 'user'
        }
        append(message)
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* App Logo */}
            <div className="flex items-center justify-center py-4">
                <Image src={appLogo} width="150" height="150" alt="app logo" />
            </div>
            <div className='absolute top-4 right-6'>
                <WeatherInfo  />
    </div>
            {/* Chat Container */}
            <section className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-6 space-y-4">

                {/* Chat Messages */}
                <div className="max-h-full space-y-4 p-4 flex flex-col items-center">
                    {noMessages ? (
                        <>
                            <div className="text-gray-600 overflow-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis, orci ut vestibulum euismod, felis risus mattis orci, ut commodo justo ligula vel libero.</div>
                            
                            <PromptSuggestionRow onPromptClick={handlePromptClick} />
                           
                        </>
                    ) : (
                            <div className='flex flex-col gap-4 max-h-screen overflow-y-auto overflow-x-hidden'>
                            {/* Loop over messages and show them as bubbles */}
                            {messages.map((message, index) => <Bubble key={`message-${index}`} msg={message} />)}
                            {isLoading && (
                                <LoadingBubble />
                            )}

                        </div>
                    )}
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                    <input
                        onChange={handleInputChange}
                        value={input}
                        placeholder="Ask me something..."
                        className="w-full p-3 bg-gray-100 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Send
                    </button>
                </form>
            </section>
        </main>
    )
}

export default Home
