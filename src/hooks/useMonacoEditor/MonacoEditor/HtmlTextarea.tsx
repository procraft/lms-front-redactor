import React, { useCallback } from 'react'

import { TextArea } from '@procraft/ui/dist/form/TextArea'

export const HtmlTextarea = (
  { value, onChange }: { value: string, onChange: (content: string) => void }
) => {
  const handleChange = useCallback((evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const v = evt.target.value
    onChange(v)
  }, [onChange])

  return (
    <TextArea
      onChange={handleChange}
      value={value}
      fullWidth
      style = {{ minHeight: '300px' }}
      // multiline
    />
  )
}
