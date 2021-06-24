import React, { useMemo } from 'react'
import { useMonacoEditor } from '../../../../hooks/useMonacoEditor'
import { InlineScriptProps } from './interfaces'

export const InlineScript: React.FC<InlineScriptProps> = ({
  active,
  source,
}) => {
  /**
   * Editor
   */

  // const saveEditorContent = useCallback((data: string) => {
  //   console.log('saveEditorContent data', data)
  // }, [])

  // const updateFile = useCallback((data: string) => {
  //   console.log('updateFile data', data)
  // }, [])

  const { editor } = useMonacoEditor({
    active,
    editorProps: {
      contents: source,
      // ext: 'css',
      // saveEditorContent,
      // updateFile,
      language: 'javascript',
    },
  })

  return useMemo(() => {
    return <>{editor}</>
  }, [editor])
}
