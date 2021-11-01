import React, { useCallback, ChangeEvent, useMemo, useState } from 'react'
import { gql, useApolloClient } from '@apollo/client'
import UploadIcon from 'material-ui-icons/FileUpload'
import { useUploaderProps } from './interfaces'
import { uploadToS3 } from '../../helpers/S3Uploader'
import { normalizeFileName } from '../../helpers/normalizeFileName'
import { UploaderStyled } from './styles'

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
        <input
          ref={inputRef}
          type="file"
          onChange={onChange}
          hidden
          {...inputProps}
        />
        <UploaderStyled
          callback={onClick}
          disabled={loading ? true : disabled}
          {...other}
        >
          <UploadIcon />
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
