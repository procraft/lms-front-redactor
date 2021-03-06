import { createGlobalStyle } from 'styled-components'
import {
  redactor2ComponentAttributes,
  // redactor2ComponentClasses,
} from '.'

/**
 * Эти стили выводятся и должны выводиться только в режиме редактирования
 */
export const LmsFrontRedactorGlobalStyle = createGlobalStyle`

  /* * {
    &:focus {
      outline: none;
    }
  } */

  [${redactor2ComponentAttributes.component}] {
      /* border: 1px solid #dfdfdf; */
      border: 1px solid transparent;
      min-height: 20px;
      cursor: pointer;
      /* padding: 2px 4px; */

      /* margin: 10px; */

      /* &.HtmlTag { */
      &[${redactor2ComponentAttributes.component}=HtmlTag] {
        /* font-size: 1rem; */

        /* &.script { */
        &[${redactor2ComponentAttributes.tag}=script] {
          &:before {
            content: "JS " attr(data-redactor--src) ' ' attr(data-redactor--content-length);
          }
        }

        /* &.style { */
        &[${redactor2ComponentAttributes.tag}=style] {
          &:before {
            content: 'STYLE ' attr(data-redactor--content-length);
          }
        }

        /* &.link { */
        &[${redactor2ComponentAttributes.tag}=link] {
          &:before {
            content: 'LINK '  attr(data-redactor--rel) ' ' attr(data-redactor--href);
          }
        }
      }

      /* &.{redactor2ComponentClasses.hovered} { */
      &[${redactor2ComponentAttributes.hovered}=true] {
        border-color: grey;
      }

      &:before {
        display: block;
        color: #333;
        font-size: 14px;
        font-style: italic;
      }

      /* &.landing-router { */
      &[${redactor2ComponentAttributes.component}=landing-router] {
        border-color: green;
        &:before {
          content: "Router";
        }
      }

      /* &.content-editor { */
      &[${redactor2ComponentAttributes.component}=content-editor] {
        border-color: lightgreen;
        padding: 5px 10px;

        &:before {
          content: "HTML Editor";

          /* .active& { */
          [${redactor2ComponentAttributes.active}=true]& {
            content: none;
          }
        }
      }
    }

  img {
    max-width: 100%;
  }

`
