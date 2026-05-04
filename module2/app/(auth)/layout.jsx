import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
        {children}
    </div>
  )
}

export default AuthLayout