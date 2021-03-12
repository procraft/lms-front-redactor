import styled from 'styled-components'

// className.push("redactor--redactor-component");
// className.push("redactor--inEditMode");

export const redactor2ComponentClasses = {
  component: 'redactor--redactor-component',
  hovered: 'hovered',
}

export const LmsFrontRedactorStyled = styled.div`
  &.inEditMode {
    /* .${redactor2ComponentClasses.component} {
      border: 1px solid #dfdfdf;
      min-height: 30px;
      cursor: pointer;
      padding: 2px 4px;

      margin: 10px;

      &.HtmlTag {
        font-size: 1rem;

        &.script {
          &:before {
            content: 'JS';
          }
        }

        &.style {
          &:before {
            content: 'CSS';
          }
        }

        &.link {
          &:before {
            content: 'Link';
          }
        }
      }

      &.${redactor2ComponentClasses.hovered} {
        border-color: grey;
      }
    } */
  }
`
