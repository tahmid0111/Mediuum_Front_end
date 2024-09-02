import React from 'react'
import ProfileHeader from '../components/shared/profileLayout/ProfileHeader'

const ProfilePageLayout = ({children}) => {
  return (
    <>
      <ProfileHeader />
      {children}
    </>
  )
}

export default ProfilePageLayout
