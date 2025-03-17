import React, { useEffect, useMemo, useState } from 'react'
import { useMonacoEditor } from '../../../src/hooks/useMonacoEditor'
import { Modal2 } from '../../../src/ui/Modal2'
import { Page } from '../_App'

export const DevMonacoPage: Page = () => {
  const [source] = useState<string>(`
  <h1 data-redactor--component="HtmlTag" data-redactor--component-tag="h1">Heading</h1><p data-redactor--component="HtmlTag" data-redactor--component-tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  `)

  const editorJsx = useMonacoEditor({
    active: true,
    language: 'html',
    source,
  })

  const [container, containerSetter] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!container) {
      return
    }

    const handler = (event: MouseEvent) => {
      // eslint-disable-next-line no-console
      console.log('handler event', event)

      event.preventDefault()
      event.stopPropagation()
    }

    container.addEventListener('click', handler)

    return () => {
      container.removeEventListener('click', handler)
    }
  }, [container])

  return useMemo(() => {
    return (
      <>
        <Modal2
          modal
          preventClickEvent
          style={{
            right: 20,
          }}
          moveable={false}
        >
          <div
            style={{
              // height: 700,
              // width: 1000,
              border: '1px solid green',
            }}
            ref={containerSetter}
          >
            {editorJsx}
          </div>
        </Modal2>
      </>
    )
  }, [editorJsx])
}
