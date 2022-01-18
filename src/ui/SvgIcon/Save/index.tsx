import React from 'react'

export const SvgIconSave: React.FC = ({ ...other }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      // enableBackground="new 0 0 512 512"
      {...other}
    >
      <g>
        <path d="M494.7,134.1L372.4,16.7c-3.8-3.7-8.9-5.7-14.1-5.7H31.4C20.1,11,11,20.1,11,31.4v449.2c0,11.3,9.1,20.4,20.4,20.4h449.2   c11.3,0,20.4-9.1,20.4-20.4V148.8C501,143.3,498.7,137.9,494.7,134.1z M297.1,51.8v134.4H140.5V51.8H297.1z M460.2,460.2H51.8V51.8   h47.9v154.8c0,11.3,9.1,20.4,20.4,20.4h197.4c11.3,0,20.4-9.1,20.4-20.4V51.8h12.2l110.1,105.7V460.2z" />
      </g>
    </svg>
  )
}
