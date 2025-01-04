import React from 'react'

const Bubble = ({ msg }) => {

    const { content, role } = msg
    
    return (
        <div className={`flex flex-row ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
                className={`max-w-xs p-3 rounded-lg text-white ${role === 'user' ? 'bg-blue-500' : 'bg-gray-500'
                    }`}
            >
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Bubble