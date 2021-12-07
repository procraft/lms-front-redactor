import useStore from '@prisma-cms/react-hooks/dist/hooks/useStore'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { LmsFrontRedactorProps, RedactorComponentObject } from '../../../src'
import { ContentEditor } from '../../../src/components/ContentEditor'
import { HtmlTag } from '../../../src/components/HtmlTag'
import { Section } from '../../../src/components/Section'
import { RedactorObjectTemplate } from '../../../src/Context'

type useRedactorStoreDevProps = {
  /**
   * Ключ локального хранилища
   */
  key: string

  /**
   * Дефолтный объект редактора
   */
  initialObject: RedactorComponentObject
}

/**
 * Хранилище для объекта редактора с методами обновления
 */
export const useRedactorStoreDev = ({
  key,
  initialObject,
}: useRedactorStoreDevProps) => {
  const objectStore = useStore<RedactorComponentObject>(initialObject)

  /**
   * Если сразу отдавать значение из локального хранилища (которого нет на стороне сервера),
   * то вознивает ошибка разницы HTML-документа.
   * Поэтому надо обновить хранилище через useEffect, но только при первом рендеринге.
   */
  useEffect(() => {
    let object: RedactorComponentObject | undefined

    try {
      const item = global.localStorage?.getItem(key)

      if (item) {
        object = JSON.parse(item)
      }
    } catch (error) {
      console.error
    }

    objectStore.updateStore(object || initialObject)

    /**
     * Этот метод должен вызываться только один раз
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateObject: LmsFrontRedactorProps['updateObject'] = useCallback(
    (current, data) => {
      const store = {
        ...current,
        ...data,
      }

      /**
       * Сохраняем значение в локальное хранилище
       */
      global.localStorage?.setItem(key, JSON.stringify(store))

      objectStore.updateStore(store)
      //
    },
    [key, objectStore]
  )

  const [inEditMode, inEditModeSetter] = useState(false)

  const toggleEditMode = useCallback(() => {
    inEditModeSetter(!inEditMode)
  }, [inEditMode])

  /**
   * Сброс измененного хранилища
   */
  const resetStore = useCallback(() => {
    global.localStorage?.removeItem(key)
    objectStore.updateStore(initialObject)
  }, [initialObject, objectStore, key])

  const toolbar = useMemo(() => {
    return (
      <div
        id="component-toolbar"
        style={{
          marginBottom: 15,
        }}
      >
        <button onClick={toggleEditMode} id="toggleEditMode">
          inEditMode {inEditMode ? 'On' : 'Off'}
        </button>

        {objectStore.store !== initialObject ? (
          <button onClick={resetStore} role="reset-store">
            Reset store
          </button>
        ) : null}
      </div>
    )
  }, [inEditMode, initialObject, objectStore.store, resetStore, toggleEditMode])

  const objectTemplates = useMemo<RedactorObjectTemplate[]>(() => {
    return [
      {
        Component: Section,
        template: {
          name: 'Блок',
          description: 'Произвольный блок',
          component: 'Section',
          props: {},
          components: [],
        },
      },
      {
        Component: ContentEditor,
        template: {
          name: 'HTML редактор',
          description: 'HTML редактор',
          component: 'ContentEditor',
          props: {},
          components: [],
        },
      },
      {
        Component: HtmlTag,
        template: {
          name: 'JavaScript',
          description: 'JavaScript code',
          component: 'HtmlTag',
          props: {
            tag: 'script',
          },
          components: [],
        },
      },
      {
        Component: HtmlTag,
        template: {
          name: 'CSS Link',
          description: 'Loadable cascading styles sheets',
          component: 'HtmlTag',
          props: {
            tag: 'link',
            rel: 'stylesheet',
          },
          components: [],
        },
      },
      {
        Component: HtmlTag,
        template: {
          name: 'CSS Inline',
          description: 'Inline cascading styles sheets',
          component: 'HtmlTag',
          props: {
            tag: 'style',
          },
          components: [],
        },
      },
      {
        Component: HtmlTag,
        template: {
          name: 'Image',
          description: 'Insert image',
          component: 'HtmlTag',
          props: {
            tag: 'img',
          },
          components: [],
        },
      },
      {
        Component: HtmlTag,
        template: {
          name: 'Head',
          description: 'Insert Head',
          component: 'Head',
          props: {},
          components: [],
        },
      },
    ]
  }, [])

  return useMemo(() => {
    return {
      ...objectStore,
      updateObject,
      resetStore,
      inEditMode,
      toolbar,
      objectTemplates,
    }
  }, [
    objectStore,
    updateObject,
    resetStore,
    inEditMode,
    toolbar,
    objectTemplates,
  ])
}
