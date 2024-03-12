import React from 'react'

const Article=({title, subtitle, text}) => {
  return (
    <div>
        <h1 className='Article_h1'>{title}</h1>
        <p className='Article_p'>{subtitle}</p>
         <b>{text}</b>
    </div>
  )
}

export default Article