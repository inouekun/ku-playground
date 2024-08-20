import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export function Button({ children, className = '', ...props }: Props) {
  return (
    <button
      {...props}
      type="button"
      className={`${className} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
    >
      {children}
    </button>
  )
}
