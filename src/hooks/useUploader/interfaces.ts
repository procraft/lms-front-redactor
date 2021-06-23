
export type useUploaderProps = {
  /**
   * Активен ли текущий элемент. Если нет, то не редактируется
   */
  active: boolean

  /**
   * Колбэк на загрузку
   */
  onUpload: (url: string) => void
}
