import React from 'react'

const Bubble = ({ msg }) => {

    const { content, role } = msg
    
    return (
        <div className={`flex flex-row p-3 chat ${role === 'user' ? 'justify-end chat-end' : 'justify-start chat-start'}`}>
            <div
                className={`chat-bubble p-3 rounded-lg text-white ${role === 'user' ? 'bg-primary' : 'bg-gray-400'
                    }`}
            >
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Bubble