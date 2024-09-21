import React from 'react'

const Connections = (props) => {
    const {FirstName} = props.items;
  return (
    <div>
      <h1 className='text-4xl'>{FirstName} Connections</h1>
    </div>
  )
}

export default Connections
