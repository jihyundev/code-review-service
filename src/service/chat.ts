import type { ChatChoice, ChatGPTResponse } from "@/types/openai-types";
import { isError } from "@/utils/typeUtils";

export const connectChatGPT = async (input: string): Promise<ChatGPTResponse> => {
    try {
        const res: ChatChoice = await fetch('/api/openai/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({content: input}), // 서버가 예상하는 형식에 맞춰 데이터 전송
        });

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        }

        return res.json()
    } catch (error) {
        if (isError(error)) {
            return {
                error: error.message || 'An error occurred'
            }
        }
        return {
            error: error as string
        }
    }
}