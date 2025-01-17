import React from 'react'
import PromptSuggestion from './PromptSuggestion'

const PromptSuggestionRow = ({onPromptClick}) => {
  
  const prompts = [
    "Can you help me create a Yin Yoga session for beginners?",
    "I want to design a Yin Yoga class focusing on hip openers. Can you suggest some poses?",
    "I’m designing a session for relaxation and stress relief—what Yin poses would you recommend?",
    "Can you create a Yin Yoga sequence for a class with a focus on balancing the energy and grounding?",
    "Can you create a quick 20-minute Yin Yoga session for me?"
  ]
  return (
    <div className='flex flex-row gap-4 w-full overflow-x-scroll overflow-y-hidden'>{prompts.map((prompt, index) => <PromptSuggestion key={`prompt-${index}`} prompt={prompt} onClick={() => onPromptClick(prompt)} />) }</div>
  )
}

export default PromptSuggestionRow