import { createGlobalStyle } from 'styled-components'
import { redactor2ComponentClasses } from '.'

/**
 * Эти стили выводятся и должны выводиться только в режиме редактирования
 */
export const LmsFrontRedactorGlobalStyle = createGlobalStyle`

  /* * {
    &:focus {
      outline: none;
    }
  } */

  .${redactor2ComponentClasses.component} {
      border: 1px solid #dfdfdf;
      min-height: 20px;
      cursor: pointer;
      padding: 2px 4px;

      margin: 10px;

      &.HtmlTag {
        /* font-size: 1rem; */

        &.script {
          &:before {
            content: "JS " attr(data-redactor--src) ' ' attr(data-redactor--content-length);
          }
        }

        &.style {
          &:before {
            content: 'STYLE ' attr(data-redactor--content-length);
          }
        }

        &.link {
          &:before {
            content: 'LINK '  attr(data-redactor--rel) ' ' attr(data-redactor--href);
          }
        }
      }

      &.${redactor2ComponentClasses.hovered} {
        border-color: grey;
      }

      &:before {
        display: block;
        color: #333;
        font-size: 14px;
        font-style: italic;
      }

      &.landing-router {
        border-color: green;
        &:before {
          content: "Router";
        }
      }

      &.content-editor {
        border-color: lightgreen;
        &:before {
          content: "HTML Editor";

          .active& {
            content: none;
          }
        }
      }
    }

  img {
    max-width: 100%;
  }

`
