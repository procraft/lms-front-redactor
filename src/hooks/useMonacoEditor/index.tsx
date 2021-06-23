import React, { useMemo } from 'react'

// import dynamic from 'next/dynamic'

// const Editor = dynamic(import('./Editor'), { ssr: false })

// import Editor from './Editor'



import { useMonacoEditorProps } from './interfaces'

export const useMonacoEditor = (props: useMonacoEditorProps) => {
  const editor = useMemo(() => {

    const Editor = require('./Editor');

    return <Editor {...props} />
  }, [props])

  return useMemo(() => {
    return {
      editor,
    }
  }, [editor])
}
