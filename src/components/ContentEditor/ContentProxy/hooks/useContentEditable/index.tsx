import { useCallback, useEffect } from 'react'
import { nodeChildsToEditorComponentObjectComponents } from './helpers/nodeToEditorComponentObject'
import { useContentEditableProps } from './interfaces'

const useContentEditable = ({
  element,
  active,
  object,
  updateObject,
}: useContentEditableProps) => {
  // const [componentInEditMode, componentInEditModeSetter] = useState(false)

  /**
   * Реагируем на статус редактирования компонента
   */
  // useEffect(() => {
  //   console.log('useEffect useContentEditable active', active)

  //   // const isActive = !!element && active

  //   // if (isActive !== componentInEditMode) {
  //   //   componentInEditModeSetter(isActive)
  //   // }

  //   if (!element || !active) {
  //     return;
  //   }

  //   // element.contentEditable = active ? 'true' : 'false'
  //   element.contentEditable = 'true'

  //   return () => {

  //     element.contentEditable = 'false';
  //   };

  // }, [active, element])

  // const setNewContent = useCallback(
  //   (components: RedactorComponentObject['components']) => {
  //     console.log('setNewContent components', components)
  //     updateObject(object, {
  //       components,
  //     });
  //   },
  //   [object, updateObject]
  // )

  // const makeNewContent = useCallback(
  //   nodeChildsToEditorComponentObjectComponents,
  //   []
  // )

  // useEffect(() => {

  //   // if (!newContent) {
  //   //   return;
  //   // }

  //   console.log('useEffect setNewContent newContent', newContent);
  //   console.log('useEffect setNewContent active', active);

  //   if (!active && newContent) {
  //     setNewContent(() => {

  //       console.log('useEffect setNewContent newContent updateObject', newContent);

  //       updateObject(object, {
  //         components: newContent,
  //       })

  //       return null;
  //     })
  //   }

  // }, [active, newContent, object, updateObject])

  const makeNewContent = nodeChildsToEditorComponentObjectComponents

  const onChangeDom = useCallback(
    (container: Node) => {
      // updateCount++;

      // if (updateCount > 10) {
      //   return;
      // }

      const content = makeNewContent(container)

      const { components } = content

      // components && updateObject({ components })

      // console.log('onChangeDom makeNewContent context', context);
      // console.log('onChangeDom makeNewContent context?.setNewContent', context?.setNewContent);

      // components && setNewContent(components)
      components && updateObject(components)
    },
    [makeNewContent, updateObject]
  )

  // const [hasChanges, hasChangesSetter] = useState(false);

  /**
   * Навешиваем обсервер на изменение контента
   */
  useEffect(() => {
    /**
     * Если изменения появились, обсервер нам больше не нужен
     */
    if (!element || !active) {
      return
    }

    const config = {
      // attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    }

    // Create an observer instance linked to the callback function
    // const observer = new MutationObserver(this.onDOMSubtreeModified);
    const observer = new MutationObserver(() => {
      onChangeDom(element)
    })

    // Start observing the target node for configured mutations
    observer.observe(element, config)

    return () => {
      observer.disconnect()
    }
  }, [active, element, onChangeDom])

  /**
   * Навешиваем обсервер, чтобы отследить появились ли изменения
   * в HTML самого редактора.
   */
  // useEffect(() => {

  //   /**
  //    * Если изменения появились, обсервер нам больше не нужен
  //    */
  //   if (!componentInEditMode || !element || hasChanges) {
  //     return
  //   }

  //   const config = {
  //     // attributes: true,
  //     childList: true,
  //     subtree: true,
  //     characterData: true,
  //   }

  //   // Create an observer instance linked to the callback function
  //   // const observer = new MutationObserver(this.onDOMSubtreeModified);
  //   const observer = new MutationObserver((changes) => {
  //     console.log('onDomChanged changes', changes)
  //     console.log('onDomChanged element.outerHTML', element.outerHTML)

  //     hasChangesSetter(true);
  //   })

  //   // Start observing the target node for configured mutations
  //   observer.observe(element, config)

  //   return () => {
  //     observer.disconnect()
  //   }
  // }, [componentInEditMode, element, hasChanges]);

  /**
   * Навешиваем обработчик на редактирование компонента
   */
  useEffect(() => {
    onChangeDom

    // console.log(
    //   'useEffect useContentEditable componentInEditMode',
    //   componentInEditMode
    // )

    // // eslint-disable-next-line no-constant-condition
    // // if (1 === 1) {
    // //   return;
    // // }

    // if (!componentInEditMode || !element) {
    //   return
    // }

    // element.contentEditable = 'true'

    // return () => {
    //   element.contentEditable = 'false';

    //   /**
    //    * Обновляем стейт компонента
    //    */
    //   // if (hasChanges) {

    //   //   hasChangesSetter(() => {

    //   onChangeDom(element)
    //   return false
    //   // });

    //   // }
    // }

    /**
     * Пока закомментируем такой вариант
     */
    // const config = {
    //   // attributes: true,
    //   childList: true,
    //   subtree: true,
    //   characterData: true,
    // }

    // // Create an observer instance linked to the callback function
    // // const observer = new MutationObserver(this.onDOMSubtreeModified);
    // const observer = new MutationObserver((changes) => {
    //   console.log('onDomChanged changes', changes)
    //   console.log('onDomChanged element.outerHTML', element.outerHTML)

    //   /**
    //    * Filter changes. Get only from editable element
    //    */
    //   const nodes = changes.filter(({ target }): boolean => {
    //     // if (target === element) {
    //     //   return false;
    //     // }

    //     let node: Node | null = target

    //     // console.log('onDomChanged node', node);

    //     let success = false

    //     // let parent: (Node & ParentNode) | null = target.parentNode;

    //     let i = 0

    //     while (node && i < 100) {
    //       i++

    //       if (!node) {
    //         break
    //       }

    //       if (node === element) {
    //         success = true
    //         break
    //       }

    //       if (
    //         node instanceof HTMLElement &&
    //         node.attributes.getNamedItem('contenteditable')?.value === 'false'
    //       ) {
    //         // console.log("while parent", i, node, node.attributes.getNamedItem("contenteditable")?.value);

    //         break
    //       }

    //       node = node?.parentNode
    //       // break;
    //     }

    //     // console.log("parent", parent);

    //     return success
    //   })

    //   /**
    //    * If have changes on content, update state
    //    */
    //   if (nodes.length) {
    //     onChangeDom(element)
    //   }
    // })

    // // Start observing the target node for configured mutations
    // observer.observe(element, config)

    // return () => {
    //   element.contentEditable = 'false'
    //   observer.disconnect()
    // }
  }, [onChangeDom])

  return {
    object,
    updateObject,
  }
}

export default useContentEditable
