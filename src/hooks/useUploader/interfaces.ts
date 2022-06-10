import { IconButtonProps } from '@procraft/ui/dist/IconButton'
import { InputHTMLAttributes } from 'react'

// export type UploaderInputProps = AllHTMLAttributes<HTMLInputElement>
export type UploaderInputProps = InputHTMLAttributes<HTMLInputElement>

export type useUploaderProps = Omit<IconButtonProps, 'callback'> & {
  /**
   * Колбэк на загрузку
   */
  onUpload: (url: string) => void
  title?: String
  inputProps?: UploaderInputProps
}
