import { createGlobalStyle } from 'styled-components'
import {
  redactor2ComponentAttributes,
  // redactor2ComponentClasses,
} from '.'
import { SectionStyled } from '../components/Section/styles'

/**
 * Эти стили выводятся и должны выводиться только в режиме редактирования
 */
export const LmsFrontRedactorGlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  /* * {
    &:focus {
      outline: none;
    }
  } */

  [${redactor2ComponentAttributes.component}] {
      /* border: 1px solid #dfdfdf; */
      /* border: 1px solid transparent; */
      min-height: 20px;
      /* cursor: pointer; */
      /* padding: 2px 4px; */

      /* margin: 10px; */

      &[${redactor2ComponentAttributes.component}=HtmlTag] {
        /* font-size: 1rem; */

        &[${redactor2ComponentAttributes.tag}=script] {
          &:before {
            content: "JS " attr(data-redactor--src) ' ' attr(data-redactor--content-length);
          }
        }

        &[${redactor2ComponentAttributes.tag}=style] {
          &:before {
            content: 'STYLE ' attr(data-redactor--content-length);
          }
        }

        &[${redactor2ComponentAttributes.tag}=link] {
          &:before {
            content: 'LINK '  attr(data-redactor--rel) ' ' attr(data-redactor--href);
          }
        }
      }

      &[${redactor2ComponentAttributes.hovered}=true] {
        /* border-color: grey; */

      }

      &:before {
        display: block;
        color: #333;
        font-size: 14px;
        font-style: italic;
      }

      /* &[${redactor2ComponentAttributes.component}=landing-router] {
        border-color: green;
        &:before {
          content: "Router";
        }
      } */

      &[${redactor2ComponentAttributes.component}=content-editor] {
        border-color: lightgrey;
        /* padding: 5px 10px; */
        padding: 10px;

        /* &:before {
          content: "HTML Editor";

          [${redactor2ComponentAttributes.active}=true]& {
            content: none;
          }
        } */
      }
    }

  img {
    max-width: 100%;
  }

  ${SectionStyled} {
    /* border: 1px solid red; */
    /* min-height: 50px; */
    
    padding: 15px;

    &:empty {
      border: 1px solid #ccc;
      background: repeating-linear-gradient(
45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 10px, rgba(0, 0, 0, 0.05) 10px, rgba(0, 0, 0, 0.05) 20px);
      min-height: 60px;
      /* margin: 2px; */
    }
  }

`
