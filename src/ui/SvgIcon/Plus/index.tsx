import React from 'react'

export const SvgIconPlus: React.FC = ({ ...other }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{
      fill: 'white',
    }}
    {...other}
    >
      <path d="M7.375 7.375V3.625H8.625V7.375H12.375V8.625H8.625V12.375H7.375V8.625H3.625V7.375H7.375Z" fill="white"/>
    </svg>
    
  )
}
