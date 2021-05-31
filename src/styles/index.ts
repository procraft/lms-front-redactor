import styled from 'styled-components'

// className.push("redactor--redactor-component");
// className.push("redactor--inEditMode");

// export const redactor2ComponentClasses = {
//   // component: 'redactor--redactor-component',
//   hovered: 'hovered',
// }

export const redactor2ComponentAttributes = {
  component: 'data-redactor--component',
  tag: 'data-redactor--component-tag',
  active: 'data-redactor--component-active',
  hovered: 'data-redactor--component-hovered',
} as const

export const LmsFrontRedactorStyled = styled.div``
