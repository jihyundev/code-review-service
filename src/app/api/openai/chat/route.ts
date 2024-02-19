import OpenAI from 'openai'
import { isError } from '@/utils/typeUtils'
import type {
  ChatCompletionCreateParams,
  ChatChoice,
} from '@/types/openai-types'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

async function createCompletions(message: string): Promise<ChatChoice> {
  const params: ChatCompletionCreateParams = {
    messages: [{ role: 'user', content: message }],
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
  }
  try {
    const chatCompletion: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create(params)
    return chatCompletion.choices[0]
  } catch (error) {
    console.error('Error creating chat completion:', error)
    throw new Error('Failed to create chat completion')
  }
}

const headers = {
  'Content-Type': 'application/json',
}

export async function POST(req: Request) {
  const { content } = await req.json()
  try {
    const completion = await createCompletions(content)
    return new Response(JSON.stringify(completion), {
      headers,
    })
  } catch (error) {
    if (isError(error)) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers,
      })
    } else {
      return new Response(
        JSON.stringify({ error: 'An unexpected error occurred' }),
        {
          status: 500,
          headers,
        },
      )
    }
  }
}
