'use client'

import Image from 'next/image'
import appLogo from './assets/logo.png'
import { useChat } from 'ai/react'
import { Message } from 'ai'

const Home = () => {
    const { append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

    const noMessages = false

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* App Logo */}
            <div className="flex items-center justify-center py-6">
                <Image src={appLogo} width="150" height="150" alt="app logo" />
            </div>
            
            {/* Chat Container */}
            <section className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-6 space-y-4">
                
                {/* Chat Messages */}
                <div className="overflow-y-auto max-h-96 space-y-4 p-4">
                    {noMessages ? (
                        <>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis, orci ut vestibulum euismod, felis risus mattis orci, ut commodo justo ligula vel libero.</p>
                            <br />
                            {/* <PromptSuggestionRow /> */}
                        </>
                    ) : (
                        <>
                            {/* Loop over messages and show them as bubbles */}
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`max-w-xs p-3 rounded-lg text-white ${
                                            msg.role === 'user' ? 'bg-blue-500' : 'bg-gray-500'
                                        }`}
                                    >
                                        <p>{msg.content}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="max-w-xs p-3 bg-gray-300 text-gray-600 rounded-lg">
                                        <p>Loading...</p>
                                    </div>
                                </div>
                            )}
                        </>
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
