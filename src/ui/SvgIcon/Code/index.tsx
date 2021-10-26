import React from 'react'

export const SvgIconCode: React.FC<{
  className?: string
  fill?: string
}> = ({ ...other }) => {

  return <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...other}
  >
    <path
      d="M3.66781 12.1719L8.12094 13.7422V15.9297L1.39437 13.0781V11.2344L8.12094 8.38281V10.5703L3.66781 12.1719ZM11.7956 17.9766H10.1159L14.3034 5.625H15.9831L11.7956 17.9766ZM20.2384 12.1484L15.6994 10.5625V8.39062L22.5041 11.2422V13.0781L15.6994 15.9375V13.7578L20.2384 12.1484Z"
      // fill="black"
    />
  </svg>
}

SvgIconCode.defaultProps = {
  fill: "black",
}
