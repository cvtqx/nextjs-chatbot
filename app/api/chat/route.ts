import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages, customKey } = await req.json();
    //const latestMessage = messages[messages?.length - 1]?.content

    console.log('customKey', customKey)

    const result = streamText({
      model: openai("gpt-4o"),
      system: `You are an AI assistant who knows everything about yin yoga. Give answers as if you possess eternal wisdom. You will get custom key with weather information. Custom key: ${customKey}. Analyze the weather and make suggestions on yin poses and breathing techniques suitable for the weather conditions that you get. For example some poses have cooling effect which is good for hot weather, other poses have heating effect, thus are better for coldl weather. Explain why the poses are a good choice for today's weather conditions. If a question is not related to yin yoga or the previous questions respond 'Sorry, I don't know'. `,
      messages,
    });
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error getting response from openAI", error)
  }

}