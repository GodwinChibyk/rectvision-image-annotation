import React, { ReactNode } from 'react'
import PageWrapper from '../../Global/PageWrapper/PageWrapper'
import AsideLeft from './AsideLeft/AsideLeft'
import AsideRight from './AsideRight/AsideRight'

interface Props {
  children: ReactNode
}
const AuthLayout:React.FC<Props> = ({children}) => {
  return (
    <PageWrapper>
      <div className='grid grid-cols-2 '>
        <AsideLeft />
        <AsideRight>
          {children}
        </AsideRight>
      </div>
    </PageWrapper>
  )
}

export default AuthLayout