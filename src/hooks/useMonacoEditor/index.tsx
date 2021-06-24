/* eslint-disable no-console */
import React, { useMemo } from 'react'

import dynamic from 'next/dynamic'

const MonacoEditor = dynamic(import('./MonacoEditor'), { ssr: false })

import { useMonacoEditorProps } from './interfaces'

export const useMonacoEditor = ({
  active,
  editorProps,
}: useMonacoEditorProps) => {
  const editor = useMemo(() => {
    // const Editor = require('./Editor');

    // return <Editor
    //   code="efwefwef"
    //   onChange={console.log}
    // />

    if (!active) {
      return null
    }

    return <MonacoEditor {...editorProps} />

    // return <></>
  }, [active, editorProps])

  return useMemo(() => {
    return {
      editor,
    }
  }, [editor])
}
