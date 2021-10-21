import React, { useCallback, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import IconButton from 'material-ui/IconButton'
import SaveIcon from 'material-ui-icons/Save'
import { LmsFrontRedactorStateEditorProps } from './interfaces'
import useErrorBar from '../../../../ui/ErrorBar/hooks/useErrorBar'
import { RedactorComponentObject } from '../../../../RedactorComponent/interfaces'
import { LmsFrontRedactorModalStyled } from '../../../../ui/Modal/styles'
import LmsFrontRedactorModal from '../../../../ui/Modal'
import { LmsFrontRedactorStateEditorStyled } from './styles'

/**
 * Редактор JSON-стейта компонента
 */
const LmsFrontRedactorStateEditor: React.FC<LmsFrontRedactorStateEditorProps> =
  ({ object, close, updateObject }) => {
    const { errorBar, addError } = useErrorBar()

    const initState = useMemo(
      () => JSON.stringify(object, undefined, 2),
      [object]
    )

    // const [state, setState] = useState(initState);

    const [container, setContainer] = useState<HTMLPreElement | null>(null)

    const contanerRef = useCallback((el) => {
      setContainer(el)
    }, [])

    /**
     * Хендлер на изменение контента
     */
    // const onInput = useCallback((event: React.FormEvent<HTMLPreElement>) => {

    //   // setState(event.currentTarget.textContent || "");

    // }, []);

    const saveState = useCallback(() => {
      try {
        const json = JSON.parse(container?.textContent || '')

        const data: Partial<RedactorComponentObject> = {}

        const {
          id,
          __typename,
          name,
          component,
          components,
          props,
          ...otherData
        } = json || {}

        id
        __typename

        if (typeof name === 'string') {
          data.name = name
        }

        if (typeof component === 'string') {
          data.component = component
        }

        if (Array.isArray(components)) {
          data.components = components
        }

        if (typeof props === 'object') {
          data.props = props
        }

        Object.assign(data, {
          ...otherData,
        })

        updateObject(object, data)

        close()
      } catch (error) {
        addError(error as Error)
      }
    }, [addError, close, container?.textContent, object, updateObject])

    const saveButton = useMemo(() => {
      return (
        <IconButton color="secondary" onClick={saveState} key="save">
          <SaveIcon />
        </IconButton>
      )
    }, [saveState])

    const wrapper = document.body

    return ReactDOM.createPortal(
      <>
        {errorBar}
        <LmsFrontRedactorModalStyled>
          <LmsFrontRedactorModal
            close={close}
            title={object.name}
            buttons={saveButton}
          >
            <LmsFrontRedactorStateEditorStyled>
              <pre
                // onInput={onInput}
                ref={contanerRef}
                contentEditable
                suppressContentEditableWarning
              >
                {initState}
              </pre>
            </LmsFrontRedactorStateEditorStyled>
          </LmsFrontRedactorModal>
        </LmsFrontRedactorModalStyled>
      </>,
      wrapper
    )
  }

export default LmsFrontRedactorStateEditor
