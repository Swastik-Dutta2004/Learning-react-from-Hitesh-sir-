import React from 'react'

function Button ({
    children,
    text = 'button',
    bgColor = bg-blue-600,
    textcolor = 'text-white',
    className = '',
    ...props
}) {
  return (
<button className={` px-4 py-2 rounded-lg ${bgColor} ${textcolor} ${className}`}>
{children},
</button>
)
}

export default Button 