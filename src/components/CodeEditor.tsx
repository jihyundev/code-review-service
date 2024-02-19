'use client'

import { useRef, useState } from 'react'
import Editor from '@monaco-editor/react'
import RadioSelect from '@/components/RadioSelect'
import Loading from '@/components/Loading'

const LANGUAGES = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'kotlin', label: 'Kotlin' },
  { value: 'go', label: 'Go' },
  { value: 'php', label: 'PHP' },
]

type CodeEditorProps = {
  onSubmitCode: (value: any) => void
}

export default function CodeEditor({ onSubmitCode }: CodeEditorProps) {
  const editorRef = useRef(null)
  const [language, setLanguage] = useState<string>()

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor
  }

  const selectLanguage = (language: string) => {
    setLanguage(language)
  }

  const onSubmit = () => {
    const value = editorRef.current.getValue()
    onSubmitCode(value)
  }

  return (
    <>
      <p className="text-base my-1">Select your language here.</p>
      <RadioSelect
        options={LANGUAGES}
        name={'language select radio group'}
        onSelect={selectLanguage}
      />
      <Editor
        onMount={handleEditorDidMount}
        height="50vh"
        language={language}
        defaultLanguage="javascript"
        defaultValue="// put your code here"
        theme="vs-dark"
        loading={<Loading />}
      />
      <button onClick={onSubmit} className={'h-10 my-4 p-1 outline'}>
        Submit Code
      </button>
    </>
  )
}
