import { IconButtonProps } from '@procraft/ui/dist/IconButton'
import { AllHTMLAttributes } from 'react'

export type UploaderInputProps = AllHTMLAttributes<HTMLInputElement>

export type useUploaderProps = Omit<IconButtonProps, 'callback'> & {
  /**
   * Колбэк на загрузку
   */
  onUpload: (url: string) => void

  inputProps?: UploaderInputProps
}
