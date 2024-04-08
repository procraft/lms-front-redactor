import React, { useCallback, useContext, useEffect, useState } from 'react'
import { LinkFormProps } from './interfaces'
import {
  // Button,
  Grid,
  TextField,
} from 'material-ui'
import { LmsFrontRedactorContext } from '../../../../../../../../Context'
import {
  LinkFormLinksListStyled,
  LinkFormLinkWrapperStyled,
  LinkFormStyled,
} from './styles'
import { Button } from '@procraft/ui/dist/Button'
import { useUploader } from '../../../../../../../../hooks/useUploader'

/**
 * Форма создания/редактирования ссылки
 */
export const LinkForm: React.FC<LinkFormProps> = ({ opened, closePopover }) => {
  const context = useContext(LmsFrontRedactorContext)

  // TODO Надо проработать обрыв события.
  // Сейчас если кликать внутри редактора, то не закрывается окошко
  useEffect(() => {
    if (!opened) {
      return
    }

    /**
     * Если всплывашка открыта, то навешиваем на документ ивент закрытия по клику в любом месте
     */
    document.addEventListener('click', closePopover)

    return () => {
      document.removeEventListener('click', closePopover)
    }
  }, [closePopover, opened])

  /**
   * В момент фокуса в текстовое поле у нас снимается выделение в тексте.
   * Чтобы это обойти, запоминаем текущий ранж, чтобы потом выставить выделение
   */
  const [range, rangeSetter] = useState<Range | undefined>(undefined)

  useEffect(() => {
    // console.log('LinkForm useEffect range', range)

    const s = document.getSelection()

    if (s && s.rangeCount > 0) {
      const r = s.getRangeAt(0)
      // Проверка на наличие ссылки в выбранном тексте. Если она есть - в поле ввода отобразить ссылку
      if (s.anchorNode) {
        const anchor = s.anchorNode.parentElement?.closest(
          'a'
        ) as HTMLAnchorElement | null
        if (anchor) {
          linkSetter(anchor.href)
        }
      }
      rangeSetter(r)
    }

    // return () => {
    //   console.log('LinkForm useEffect return range', range)
    // }
  }, [range])

  const [link, linkSetter] = useState<string | null>(null)

  /**
   * Сохранение ссылки
   */
  const saveLink = useCallback(() => {
    if (!link || !range) {
      return
    }

    /**
     * Восстанавливаем исходный ранж
     */
    const selection = document.getSelection()

    if (!selection) {
      console.error('Can not get selection')
      return
    }

    if (selection.rangeCount > 0) {
      selection.removeAllRanges()
    }

    selection.addRange(range)

    const result = document.execCommand('createLink', false, link)

    if (result) {
      // Всем ссылкам по умолчанию добавляем target="_blank"
      if (selection.anchorNode) {
        if (
          selection.anchorNode.parentElement &&
          selection.anchorNode.parentElement instanceof HTMLAnchorElement
        ) {
          selection.anchorNode.parentElement.target = '_blank'
        }
      }
      /**
       * Снимаем все селекшены.
       * Действие не обязательное, но вроде так юзабельней.
       */
      selection.removeAllRanges()

      /**
       * Закрываем окошко
       */
      closePopover()
    } else {
      console.error('Can not create link')
    }

    return result
  }, [closePopover, link, range])

  /**
   * На изменение ссылки
   */
  const onChangeLink = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      linkSetter(event.target.value)
    },
    []
  )

  // const onClickLink = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
  //   linkSetter(event.currentTarget.dataset.link || null)
  // }, [])

  /**
   * Список ссылок
   */
  const [listElement, listElementRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!listElement) {
      return
    }

    const onClick = (event: MouseEvent) => {
      event.stopPropagation()

      if (event.target instanceof HTMLElement) {
        const link = event.target.dataset.link

        linkSetter(link || null)
      }
    }

    listElement.addEventListener('click', onClick)

    return () => {
      listElement.removeEventListener('click', onClick)
    }
  }, [listElement])

  const onUpload = useCallback((url: string) => {
    linkSetter(url)
  }, [])

  const { uploader } = useUploader({
    onUpload,
  })

  return (
    <>
      <LinkFormStyled>
        <Grid
          container
          spacing={8}
          style={{
            margin: '0',
          }}
        >
          <Grid
            item
            xs={12}
            // onMouseDown={onMouseDown}
          >
            <LinkFormLinkWrapperStyled>
              <TextField
                value={link || ''}
                onChange={onChangeLink}
                label="Адрес ссылки"
                fullWidth
                style={{
                  minWidth: '250px',
                  maxWidth: '350px',
                  marginRight: '20px',
                }}
              />{' '}
              {uploader}
            </LinkFormLinkWrapperStyled>

            <LinkFormLinksListStyled ref={listElementRef}>
              {context?.linksList?.map((n) => {
                return (
                  <div
                    key={n.id}
                    // onClick={onClickLink}
                    data-link={n.uri}
                    title={n.name || undefined}
                  >
                    {n.uri}
                  </div>
                )
              })}
            </LinkFormLinksListStyled>
          </Grid>
          <Grid item xs={12}></Grid>
          <Button
            size="small"
            disabled={!link || !range}
            onClick={saveLink}
            variant="raised"
          >
            Сохранить
          </Button>

          {/* <Button
            size="small"
            disabled={!link || !range}
            onClick={saveLink}
            variant="raised"
          >
            Сохранить
          </Button> */}
        </Grid>
      </LinkFormStyled>
    </>
  )
}
