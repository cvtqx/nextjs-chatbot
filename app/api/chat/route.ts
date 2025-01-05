// import { openai } from '@ai-sdk/openai';
// import { streamText } from 'ai';

// export const maxDuration = 30;

// export async function POST(req: Request) {
//   try {
//     const { messages } = await req.json()
//     //const latestMessage = messages[messages?.length - 1]?.content

//     const result = streamText({
//       model: openai('gpt-4o'),
//       system: "You are an AI assistant who knows everything about yin yoga. Give answers as if you possess eternal wisdom. if a question is not related to yin yoga or the previous questions respond 'Sorry, I don't know.",
//       messages,
//     })
//     return result.toDataStreamResponse();
//   } catch (error) {
//     console.error("Error getting response from openAI", error)
//   }

// }