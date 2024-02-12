'use client'

import CodeEditor from "@/components/CodeEditor";
import { connectChatGPT } from "@/service/chat";

export default function CodeSubmit() {

    const onConnectGPT = async (code: string) => {
        const response = await connectChatGPT(code)
        const { message } = response
        if ('role' in message && message.role === 'assistant') {
            window.alert(message.content)
        }
    }

    return (
        <>
            <CodeEditor onSubmitCode={onConnectGPT} />
        </>
    )
}