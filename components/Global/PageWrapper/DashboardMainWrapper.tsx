import React, { ReactNode } from 'react'

interface IDMWProps {
    children: ReactNode
}
const DashboardMainWrapper:React.FC<IDMWProps> = ({children}) => {
  return (
    <div className="px-8 py-6 min-h-screen">
        {children}
    </div>
  )
}

export default DashboardMainWrapper