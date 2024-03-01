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
  
  [role=redactor-wrapper] * {
    box-sizing: border-box;
  }

  /* * {
    &:focus {
      outline: none;
    }
  } */

  [${redactor2ComponentAttributes.component}] {
      min-height: 20px;

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
      }
    }

  img {
    max-width: 100%;
  }

  ${SectionStyled} {
    &:empty {
      width: 100%;
      border: 1px solid #ccc;
      background: repeating-linear-gradient(
45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 10px, rgba(0, 0, 0, 0.05) 10px, rgba(0, 0, 0, 0.05) 20px);
      min-height: 60px;
      /* margin: 2px; */
    }
  }

  img {

    &[src=""] {
      width: 100%;
      max-width: 300px;
      display: block;
      position: relative;
      margin: 0 auto;
      
      &:before {
        content: "";
        padding-top: 56%;
        display: block;
        width: 100%;
        pointer-events: none;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2OSIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDY5IDM4IiBmaWxsPSJub25lIiBzdHlsZT0iJiMxMDsgIHN0cm9rZTogI2NjY2NjYzsmIzEwOyI+CjxwYXRoIGQ9Ik0wLjQ3ODc1NCAzMC44NDczTDIyLjA5OTkgOC45MTgyM0MyMi41MzI3IDguNDc5MzIgMjMuMzAyIDguNDgxNjIgMjMuNzE1OSA4LjkyMzA1TDQ5LjM5MDUgMzYuMzAzOCIvPgo8cGF0aCBkPSJNMzggMjQuNDMxTDQ1LjIxNzMgMTguMTU0OEM0NS42NTU5IDE3Ljc3MzQgNDYuMzYyMiAxNy43OTIzIDQ2Ljc2IDE4LjE5NjFMNjQuOTk0MiAzNi43MDQ0Ii8+CjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iNjgiIGhlaWdodD0iMzYiIHJ4PSIyLjUiLz4KPGNpcmNsZSBjeD0iNTkuNSIgY3k9IjYuNSIgcj0iMS41IiBmaWxsPSIjY2NjY2NjIi8+Cjwvc3ZnPg==);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 70%;
        background-color: #d5cfcf47;
      }

    }
  }

  video {

    &:empty { 

      width: 100%;
      max-width: 300px;
      display: block;
      position: relative;
      margin: 0 auto;


      background-image: url(data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjY5IiBoZWlnaHQ9IjM3IiB2aWV3Qm94PSIwIDAgNjkgMzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iNjgiIGhlaWdodD0iMzYiIHJ4PSIyLjUiIHN0cm9rZT0iI2NjY2NjYyIvPgo8cGF0aCBkPSJNMjguMjUgMTAuMTc5NEw0Ni43Nzk0IDE4LjVMMjguMjUgMjYuODIwNkwyOC4yNSAxMC4xNzk0WiIgZmlsbD0iI2NjY2NjYyIgc3Ryb2tlPSIjY2NjY2NjIi8+CjxsaW5lIHgxPSI1OC41IiB5MT0iMSIgeDI9IjU4LjUiIHkyPSIzNyIgc3Ryb2tlPSIjY2NjY2NjIiBzdHJva2UtZGFzaGFycmF5PSI2IDYiLz4KPGxpbmUgeDE9IjEwLjUiIHkxPSIxIiB4Mj0iMTAuNSIgeTI9IjM3IiBzdHJva2U9IiNjY2NjY2MiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNiIvPgo8L3N2Zz4K);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 70%;
      background-color: #d5cfcf47;
   
    }

  }

`
