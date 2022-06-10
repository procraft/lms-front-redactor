import React, { useCallback, ChangeEvent, useMemo, useState } from 'react'
import { gql, useApolloClient } from '@apollo/client'
import { useUploaderProps } from './interfaces'
import { uploadToS3 } from '../../helpers/S3Uploader'
import { normalizeFileName } from '../../helpers/normalizeFileName'
import { UploaderInputStyled, UploaderStyled } from './styles'

export const useUploader = ({
  onUpload,
  inputProps,
  disabled,
  ...other
}: useUploaderProps) => {
  const client = useApolloClient()

  const [loading, loadingSetter] = useState(false)

  const [input, inputRef] = useState<HTMLInputElement | null>(null)

  const onClick = useCallback(() => {
    if (input) {
      input.click()
    }
  }, [input])

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (loading) {
        return
      }

      loadingSetter(true)

      const file = event.target.files && event.target.files[0]

      if (file) {
        client
          .mutate<{
            s3getSignedUrl: string
          }>({
            mutation: gql`
              mutation s3getSignedUrl(
                $objectName: String!
                $contentType: String!
              ) {
                s3getSignedUrl(
                  objectName: $objectName
                  contentType: $contentType
                )
              }
            `,
            variables: {
              contentType: file.type,
              objectName: normalizeFileName(file.name),
            },
          })
          .then(async (response) => {
            /**
             * Если была полученна ссылка на загрузку, загружаем файл
             */
            if (response.data?.s3getSignedUrl) {
              await uploadToS3(file, response.data?.s3getSignedUrl)
                .then((url: string | undefined) => {
                  /**
                   * Если загрузка прошла успешно, обновляем содержимое компонента
                   */
                  if (url) {
                    onUpload(url)
                  } else {
                    throw new Error('Ошибка загрузки файла')
                  }
                })
                .catch((error: Error) => {
                  alert(error.message)
                })
            }
          })
          .catch(console.error)
          .finally(() => {
            loadingSetter(false)
          })
      }
    },
    [client, loading, onUpload]
  )

  const uploader = useMemo(() => {
    return (
      <>
        <UploaderInputStyled
          ref={inputRef}
          type="file"
          onChange={onChange}
          // hidden
          {...inputProps}
        />
        <UploaderStyled
          callback={onClick}
          disabled={loading ? true : disabled}
          {...other}
        >
          <div className='wrapper'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.66634 6.66667H11.9997L7.99967 10.6667L3.99967 6.66667H7.33301V2H8.66634V6.66667ZM2.66634 12.6667H13.333V8H14.6663V13.3333C14.6663 13.5101 14.5961 13.6797 14.4711 13.8047C14.3461 13.9298 14.1765 14 13.9997 14H1.99967C1.82286 14 1.65329 13.9298 1.52827 13.8047C1.40325 13.6797 1.33301 13.5101 1.33301 13.3333V8H2.66634V12.6667Z" fill="#475569"/>
            </svg>
          </div>
        </UploaderStyled>
        {loading ? ' Loading...' : null}
      </>
    )
  }, [inputProps, onChange, onClick, loading, disabled, other])

  return useMemo(() => {
    return {
      uploader,
    }
  }, [uploader])
}
