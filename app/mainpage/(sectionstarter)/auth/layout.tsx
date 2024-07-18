import React from 'react'

export default function layout({children, }: Readonly<{children: React.ReactNode;}>
) {
  return (
    <div className='flex mx-auto items-center min-h-screen rounded-2xl'>{children}</div>
  )
}
