import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AsideRight:React.FC<Props> = ({children}) => {
  return (
    <div className=' bg-whiteColor min-h-screen flex items-center px-10'>
      {children}
    </div>
  )
}

export default AsideRight