import React from 'react'

const Divider = ({style='my-12 md:my-24'}) => {
  return (
    <div><div className={`divider ${style}`} ></div>
    </div>
  )
}

export default Divider