
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({children}) => {
  return (
    <div className='w-full min-h-screen bg-backgroundColor relative'>
        {children}
    </div>
  )
}

export default PageWrapper