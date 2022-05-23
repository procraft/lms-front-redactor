import React from 'react'
import { Button } from '@procraft/ui/dist/Button'
import DeleteIcon from 'material-ui-icons/Delete'
import CloseIcon from 'material-ui-icons/Close'
import { SvgIconCode } from '../../../../ui/SvgIcon/Code'
import { RedactorComponentWrapperAddComponentButton } from './buttons/AddComponent'
import { RedactorComponentWrapperSaveButton } from './buttons/Save'
import { RedactorComponentWrapperProps } from '../interfaces'
import {
  RedactorComponentWrapperButtonsStyled,
  RedactorComponentWrapperStyled,
} from '../styles'

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
            onClick={removeObjectHandler}
            role="removeComponent"
            title="Удалить элемент"
          >
            <DeleteIcon />
          </Button>
        ) : null}
        <Button
          onClick={closeEditor}
          role="close"
          title="Завершить редактирование"
        >
          <CloseIcon />
        </Button>
      </RedactorComponentWrapperButtonsStyled>
    </RedactorComponentWrapperStyled>
  )
}
