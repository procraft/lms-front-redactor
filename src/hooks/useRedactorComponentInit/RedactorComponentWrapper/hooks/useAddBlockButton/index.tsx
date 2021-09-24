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
}) => {
  const [button, buttonSetter] = useState<HTMLButtonElement | null>(null)

  useEffect(() => {
    const button = document.createElement('button')

    button.className = `RedactorComponentWrapper--addBlock-button ${direction}`

    button.innerHTML = '+'

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
  }, [direction])

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
