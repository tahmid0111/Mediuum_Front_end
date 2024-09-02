import React from 'react'

const Password = (props) => {
    const {FirstName} = props.items;
  return (
    <div>
      <h1 className='text-4xl'>{FirstName} Password</h1>
    </div>
  )
}

export default Password
