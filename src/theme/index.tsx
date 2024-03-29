import UiTheme from '@procraft/ui/dist/theme'

/**
 * Цвета
 */
const colors = {
  primary: '#333',
  colorYellow: '#F8E81C',
}

const zIndex = {
  modal: 1000,
}

/**
 * Итоговая тема
 */
const theme = {
  frontRedactor: {
    colors,
    zIndex,
  },
  ui: {
    ...UiTheme.ui,
  },
}

export type Theme = typeof theme

// props that later will be injected by styled-components
export type ThemeProps = { theme?: Theme }

export default theme
