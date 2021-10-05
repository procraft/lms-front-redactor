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

  img {

    &[src=""] {
      /* border: 1px solid ;
      min-height: 40px;
      min-width: 20px; */

      width: 100%;
      max-width: 300px;
      display: block;
      position: relative;
      margin: 0 auto;
      
      &:after {
        content: "";
        padding-top: 56%;
        display: block;
        width: 100%;
        /* top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute; */
        pointer-events: none;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2OSIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDY5IDM4IiBmaWxsPSJub25lIiBzdHlsZT0iJiMxMDsgIHN0cm9rZTogI2NjY2NjYzsmIzEwOyI+CjxwYXRoIGQ9Ik0wLjQ3ODc1NCAzMC44NDczTDIyLjA5OTkgOC45MTgyM0MyMi41MzI3IDguNDc5MzIgMjMuMzAyIDguNDgxNjIgMjMuNzE1OSA4LjkyMzA1TDQ5LjM5MDUgMzYuMzAzOCIvPgo8cGF0aCBkPSJNMzggMjQuNDMxTDQ1LjIxNzMgMTguMTU0OEM0NS42NTU5IDE3Ljc3MzQgNDYuMzYyMiAxNy43OTIzIDQ2Ljc2IDE4LjE5NjFMNjQuOTk0MiAzNi43MDQ0Ii8+CjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iNjgiIGhlaWdodD0iMzYiIHJ4PSIyLjUiLz4KPGNpcmNsZSBjeD0iNTkuNSIgY3k9IjYuNSIgcj0iMS41IiBmaWxsPSIjY2NjY2NjIi8+Cjwvc3ZnPg==);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 70%;
        background-color: #d5cfcf47;
        /* z-index: 0; */
      }

    }
  }

`
