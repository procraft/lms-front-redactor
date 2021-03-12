import React, { useMemo } from 'react'
import { ScriptProps } from './interfaces'

const Script: React.FC<ScriptProps> = ({ src, innerHTML, ...other }) => {
  // const [inited, setInited] = useState(false)

  // const [tag, ref] = useState<HTMLScriptElement | null>(null)

  // useEffect(() => {
  //   if (inited || !tag || !src) {
  //     return
  //   }

  //   const script = document.createElement('script')

  //   Object.assign(script, {
  //     src,
  //     innerHTML,
  //     ...other,
  //   })

  //   try {
  //     tag.replaceWith(script)
  //   } catch (error) {
  //     // eslint-disable-next-line no-console
  //     console.log('script error', error)
  //   }

  //   setInited(true)
  // }, [inited, innerHTML, other, src, tag])

  return useMemo(
    () => (
      <script
        {...other}
        dangerouslySetInnerHTML={{
          __html: innerHTML || '',
        }}
        // ref={ref}
        src={src}
      />
    ),
    [innerHTML, other, src]
  )
}

export default Script
