import React from 'react'
import Button from './Button'

const Banner = () => {
  return (
    <div className='py-20 bg-blue-100'>
        <p>Unlock your potential through education</p>
        <Button TagName='button' primary={false}>
          Click Me
        </Button>
    </div>
  )
}

export default Banner