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
import { useState } from 'react'

const Home = () => {
    const { append, isLoading, messages, input, handleInputChange, handleSubmit, stop } = useChat()
    const [weatherData, setWeatherData] = useState(null)

    const noMessages = !messages || messages.length === 0

    const handlePromptClick = (promptText) => {
    
        const weatherInfo = weatherData
            ? ` The weather in ${weatherData.city} is currently ${weatherData.temperature}°C with ${weatherData.description}.`
            : '';
        
        const combinedPrompt = promptText + weatherInfo;
        
        const message: Message = {
            id: uuidv4(),
            content: promptText,
            role: 'user'
        }
        console.log(message)
        append(message)
    }

    const handleWeatherData = (data) => {
        setWeatherData(data)
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* App Logo */}
            <div className="flex items-center justify-center py-4">
                <Image src={appLogo} width="150" height="150" alt="app logo" />
            </div>
            <div className='absolute top-4 right-6'>
                <WeatherInfo onWeatherData={handleWeatherData} />
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
                                    <div className="flex justify-between">
                                        <LoadingBubble />
                                        <button type="button" className="btn btn-circle btn-outline text-gray-400" onClick={() => stop()}> <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        </button>
                                    </div>
                                
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
