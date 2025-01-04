import React from 'react'

const Bubble = ({ msg }) => {
    return (
        <div className={`flex flex-row ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
                className={`max-w-xs p-3 rounded-lg text-white ${msg.role === 'user' ? 'bg-blue-500' : 'bg-gray-500'
                    }`}
            >
                <p>{msg}</p>
            </div>
        </div>
    )
}

export default Bubble