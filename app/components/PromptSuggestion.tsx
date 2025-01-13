import React from 'react'

const PromptSuggestion = ({ prompt, onClick }) => {
  return (
    <button className="card bg-gray-100 w-48 flex-shrink-0 hover:bg-gray-200 hover:shadow-lg transition-all duration-300" onClick={onClick}>
      <div className="card-body">
        <p>{prompt}</p>
      </div>
    </button>
    
  )
}

export default PromptSuggestion