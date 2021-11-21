import React, { useState, useCallback, useEffect, useMemo } from 'react'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'
import { useMonacoEditor } from '../../../../hooks/useMonacoEditor'
import { ContentEditorHTMLEditorMonacoEditorProps } from './interfaces'
import nodeToEditorComponentObject from '../../ContentProxy/hooks/useContentEditable/helpers/nodeToEditorComponentObject'
import { Button } from '@procraft/ui/dist/Button'
import { ContentEditorHTMLEditorMonacoEditorStyled } from './styles'
import { RedactorComponentObject } from '../../../..'

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

export const ContentEditorHTMLEditorMonacoEditor: React.FC<ContentEditorHTMLEditorMonacoEditorProps> =
  ({ active, element, object, updateObject, parent, updateParent }) => {
    const [source, sourceSetter] = useState<string>('')

    useEffect(() => {
      /**
       * Нужен для отслеживания изменений на объекте
       */
      object

      sourceSetter(element.outerHTML.replace(/ data-redactor--.+?=".*?"+/g, ''))
    }, [element.outerHTML, object])

    const [error, errorSetter] = useState<Error | null>(null)

    const [isDirty, isDirtySetter] = useState(false)

    /**
     * Если устанавливается новый контент, то сбрасываем флаг
     */
    useEffect(() => {
      source

      isDirtySetter(false)
    }, [source])

    // const onChange = useCallback((content) => {
    //   console.log('onChange content', content)
    // }, [])

    // const onChange = useCallback((content: string) => {
    //   console.log('onChange content', content)
    //   // const contentElement = object.components[0] || {
    //   //   name: 'HtmlTag',
    //   //   component: 'HtmlTag',
    //   //   components: [],
    //   //   props: {
    //   //     text: '',
    //   //   },
    //   // }

    //   // updateObject(object, {
    //   //   components: [
    //   //     {
    //   //       ...contentElement,
    //   //       props: {
    //   //         ...contentElement.props,
    //   //         text: content,
    //   //       },
    //   //     },
    //   //   ],
    //   // })
    // }, [])

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
        // onChange,
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
      // console.log(
      //   'ContentEditorHTMLEditorMonacoEditor onDidChangeContent event',
      //   event
      // )
      // console.log(
      //   'ContentEditorHTMLEditorMonacoEditor onDidChangeContent editorInstance',
      //   value
      // )

      // Создаем ноду и передаем содержимое как HTML

      const model = editorInstance?.getModel()

      if (!model) {
        throw new Error('Can not get monaco editor model')
      }

      const value = model.getValue().trim()

      const template = global.document.createElement('div')

      template.innerHTML = value

      /**
       * Если количество нод не равно один, то обновление должно выполняться на родителе
       */
      // if (template.childNodes.length !== 1) {

      //   return;
      // }
      // // Иначе обновляем сам объект
      // else {
      //   //
      // }

      // const child = node.appendChild(element.cloneNode()) as HTMLElement

      // const node = template.content.firstChild;

      // if (!node || !(node instanceof HTMLElement)) {
      //   console.error('Нода не является HTML-элементом');
      //   return;
      // }

      // console.log('node', node);

      const newObject = nodeToEditorComponentObject(template)

      if (!newObject) {
        errorSetter(new Error('Не был получен объект'))
        return
      }

      const components = newObject.components

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

          // let args: Array<number | RedactorComponentObject> = [index, 1]

          if (index === -1) {
            errorSetter(new Error('Не был найден индекс текущего объекта'))
            return
          }

          // TODO Эслинт с ума сходит от такой конструкции, хотя она для ТС правильная. Пришлось игнор добавлять
          // const args: [start: number, deleteCount: number, ...items: RedactorComponentObject<{}>[]] = [index, 1]

          const args: Array<number | RedactorComponentObject> = [index, 1]

          // if (components.length === 0) {
          //   //
          //   // parentComponents.splice(index, 0)
          //   // args.push(0);
          // }
          // /**
          //  * Если сразу несколько элементов, то надо в массиве компонентов родителя найти индекс текущего элемента
          //  */
          // else {

          //   // args.push(1);

          //   // args[1] = 1;

          //   //
          //   // parentComponents.splice(index, 1)

          //   // args = args.concat(components);

          // }

          // console.log('args', args);

          // console.log('args', args);

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

      // const { components } = nodeChildsToEditorComponentObjectComponents(node)

      // if (components) {
      //   updateObject(object, { components })
      // }

      // if (newObject) {
      //   updateObject(object, newObject)
      // }
    }, [editorInstance, object, parent, updateObject, updateParent])

    const buttons = useMemo(() => {
      return [
        <Button
          key="reset"
          variant={isDirty ? 'raised' : undefined}
          disabled={!isDirty}
          onClick={resetValue}
        >
          Отмена
        </Button>,
        <Button
          key="save"
          color={isDirty ? 'primary' : 'default'}
          variant="raised"
          disabled={!isDirty}
          onClick={saveValue}
          role="save"
        >
          Сохранить
        </Button>,
      ]
    }, [isDirty, resetValue, saveValue])

    return (
      <>
        <ContentEditorHTMLEditorMonacoEditorStyled>
          <div
            style={{
              flex: 1,
            }}
          >
            {editor}
          </div>

          <div className="buttons">
            {error ? <div className="error">{error.message}</div> : null}
            {buttons}
          </div>
        </ContentEditorHTMLEditorMonacoEditorStyled>
      </>
    )
  }
