import React, { useState, useCallback, useEffect, useMemo } from 'react'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'
import { useMonacoEditor } from '../../../../hooks/useMonacoEditor'
import { ContentEditorHTMLEditorMonacoEditorProps } from './interfaces'
import nodeToEditorComponentObject from '../../ContentProxy/hooks/useContentEditable/helpers/nodeToEditorComponentObject'
import { Button } from '@procraft/ui/dist/Button'
import Btn from '@mui/material/Button'
import { ContentEditorHTMLEditorMonacoEditorStyled } from './styles'
import { RedactorComponentObject } from '../../../..'
import { NodeToHtml } from './helpers/NodeToHtml'

/**
 * Здесь с редактированием есть сразу несколько сложных моментов:
 *
 * 1. Редактируемый HTML - это чистый текст. Он в себе не содержит информацию является ли это содержимым
 * реакт-компонента или нет. То есть если открыли для редактирования какой-то HTML-узел, в котором выводятся
 * реакт-компоненты, то их содержимое будет переведено в обычный HTML, теряя при этом всю динамику.
 * 2. Сложно учитывать какой именно узел редактируется. То есть, к примеру, если мы открыли какой-то
 * узел и заменили весь код на несколько HTML-элементов, то будет сложно понять что именно надо будет заменить
 * в исходной структуре и куда вставить новые элементы.
 * 3. Возможно придется вставить проверку на наличие в редактируемом узле реакт-компонентов. Если такие есть, то следует запретить редактирование.
 * 4. В случае, если количество элементов после редактирования будет больше 1 или меньше одного, надо будет вставлять новое содержимое дочерним контентом
 * текущего элемента.
 */

export const ContentEditorHTMLEditorMonacoEditor: React.FC<
  ContentEditorHTMLEditorMonacoEditorProps
> = ({
  active,
  element,
  object,
  updateObject,
  parent,
  updateParent,
  toggleModalCollapse,
}) => {
  const [source, sourceSetter] = useState<string>('')

  useEffect(() => {
    /**
     * Нужен для отслеживания изменений на объекте
     */
    object

    sourceSetter(NodeToHtml(element))
  }, [element, object])

  const [error, errorSetter] = useState<Error | null>(null)

  const [isDirty, isDirtySetter] = useState(false)

  /**
   * Если устанавливается новый контент, то сбрасываем флаг
   */
  useEffect(() => {
    source

    isDirtySetter(false)
  }, [source])

  const [editorInstance, editorInstanceSetter] =
    useState<monacoEditor.editor.IStandaloneCodeEditor | null>(null)

  useEffect(() => {
    if (!editorInstance) {
      return
    }

    const model = editorInstance.getModel()

    const modelOnChange = model?.onDidChangeContent((_event) => {
      const value = model.getValue()

      isDirtySetter(value !== source)

      errorSetter(null)
    })

    return () => {
      modelOnChange?.dispose()
    }
  }, [editorInstance, source])

  const onEditorInit = useCallback(
    (editorInstance: monacoEditor.editor.IStandaloneCodeEditor) => {
      editorInstanceSetter(editorInstance)
    },
    []
  )

  const { editor } = useMonacoEditor({
    active,
    editorProps: {
      language: 'html',
      source,
      onEditorInit,
    },
  })

  /**
   * Восстановление изменений
   */
  const resetValue = useCallback(() => {
    const model = editorInstance?.getModel()

    if (!model) {
      throw new Error('Can not get monaco editor model')
    }

    model.setValue(source)
  }, [editorInstance, source])

  /**
   * Сохранение изменений
   */
  const saveValue = useCallback(() => {
    try {
      /**
       * Создаем ноду и передаем содержимое как HTML
       */

      const model = editorInstance?.getModel()

      if (!model) {
        throw new Error('Can not get monaco editor model')
      }

      const value = model.getValue().trim()

      // console.log('saveValue value', value)

      const template = global.document.createElement('div')

      template.innerHTML = value

      const newObject = nodeToEditorComponentObject(template)

      if (!newObject) {
        errorSetter(new Error('Не был получен объект'))
        return
      }

      const components = newObject.components

      // console.log('saveValue components', components)

      if (components.length === 1) {
        const component = components[0]

        updateObject(object, component)
      } else {
        /**
         * Если нет родительского объекта, то выдаем ошибку
         */
        if (!parent || !updateParent) {
          const error = new Error(
            `Количество дочерних элементов должно быть 1, а получено ${template.childNodes.length}`
          )

          console.error(error, value, template.children)

          errorSetter(error)

          return
        } else {
          const parentComponents = [...parent.components]

          const index = parentComponents.findIndex((n) => n === object)

          if (index === -1) {
            errorSetter(new Error('Не был найден индекс текущего объекта'))
            return
          }

          const args: Array<number | RedactorComponentObject> = [index, 1]

          // eslint-disable-next-line prefer-spread
          parentComponents.splice.apply(
            parentComponents,
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            args.concat(components)
          )

          updateParent(parent, {
            components: parentComponents,
          })
        }
      }
    } catch (error) {
      errorSetter(error as Error)
    }
  }, [editorInstance, object, parent, updateObject, updateParent])

  const buttons = useMemo(() => {
    return [
      <Button
        key="reset"
        className={'cancel ' + (!isDirty ? 'disabled' : '')}
        disabled={!isDirty}
        onClick={resetValue}
      >
        Отмена
      </Button>,
      <Button
        key="save"
        className={'save ' + (!isDirty ? 'disabled' : '')}
        disabled={!isDirty}
        onClick={saveValue}
        role="save"
      >
        Применить
      </Button>,
    ]
  }, [isDirty, resetValue, saveValue])

  const copyTemplateCode = useCallback(() => {
    const {component, components, name, props} = object
    const code = JSON.stringify({component, components, name, props}, null, 2)
    navigator.clipboard.writeText(code)
  }, [object])

  const copyTemplateCodeBtn = useMemo(() => {
    return (
      <Btn className="iconButton" onClick={copyTemplateCode}>
        &lt;/&gt; Code
      </Btn>
    )
  }, [copyTemplateCode])

  const hideCodeEditor = useMemo(() => {
    return (
      <Btn className="iconButton" onClick={toggleModalCollapse}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8817 19.2971C16.1229 20.4126 14.0824 21.0034 11.9997 21.0001C6.60766 21.0001 2.12166 17.1201 1.18066 12.0001C1.61069 9.67078 2.78229 7.54296 4.52066 5.93407L1.39166 2.80807L2.80666 1.39307L22.6057 21.1931L21.1907 22.6071L17.8807 19.2971H17.8817ZM5.93466 7.35007C4.57567 8.58566 3.62898 10.2089 3.22266 12.0001C3.53496 13.3665 4.16193 14.6412 5.05367 15.7227C5.94541 16.8041 7.07729 17.6625 8.35922 18.2294C9.64114 18.7963 11.0377 19.0561 12.4378 18.9882C13.8378 18.9203 15.2026 18.5264 16.4237 17.8381L14.3957 15.8101C13.5324 16.3539 12.5099 16.5882 11.4959 16.4745C10.4819 16.3608 9.5367 15.906 8.81523 15.1845C8.09376 14.463 7.63889 13.5178 7.52523 12.5038C7.41156 11.4899 7.64585 10.4674 8.18966 9.60407L5.93466 7.35007ZM12.9137 14.3281L9.67166 11.0861C9.49373 11.539 9.45185 12.034 9.55117 12.5104C9.65049 12.9868 9.88668 13.4238 10.2308 13.7679C10.5749 14.1121 11.0119 14.3482 11.4883 14.4476C11.9647 14.5469 12.4597 14.505 12.9127 14.3271L12.9137 14.3281ZM20.8067 16.5921L19.3757 15.1621C20.0441 14.2094 20.5201 13.1353 20.7767 12.0001C20.5049 10.8098 19.9939 9.68721 19.2748 8.70056C18.5557 7.71391 17.6435 6.88379 16.5935 6.26067C15.5436 5.63755 14.378 5.23443 13.1674 5.07583C11.9568 4.91723 10.7267 5.00645 9.55166 5.33807L7.97366 3.76007C9.22066 3.27007 10.5797 3.00007 11.9997 3.00007C17.3917 3.00007 21.8777 6.88007 22.8187 12.0001C22.5122 13.6658 21.8235 15.2377 20.8067 16.5921V16.5921ZM11.7227 7.50807C12.3592 7.46873 12.9968 7.56513 13.5932 7.79088C14.1896 8.01663 14.7313 8.36658 15.1822 8.81752C15.6332 9.26846 15.9831 9.81009 16.2088 10.4065C16.4346 11.003 16.531 11.6406 16.4917 12.2771L11.7217 7.50807H11.7227Z"
            fill="black"
          />
        </svg>
        Свернуть редактор
      </Btn>
    )
  }, [toggleModalCollapse])

  return (
    <>
      <ContentEditorHTMLEditorMonacoEditorStyled>
        <div style={{ flex: 1 }}>
          {editor}
        </div>

        <div className="buttons">
          <div>
            {hideCodeEditor}
            {process.env.NODE_ENV === 'development' && copyTemplateCodeBtn}
          </div>
          <div style={{whiteSpace: 'nowrap'}}>
            {error ? <div className="error">{error.message}</div> : null}
            {buttons}
          </div>
        </div>
      </ContentEditorHTMLEditorMonacoEditorStyled>
    </>
  )
}
