import React, { useEffect, useRef } from 'react'

type RawHtmlIslandProps = {
  html: string
  className?: string
  executeScripts?: boolean
}

export function RawHtmlIsland({
  html,
  className,
  executeScripts = false,
}: RawHtmlIslandProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    // Если нужны <script> внутри пользовательского HTML:
    // script из innerHTML сам по себе обычно не исполняется,
    // поэтому заменяем их на реальные DOM script-элементы.
    if (executeScripts) {
      const scripts = Array.from(root.querySelectorAll('script'))

      for (const oldScript of scripts) {
        const newScript = document.createElement('script')

        for (const attr of Array.from(oldScript.attributes)) {
          newScript.setAttribute(attr.name, attr.value)
        }

        newScript.textContent = oldScript.textContent
        oldScript.parentNode?.replaceChild(newScript, oldScript)
      }
    }
  }, [html, executeScripts])

  return (
    <div
      ref={rootRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
      suppressHydrationWarning
    />
  )
}
