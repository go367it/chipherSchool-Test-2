import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className='rounded-md space-y-3 bg-black'>
            <img 
            className='w-full'
            src={props.image}
            alt='image' />
            <div className='w-full h-full p-4'>
            <h4 className='text-xl text-gray-100 text-center font-semibold'>
                {props.name}
            </h4>
            </div>
        </div>
    </div>
  )
}

export default Card