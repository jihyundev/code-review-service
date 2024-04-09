'use client'

import CodeEditor from '@/components/CodeEditor'
import { connectChatGPT } from '@/service/chat'
import { useModal } from '@/components/Modal/useModal'
import { useState } from 'react'

export default function CodeSubmit() {
  const { open, close, Modal } = useModal()
  const [message, setMessage] = useState('')

  const onConnectGPT = async (code: string) => {
    const response = await connectChatGPT(code)
    const { message } = response
    if ('role' in message && message.role === 'assistant') {
      setMessage(message.content)
      open()
    }
  }

  return (
    <>
      <CodeEditor onSubmitCode={onConnectGPT} />
      <Modal>
        <p>{message}</p>
      </Modal>
    </>
  )
}
