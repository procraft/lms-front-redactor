import React, { useCallback, useContext, useEffect, useState } from 'react'
import { LinkFormProps } from './interfaces'
import { Button, Grid, TextField } from 'material-ui'
import Context from '../../../../../../../../Context'
import { LinkFormLinksListStyled, LinkFormStyled } from './styles'

/**
 * Форма создания/редактирования ссылки
 */
export const LinkForm: React.FC<LinkFormProps> = ({ opened, closePopover }) => {
  const context = useContext(Context)

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

  const onClickLink = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    linkSetter(event.currentTarget.dataset.link || null)
  }, [])

  return (
    <>
      <LinkFormStyled>
        <Grid container spacing={8}>
          <Grid
            item
            xs={12}
            // onMouseDown={onMouseDown}
          >
            <TextField
              value={link || ''}
              onChange={onChangeLink}
              label="Адрес ссылки"
              fullWidth
            />
            {/* <input
              value={link || ''}
              onChange={onChangeLink}
              // label="Адрес ссылки"
              // fullWidth
              onMouseDown={onMouseDown}
            /> */}

            <LinkFormLinksListStyled>
              {context?.linksList.map((n) => {
                return (
                  <div
                    key={n.id}
                    onClick={onClickLink}
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
            onClick={saveLink}
            disabled={!link || !range}
            variant="raised"
            size="small"
          >
            Сохранить
          </Button>
        </Grid>
      </LinkFormStyled>
    </>
  )
}
