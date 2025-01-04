// import OpenAI from 'openai'
// import { AIStream, StreamingTextResponse } from 'ai'
// import { NextResponse } from 'next/server'

// const { OPENAI_API_KEY } = process.env

// const openai = new OpenAI({ apiKey: OPENAI_API_KEY })

// export async function POST(req: Request) {
//   try {
//     const { messages } = await req.json()
//     const latestMessage = messages[messages?.length - 1]?.content

//     // const template = {
//     //   role: 'developer',
//     //   content: [{
//     //     "type": "text",
//     //     "text": `
//     //         You are an AI assistant who know everything about yin yoga. Format responses using markdown where applicable. 
//     //       `
//     //   }]
//     // }

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o",
//       stream: true,
//       messages: [
//         {
//           role: 'developer',
//           content: "You are an AI assistant who know everything about yin yoga. Format responses using markdown where applicable."        
//         },
//         {
//           "role": "user",
//           "content":  latestMessage          
//         }]
//     }
//     )

//     const stream = AIStream(response)
//     return new StreamingTextResponse(stream)
//   } catch (error) {
//     console.error('Error handling request', error)
//     // Handle any errors that might occur during the process
//     return NextResponse.json(
//       { error: 'Something went wrong. Please try again later.' },
//       { status: 500 }
//     );
//   }
// }
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const latestMessage = messages[messages?.length - 1]?.content

    const result = streamText({
      model: openai('gpt-4o'),
      messages: [
        {
          "role": "system",
          "content": "You are an AI assistant who know everything about yin yoga. Format responses using markdown where applicable."
        },
        {
          "role": "user",
          "content": latestMessage
        }]
    })
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error getting response from openAI", error)
  }

}