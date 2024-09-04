import React from 'react'
import Header from '../components/shared/header/Header'

const HomePageLayout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default HomePageLayout
