import { useEffect, useState } from 'react'

import { useAddBlockButtonProps } from './interfaces'

/**
 * Кнопка добавления нового блока
 */
export const useAddBlockButton: (props: useAddBlockButtonProps) => void = ({
  wrapper,
  hovered,
  direction,
  onClick,
  parent,
  active,
}) => {
  const [button, buttonSetter] = useState<HTMLButtonElement | null>(null)

  useEffect(() => {
    /**
     * Если нет родительского компонента, то не выводим кнопку, так как сейчас она расчитана
     * только на добавление в родителя
     */
    if (!parent || active) {
      return
    }

    const button = document.createElement('button')

    button.className = `RedactorComponentWrapper--addBlock-button ${direction}`

    button.innerHTML = `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 472.615 472.615" xml:space="preserve">
<g>
	<g>
		<polygon points="278.565,194.051 278.565,0 194.053,0 194.053,194.051 0,194.051 0,278.564 194.053,278.564 194.053,472.615 
			278.565,472.615 278.565,278.564 472.615,278.564 472.615,194.051 		"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
    `

    // const onMouseOver = (event: MouseEvent) => {
    //   console.log('button onMouseEvent', event)

    //   event.preventDefault()
    //   event.stopPropagation()
    // }

    // // button.addEventListener
    // button.addEventListener('mouseenter', onMouseOver)
    // button.addEventListener('mouseover', onMouseOver)
    // button.addEventListener('mouseleave', onMouseOver)

    buttonSetter(button)

    return () => {
      buttonSetter(null)
    }
  }, [direction, parent, active])

  useEffect(() => {
    if (!button) {
      return
    }

    button.addEventListener('click', onClick)

    return () => {
      button.removeEventListener('click', onClick)
    }
  }, [button, onClick])

  useEffect(() => {
    if (!button || !hovered || !direction) {
      return
    }

    // const {
    //   // offsetTop: wrappOroffsetTop,
    //   // offsetLeft: wrappeOoffsetLeft,
    //   offsetWidth: wrapperOffsetWidth,
    // } = wrapper

    // const {
    //   offsetWidth,
    // } = element;

    // console.log('element offsetWidth', offsetWidth);

    // const style: Partial<CSSStyleDeclaration> = {
    //   position: 'absolute',
    //   top: '0px',
    //   left: wrapperOffsetWidth / 2 + 'px',
    // }

    // Object.assign(element.style, style)

    wrapper.appendChild(button)

    return () => {
      wrapper.removeChild(button)
    }
  }, [button, hovered, wrapper, direction])

  return
}
