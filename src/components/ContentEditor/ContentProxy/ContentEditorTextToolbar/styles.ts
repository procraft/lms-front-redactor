import styled from 'styled-components'

export const ContentEditorTextToolbarButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #57585a;
  line-height: 45px;
  min-width: 45px;
  height: 45px;
  padding: 0;
  border: none;
  background-color: transparent;
  text-decoration: none;
  text-align: center;
  position: relative;
  user-select: none;

  &:enabled {
    cursor: pointer;
  }

  &:disabled {
    /* svg {
      fill: red;
    } */
    opacity: 0.4;
  }

  &:focus:after,
  &:hover:after {
    position: absolute;
    z-index: 910;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmVyc2lvbj0iMS4xIiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgdGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyBmaWxsLXJ1bGU6ZXZlbm9kZDsgY2xpcC1ydWxlOmV2ZW5vZGQiDQp2aWV3Qm94PSIwIDAgNDAwMCA0MDAwIg0KIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiA8ZGVmcz4NCiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCiAgIDwhW0NEQVRBWw0KICAgIC5zdHIwIHtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6MjAwfQ0KICAgIC5maWwwIHtmaWxsOm5vbmV9DQogICBdXT4NCiAgPC9zdHlsZT4NCiA8L2RlZnM+DQogPGc+DQogIDxwb2x5bGluZSBjbGFzcz0iZmlsMCBzdHIwIiBwb2ludHM9IjM0MjksMzQwMCA1NzEsMzQwMCA1NzEsNjAwICIvPg0KIDwvZz4NCjwvc3ZnPg0K),
      url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCINCnZpZXdCb3g9IjAgMCA0MDAwIDQwMDAiDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KIDxkZWZzPg0KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgPCFbQ0RBVEFbDQogICAgLnN0cjAge3N0cm9rZTojMzczNDM1O3N0cm9rZS13aWR0aDoyMDguMzUxfQ0KICAgIC5maWwwIHtmaWxsOm5vbmV9DQogICBdXT4NCiAgPC9zdHlsZT4NCiA8L2RlZnM+DQogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPg0KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPg0KICA8cG9seWxpbmUgY2xhc3M9ImZpbDAgc3RyMCIgcG9pbnRzPSI1NzEsMzQwMCAzNDI5LDM0MDAgMzQyOSw2MDAgIi8+DQogPC9nPg0KPC9zdmc+DQo=),
      url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCINCnZpZXdCb3g9IjAgMCA0MDAwIDQwMDAiDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KIDxkZWZzPg0KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgPCFbQ0RBVEFbDQogICAgLnN0cjAge3N0cm9rZTojMzczNDM1O3N0cm9rZS13aWR0aDoyMDguMzUxfQ0KICAgIC5maWwwIHtmaWxsOm5vbmV9DQogICBdXT4NCiAgPC9zdHlsZT4NCiA8L2RlZnM+DQogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPg0KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPg0KICA8cG9seWxpbmUgY2xhc3M9ImZpbDAgc3RyMCIgcG9pbnRzPSIzNDI5LDYwMCA1NzEsNjAwIDU3MSwzNDAwICIvPg0KIDwvZz4NCjwvc3ZnPg0K),
      url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCINCnZpZXdCb3g9IjAgMCA0MDAwIDQwMDAiDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KIDxkZWZzPg0KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgPCFbQ0RBVEFbDQogICAgLnN0cjAge3N0cm9rZTojMzczNDM1O3N0cm9rZS13aWR0aDoyMDguMzUxfQ0KICAgIC5maWwwIHtmaWxsOm5vbmV9DQogICBdXT4NCiAgPC9zdHlsZT4NCiA8L2RlZnM+DQogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPg0KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPg0KICA8cG9seWxpbmUgY2xhc3M9ImZpbDAgc3RyMCIgcG9pbnRzPSI1NzEsNjAwIDM0MjksNjAwIDM0MjksMzQwMCAiLz4NCiA8L2c+DQo8L3N2Zz4NCg==);
    background-position: bottom left, bottom right, top left, top right;
    background-repeat: no-repeat;
    background-size: 10px;
    content: '';
  }
`

export const ContentEditorTextToolbarStyled = styled.div`
  position: fixed;
  z-index: 900;
  top: 20px;
  left: 150px;
  min-width: 320px;

  display: flex;
  flex-direction: column;
  padding: 8px;
  max-height: calc(100% - 40px);
  box-shadow: 1px 1px 20px 1px rgb(0 0 0 / 15%);
  margin: 0;
  background-color: #fff;
  border-radius: 10px;
  list-style: none;
  user-select: none;
  font-size: 13px;
  /* opacity: 0; */
  animation: fade-in 0.3s linear forwards;

  > .title {
    > h1 {
      font-size: 18px;
    }

    > hr {
      display: block;
      border: none;
      border-bottom: 1px solid #e6e7e8;
      height: 1px;
      width: 100%;
      margin: 12px 0;
    }
  }

  > .content {
    > .buttons {
      display: flex;
      flex-wrap: wrap;
    }
  }
`
