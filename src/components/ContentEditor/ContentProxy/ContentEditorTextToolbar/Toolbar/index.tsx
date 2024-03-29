import React, { useCallback, useEffect, useMemo, useState } from 'react'

// import ModeEditHtmlIcon from 'material-ui-icons/ModeEdit'
import FormatClearIcon from 'material-ui-icons/FormatClear'
import SelectAllIcon from 'material-ui-icons/SelectAll'
import AlignLeftIcon from 'material-ui-icons/FormatAlignLeft'
import AlignRightIcon from 'material-ui-icons/FormatAlignRight'
import AlignJustifyIcon from 'material-ui-icons/FormatAlignJustify'
import AlignCenterIcon from 'material-ui-icons/FormatAlignCenter'
import FormatBoldIcon from 'material-ui-icons/FormatBold'
import FormatItalicIcon from 'material-ui-icons/FormatItalic'
import FormatUnderlinedIcon from 'material-ui-icons/FormatUnderlined'
import FormatStrikethroughIcon from 'material-ui-icons/FormatStrikethrough'
import FormatListBulletedIcon from 'material-ui-icons/FormatListBulleted'
import FormatListNumberedIcon from 'material-ui-icons/FormatListNumbered'
import FormatIndentIncreaseIcon from 'material-ui-icons/FormatIndentIncrease'
import FormatIndentDecreaseIcon from 'material-ui-icons/FormatIndentDecrease'
import RedoIcon from 'material-ui-icons/Redo'
import UndoIcon from 'material-ui-icons/Undo'

import { TagEditorToolbarModalStyled } from './styles'
import {
  ContentEditorToolbarButton,
  ContentEditorToolbarProps,
  ToolbarButtonProps,
} from './interfaces'
import Grid from 'material-ui/Grid'
import { useCreateLinkButton } from './buttons/CreateLink'
// import { useHTMLEditorModeButton } from './buttons/HTMLEditorMode'
import { IconButton } from '@procraft/ui/dist/IconButton'
// import { getReactFiber } from '../../../../../helpers/ReactFiber'

export const ContentEditorToolbar: React.FC<ContentEditorToolbarProps> = (
  props
) => {
  const {
    closestInSelection,
    contentEditableContainer,
    // object,
    // updateObject,
    activeSetter,
    // contentWrapper,
  } = props

  const [selection, setSelection] = useState<Selection | null>(null)
  const [selectionType, setSelectionType] = useState<
    Selection['type'] | undefined
  >(undefined)

  selectionType

  const [
    contentEditableContainerSelected,
    setContentEditableContainerSelected,
  ] = useState(false)

  const onSelectionChange = useCallback(
    (_event) => {
      const selection = document.getSelection()

      const contentEditableContainerSelected =
        (contentEditableContainer &&
          selection?.containsNode(contentEditableContainer, true)) ||
        false

      setContentEditableContainerSelected(contentEditableContainerSelected)

      setSelectionType(selection?.type)
    },
    [contentEditableContainer]
  )

  useEffect(() => {
    setSelection(global.document?.getSelection())

    document.addEventListener('selectionchange', onSelectionChange)

    return () => {
      document.removeEventListener('selectionchange', onSelectionChange)
    }
  }, [onSelectionChange])

  const onButtonClick = useCallback((event: MouseEvent) => {
    const currentTarget = event.currentTarget as HTMLButtonElement

    const name = currentTarget.name

    if (name) {
      const result = document.execCommand(name)

      if (!result) {
        console.error(new Error('Error execCommand'))
      }
    } else {
      console.error(new Error('name is empty'))
    }
  }, [])

  /**
   * Вставляем колонку
   */
  const insertTableCell = useCallback(
    (tr: HTMLTableRowElement, index?: number) => {
      return !!tr.insertCell(index)
    },
    []
  )

  /**
   * Вставляем новую строку в таблицу
   */
  const insertTableRow = useCallback(
    (table: HTMLTableElement, index?: number, columnsCount = 1) => {
      const tr = table.insertRow(index)

      if (tr) {
        let i = 0

        while (i < columnsCount) {
          insertTableCell(tr)
          i++
        }

        return true
      }

      return false
    },
    [insertTableCell]
  )

  const hasSelection = contentEditableContainerSelected ? true : false

  const createLinkButton = useCreateLinkButton({
    hasSelection,
    selection,
  })

  // const HTMLEditorModeButton = useHTMLEditorModeButton({
  //   hasSelection,
  //   selection,
  //   object,
  //   updateObject,
  //   contentWrapper,
  // })

  const renderToolbarButtons = useMemo(() => {
    const tableControls: ContentEditorToolbarButton[] = [
      {
        key: 'insertTable',
        name: 'insertTable',
        title: 'Вставить таблицу',
        disabled: hasSelection ? false : true,
        onClick: () =>
          document.execCommand(
            'insertHTML',
            true,
            `<table><tbody><tr><td></td></tr></tbody></table>`
          ),
        icon: (
          <svg
            className={['icon', !hasSelection ? 'disabled' : ''].join(' ')}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <g>
                  <path d="M0,0v512h256v-32h-64V352h32v-32h-32V192h128v32h32v-32h96v-32h-96V32h128v96h32V0H0z M160,480H32V352h128V480z M160,320 H32V192h128V320z M160,160H32V32h128V160z M320,160H192V32h128V160z" />
                  <path d="M384,256c-70.692,0-128,57.308-128,128s57.308,128,128,128s128-57.308,128-128C511.921,313.34,454.66,256.079,384,256z M384,480c-53.019,0-96-42.981-96-96s42.981-96,96-96s96,42.981,96,96C479.947,436.997,436.997,479.947,384,480z" />
                  <polygon points="400,336 368,336 368,368 336,368 336,400 368,400 368,432 400,432 400,400 432,400 432,368 400,368" />
                  <rect x="480" y="224" width="32" height="32" />
                  <rect x="480" y="160" width="32" height="32" />
                </g>
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        ),
      },
    ]

    if (selection) {
      const table = closestInSelection<HTMLTableElement>('table')

      if (table) {
        const tr = closestInSelection<HTMLTableRowElement>('tr')

        table &&
          tableControls.push({
            key: 'insertRow',
            name: 'insertRow',
            title: 'Вставить строку',
            disabled: hasSelection ? false : true,
            onClick: () => {
              const index =
                tr && tr.parentElement
                  ? Array.from(tr.parentElement.childNodes).indexOf(tr)
                  : -1

              return insertTableRow(table, index + 1, tr?.childElementCount)
            },
            icon: (
              <svg
                className={['icon', !hasSelection ? 'disabled' : ''].join(' ')}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 -21 512 512"
                xmlSpace="preserve"
              >
                <path d="m102.355469 277.078125-74.664063-80c-4.480468-4.820313-11.414062-6.421875-17.558594-3.96875-6.121093 2.410156-10.132812 8.320313-10.132812 14.890625v160c0 6.570312 4.011719 12.480469 10.132812 14.871094 1.898438.765625 3.882813 1.128906 5.867188 1.128906 4.351562 0 8.597656-1.769531 11.691406-5.078125l74.664063-80c5.742187-6.144531 5.742187-15.699219 0-21.84375zm0 0" />
                <path d="m469.332031 341.332031h-320c-23.53125 0-42.664062 19.136719-42.664062 42.667969v42.667969c0 23.53125 19.132812 42.664062 42.664062 42.664062h320c23.53125 0 42.667969-19.132812 42.667969-42.664062v-42.667969c0-23.53125-19.136719-42.667969-42.667969-42.667969zm-320.019531 42.667969h138.6875v42.667969h-138.667969zm320.019531 42.667969h-138.664062v-42.667969h138.664062zm0 0" />
                <path d="m469.332031 0h-320c-23.53125 0-42.664062 19.136719-42.664062 42.667969v149.332031c0 23.53125 19.132812 42.667969 42.664062 42.667969h320c23.53125 0 42.667969-19.136719 42.667969-42.667969v-149.332031c0-23.53125-19.136719-42.667969-42.667969-42.667969zm0 96h-138.664062v-53.332031h138.664062zm-320-53.332031h138.667969v53.332031h-138.6875zm0 96h138.667969v53.332031h-138.667969zm181.335938 53.332031v-53.332031h138.664062v53.332031zm0 0" />
              </svg>
            ),
          })

        tr &&
          tableControls.push({
            key: 'insertCell',
            name: 'insertCell',
            title: 'Вставить колонку',
            disabled: hasSelection ? false : true,
            onClick: () => {
              const cell = closestInSelection('td,th')

              const index = cell?.parentElement
                ? Array.from(cell.parentElement.childNodes).indexOf(cell)
                : -1

              return insertTableCell(tr, index + 1)
            },
            icon: (
              <svg
                className={['icon', !hasSelection ? 'disabled' : ''].join(' ')}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="-21 0 512 512"
                xmlSpace="preserve"
              >
                <path d="m288 106.667969c-3.925781 0-7.851562-1.429688-10.921875-4.3125l-80-74.664063c-4.800781-4.480468-6.378906-11.457031-3.96875-17.558594 2.410156-6.101562 8.320313-10.132812 14.890625-10.132812h160c6.570312 0 12.480469 4.011719 14.890625 10.132812 2.410156 6.125.832031 13.078126-3.96875 17.558594l-80 74.664063c-3.070313 2.882812-6.996094 4.3125-10.921875 4.3125zm-39.402344-74.667969 39.402344 36.777344 39.402344-36.777344zm0 0" />
                <path d="m432 512h-53.332031c-20.589844 0-37.335938-16.746094-37.335938-37.332031v-330.667969c0-20.585938 16.746094-37.332031 37.335938-37.332031h53.332031c20.585938 0 37.332031 16.746093 37.332031 37.332031v330.667969c0 20.585937-16.746093 37.332031-37.332031 37.332031zm-53.332031-373.332031c-2.945313 0-5.335938 2.386719-5.335938 5.332031v330.667969c0 2.941406 2.390625 5.332031 5.335938 5.332031h53.332031c2.945312 0 5.332031-2.390625 5.332031-5.332031v-330.667969c0-2.945312-2.386719-5.332031-5.332031-5.332031zm0 0" />
                <path d="m197.332031 512h-160c-20.585937 0-37.332031-16.746094-37.332031-37.332031v-330.667969c0-20.585938 16.746094-37.332031 37.332031-37.332031h160c20.589844 0 37.335938 16.746093 37.335938 37.332031v330.667969c0 20.585937-16.746094 37.332031-37.335938 37.332031zm-160-373.332031c-2.941406 0-5.332031 2.386719-5.332031 5.332031v330.667969c0 2.941406 2.390625 5.332031 5.332031 5.332031h160c2.945313 0 5.335938-2.390625 5.335938-5.332031v-330.667969c0-2.945312-2.390625-5.332031-5.335938-5.332031zm0 0" />
                <path d="m453.332031 325.332031h-96c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h96c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                <path d="m218.667969 325.332031h-202.667969c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h202.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                <path d="m117.332031 512c-8.832031 0-16-7.167969-16-16v-373.332031c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v373.332031c0 8.832031-7.167969 16-16 16zm0 0" />
              </svg>
            ),
          })
      }
    }

    const buttons: ToolbarButtonProps[] = [
      {
        name: 'bold',
        title: 'Жирный текст',
        disabled: hasSelection ? false : true,
        icon: <FormatBoldIcon />,
      },
      {
        name: 'italic',
        title: 'Наклонный текст',
        disabled: hasSelection ? false : true,
        icon: <FormatItalicIcon />,
      },
      {
        name: 'underline',
        title: 'Подчеркнутый текст',
        disabled: hasSelection ? false : true,
        icon: <FormatUnderlinedIcon />,
      },
      {
        name: 'strikeThrough',
        title: 'Перечеркнутый текст',
        disabled: hasSelection ? false : true,
        icon: <FormatStrikethroughIcon />,
      },
      {
        name: 'justifyLeft',
        title: 'Выровнить влево',
        disabled: hasSelection ? false : true,
        icon: <AlignLeftIcon />,
      },
      {
        name: 'justifyCenter',
        title: 'Выровнить по центру',
        disabled: hasSelection ? false : true,
        icon: <AlignCenterIcon />,
      },
      {
        name: 'justifyRight',
        title: 'Выровнить вправо',
        disabled: hasSelection ? false : true,
        icon: <AlignRightIcon />,
      },
      {
        name: 'justifyFull',
        title: 'Выровнить на всю ширину',
        disabled: hasSelection ? false : true,
        icon: <AlignJustifyIcon />,
      },
      {
        name: 'insertUnorderedList',
        title: 'Ненумерованный список',
        disabled: hasSelection ? false : true,
        icon: <FormatListBulletedIcon />,
      },
      {
        name: 'insertOrderedList',
        title: 'Нумерованный список',
        disabled: hasSelection ? false : true,
        icon: <FormatListNumberedIcon />,
      },
      {
        name: 'outdent',
        title: 'Уменьшить отступ',
        disabled: hasSelection ? false : true,
        icon: <FormatIndentDecreaseIcon />,
      },
      {
        name: 'indent',
        title: 'Увеличить отступ',
        disabled: hasSelection ? false : true,
        icon: <FormatIndentIncreaseIcon />,
      },
      createLinkButton,
      // HTMLEditorModeButton,
      {
        name: 'selectAll',
        title: 'Выделить все',
        disabled: hasSelection ? false : true,
        icon: <SelectAllIcon />,
      },
      {
        name: 'removeFormat',
        title: 'Удалить форматирование',
        disabled: hasSelection ? false : true,
        icon: <FormatClearIcon />,
      },
    ]
      // .concat(tableControls)
      .concat([
        {
          name: 'undo',
          title: 'Откатить действие (Ctrl+Z)',
          disabled: hasSelection ? false : true,
          icon: <UndoIcon />,
        },
        {
          name: 'redo',
          title: 'Повторить действие (Ctrl+Y)',
          disabled: hasSelection ? false : true,
          icon: <RedoIcon />,
        },
      ])

    return buttons.map((n, index) => {
      const { disabled, name, icon, onClick, className, ...other } = n

      return (
        <Grid key={name || index} item>
          <IconButton
            className={['TagEditorToolbar--iconButton', className].join(' ')}
            name={name}
            callback={onClick ? onClick : onButtonClick}
            disabled={disabled}
            {...other}
          >
            {icon}
          </IconButton>
        </Grid>
      )
    })
  }, [
    closestInSelection,
    createLinkButton,
    hasSelection,
    insertTableCell,
    insertTableRow,
    onButtonClick,
    selection,
  ])

  const closeHandler = useCallback(() => {
    activeSetter(false)
  }, [activeSetter])

  return useMemo(() => {
    return (
      <TagEditorToolbarModalStyled
        title="Редактирование текста"
        closeHandler={closeHandler}
        preventClickEvent={true}
        modal={false}
        moveable
      >
        <Grid container className="buttons">
          {renderToolbarButtons}
        </Grid>
      </TagEditorToolbarModalStyled>
    )
  }, [renderToolbarButtons, closeHandler])
}
