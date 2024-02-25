import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-[30rem] gap-4'>
      <div className='braces'>{'{'}</div>
      <div className='spinner'></div>
      <div className='spinner'></div>
      <div className='braces'>{'}'}</div>
    </div>
    
  )
}

export default Spinner