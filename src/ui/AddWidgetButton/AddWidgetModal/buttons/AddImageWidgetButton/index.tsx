import React, { useEffect, useMemo, useState } from 'react'
import { SvgIcon } from '../../../../SvgIcon'
import { AddWidgetModalButtonStyled } from '../../styles'
import { AddWidgetButtonButtonProps } from '../interfaces'

export const AddImageWidgetButton: React.FC<AddWidgetButtonButtonProps> = ({
  closeHandler,
  object,
  addComponent,
  ...other
}) => {
  const buttonState = useState<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!buttonState[0]) {
      return
    }

    const button = buttonState[0]

    const onClick = () => {
      //

      addComponent({
        name: 'HtmlTag',
        component: 'HtmlTag',
        props: {
          tag: 'img',
          src: '',
        },
        components: [],
      })

      closeHandler()
    }

    button.addEventListener('click', onClick)

    return () => {
      button.removeEventListener('click', onClick)
    }
  }, [buttonState, object, closeHandler, addComponent])

  return useMemo(() => {
    return (
      <>
        <AddWidgetModalButtonStyled
          ref={buttonState[1]}
          role="addImage"
          {...other}
        >
          <SvgIcon>
            <path
              d="M43.5801 60.3311H42.2129V65H41.3721V55.0469H42.2129V59.6133H43.5391L47.3877 55.0469H48.4473L44.3594 59.9414L48.748 65H47.7021L43.5801 60.3311ZM54.7568 65C54.6748 64.7676 54.6224 64.4235 54.5996 63.9678C54.3125 64.3415 53.9456 64.6309 53.499 64.8359C53.057 65.0365 52.5876 65.1367 52.0908 65.1367C51.3799 65.1367 50.8034 64.9385 50.3613 64.542C49.9238 64.1455 49.7051 63.6442 49.7051 63.0381C49.7051 62.318 50.0036 61.7484 50.6006 61.3291C51.2021 60.9098 52.0384 60.7002 53.1094 60.7002H54.5928V59.8594C54.5928 59.3307 54.4287 58.916 54.1006 58.6152C53.777 58.3099 53.3031 58.1572 52.6787 58.1572C52.109 58.1572 51.6374 58.3031 51.2637 58.5947C50.89 58.8864 50.7031 59.2373 50.7031 59.6475L49.8828 59.6406C49.8828 59.0527 50.1562 58.5446 50.7031 58.1162C51.25 57.6833 51.9222 57.4668 52.7197 57.4668C53.5446 57.4668 54.194 57.6742 54.668 58.0889C55.1465 58.499 55.3926 59.0732 55.4062 59.8115V63.3115C55.4062 64.027 55.4814 64.5625 55.6318 64.918V65H54.7568ZM52.1865 64.4121C52.7334 64.4121 53.221 64.2799 53.6494 64.0156C54.0824 63.7513 54.3968 63.3981 54.5928 62.9561V61.3291H53.1299C52.3141 61.3382 51.6761 61.4886 51.2158 61.7803C50.7555 62.0674 50.5254 62.4639 50.5254 62.9697C50.5254 63.3844 50.6781 63.7285 50.9834 64.002C51.2933 64.2754 51.6943 64.4121 52.1865 64.4121ZM63.541 61.377C63.541 62.5299 63.2858 63.446 62.7754 64.125C62.265 64.7995 61.5814 65.1367 60.7246 65.1367C59.7129 65.1367 58.9382 64.7812 58.4004 64.0703V67.8438H57.5869V57.6035H58.3457L58.3867 58.6494C58.9199 57.861 59.6924 57.4668 60.7041 57.4668C61.5882 57.4668 62.2809 57.8018 62.7822 58.4717C63.2881 59.1416 63.541 60.0713 63.541 61.2607V61.377ZM62.7207 61.2334C62.7207 60.29 62.527 59.5449 62.1396 58.998C61.7523 58.4512 61.2122 58.1777 60.5195 58.1777C60.0182 58.1777 59.5876 58.2985 59.2275 58.54C58.8675 58.7816 58.5918 59.1325 58.4004 59.5928V63.1406C58.5964 63.5645 58.8766 63.888 59.2412 64.1113C59.6058 64.3346 60.0365 64.4463 60.5332 64.4463C61.2214 64.4463 61.7568 64.1729 62.1396 63.626C62.527 63.0745 62.7207 62.277 62.7207 61.2334ZM70.124 58.3008H67.4307V65H66.6104V58.3008H64.0195V57.6035H70.124V58.3008ZM76.3311 57.6035H77.1514V65H76.3311V58.9229L72.3389 65H71.5254V57.6035H72.3389V63.6875L76.3311 57.6035ZM85.0264 65H84.2061V61.6094H80.2207V65H79.4004V57.6035H80.2207V60.9189H84.2061V57.6035H85.0264V65ZM89.2305 61.6094H88.0957V65H87.2686V57.6035H88.0957V60.8848H89.2168L91.9307 57.6035H92.9629L89.9277 61.1924L93.2979 65H92.2178L89.2305 61.6094ZM99.1494 65C99.0674 64.7676 99.015 64.4235 98.9922 63.9678C98.7051 64.3415 98.3382 64.6309 97.8916 64.8359C97.4495 65.0365 96.9801 65.1367 96.4834 65.1367C95.7725 65.1367 95.196 64.9385 94.7539 64.542C94.3164 64.1455 94.0977 63.6442 94.0977 63.0381C94.0977 62.318 94.3962 61.7484 94.9932 61.3291C95.5947 60.9098 96.431 60.7002 97.502 60.7002H98.9854V59.8594C98.9854 59.3307 98.8213 58.916 98.4932 58.6152C98.1696 58.3099 97.6956 58.1572 97.0713 58.1572C96.5016 58.1572 96.0299 58.3031 95.6562 58.5947C95.2826 58.8864 95.0957 59.2373 95.0957 59.6475L94.2754 59.6406C94.2754 59.0527 94.5488 58.5446 95.0957 58.1162C95.6426 57.6833 96.3148 57.4668 97.1123 57.4668C97.9372 57.4668 98.5866 57.6742 99.0605 58.0889C99.5391 58.499 99.7852 59.0732 99.7988 59.8115V63.3115C99.7988 64.027 99.874 64.5625 100.024 64.918V65H99.1494ZM96.5791 64.4121C97.126 64.4121 97.6136 64.2799 98.042 64.0156C98.4749 63.7513 98.7894 63.3981 98.9854 62.9561V61.3291H97.5225C96.7067 61.3382 96.0687 61.4886 95.6084 61.7803C95.1481 62.0674 94.918 62.4639 94.918 62.9697C94.918 63.3844 95.0706 63.7285 95.376 64.002C95.6859 64.2754 96.0869 64.4121 96.5791 64.4121Z"
              fill="black"
            />
            <path
              d="M36.4788 38.8473L58.0999 16.9182C58.5327 16.4793 59.302 16.4816 59.7159 16.923L85.3905 44.3038"
              stroke="black"
            />
            <path
              d="M74 32.431L81.2173 26.1548C81.6559 25.7734 82.3622 25.7923 82.76 26.1961L100.994 44.7044"
              stroke="black"
            />
            <rect
              x="36.5"
              y="8.5"
              width="68"
              height="36"
              rx="2.5"
              stroke="black"
            />
          </SvgIcon>
        </AddWidgetModalButtonStyled>
      </>
    )
  }, [buttonState, other])
}
