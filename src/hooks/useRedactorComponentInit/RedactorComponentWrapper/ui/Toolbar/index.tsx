import React from 'react'
import { Button } from '@procraft/ui/dist/Button'
import { SvgIconCode } from '../../../../../ui/SvgIcon/Code'
import { RedactorComponentWrapperAddComponentButton } from '../../buttons/AddComponent'
import { RedactorComponentWrapperSaveButton } from '../../buttons/Save'
import { RedactorComponentWrapperProps } from '../../interfaces'
import {
  RedactorComponentWrapperButtonsStyled,
  RedactorComponentWrapperStyled,
} from '../../styles'

/**
 * Выводить дополнительные отладочные инструменты
 */
const debug = false

type RedactorComponentWrapperToolbarProps = {
  addObjectHandler: (event: React.MouseEvent) => void
  showContentHandler: () => void
  allowChildComponents: boolean
  object: RedactorComponentWrapperProps['object']
  updateObject: RedactorComponentWrapperProps['updateObject']
  canEditHTML: RedactorComponentWrapperProps['canEditHTML']
  parent: RedactorComponentWrapperProps['parent']
  updateParent: RedactorComponentWrapperProps['updateParent']
  isDirty: RedactorComponentWrapperProps['isDirty']
  updateTemplate: RedactorComponentWrapperProps['updateTemplate']
  closeEditor: RedactorComponentWrapperProps['closeEditor']
  openHtmlEditor: (event: MouseEvent) => void
  removeObjectHandler: (event: MouseEvent) => void
}

/**
 * Кнопки во враппере
 */
export const RedactorComponentWrapperToolbar: React.FC<
  RedactorComponentWrapperToolbarProps
> = ({
  addObjectHandler,
  showContentHandler,
  allowChildComponents,
  object,
  canEditHTML,
  updateObject,
  openHtmlEditor,
  parent,
  updateParent,
  isDirty,
  updateTemplate,
  removeObjectHandler,
  closeEditor,
}) => {
  return (
    <RedactorComponentWrapperStyled role="redactor-wrapper">
      <RedactorComponentWrapperButtonsStyled role="redactor-wrapper-buttons">
        {/* <span>
    {object.name}{' '}
    {object.name !== object.component
      ? ` (${object.component})`
      : ''}
  </span>
  <span>{object.props.tag}</span> */}
        {debug ? (
          <button onClick={addObjectHandler} role="addBlock">
            Add block
          </button>
        ) : null}
        {debug ? (
          <button onClick={showContentHandler} role="showState">
            Show state
          </button>
        ) : null}

        {/* Вставка виджета */}
        {allowChildComponents ? (
          <RedactorComponentWrapperAddComponentButton
            object={object}
            updateObject={updateObject}
          />
        ) : null}

        {canEditHTML ? (
          <Button
            className="vidget"
            onClick={openHtmlEditor}
            role="openHtmlEditor"
            title="Редактировать HTML"
          >
            <SvgIconCode />
          </Button>
        ) : null}
        {parent ? (
          <RedactorComponentWrapperSaveButton
            object={object}
            updateObject={updateObject}
            parent={parent}
            updateParent={updateParent}
            isDirty={isDirty}
            updateTemplate={updateTemplate}
          />
        ) : null}
        {parent ? (
          <Button
            className="vidget"
            onClick={removeObjectHandler}
            role="removeComponent"
            title="Удалить элемент"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.125 4.25H14.25V5.5H13V13.625C13 13.7908 12.9342 13.9497 12.8169 14.0669C12.6997 14.1842 12.5408 14.25 12.375 14.25H3.625C3.45924 14.25 3.30027 14.1842 3.18306 14.0669C3.06585 13.9497 3 13.7908 3 13.625V5.5H1.75V4.25H4.875V2.375C4.875 2.20924 4.94085 2.05027 5.05806 1.93306C5.17527 1.81585 5.33424 1.75 5.5 1.75H10.5C10.6658 1.75 10.8247 1.81585 10.9419 1.93306C11.0592 2.05027 11.125 2.20924 11.125 2.375V4.25ZM11.75 5.5H4.25V13H11.75V5.5ZM6.125 7.375H7.375V11.125H6.125V7.375ZM8.625 7.375H9.875V11.125H8.625V7.375ZM6.125 3V4.25H9.875V3H6.125Z"
                fill="white"
              />
            </svg>
          </Button>
        ) : null}
        <Button
          className="vidget"
          onClick={closeEditor}
          role="close"
          title="Завершить редактирование"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99996 7.11624L11.0937 4.02249L11.9775 4.90624L8.88371 7.99999L11.9775 11.0937L11.0937 11.9775L7.99996 8.88374L4.90621 11.9775L4.02246 11.0937L7.11621 7.99999L4.02246 4.90624L4.90621 4.02249L7.99996 7.11624Z"
              fill="white"
            />
          </svg>
        </Button>
      </RedactorComponentWrapperButtonsStyled>
    </RedactorComponentWrapperStyled>
  )
}
