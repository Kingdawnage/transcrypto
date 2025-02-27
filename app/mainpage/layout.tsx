import React from 'react'

export default function layout({children, }: Readonly<{children: React.ReactNode;}>
) {
  return (
    <div className='mx-auto'>{children}</div>
  )
}
