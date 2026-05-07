import React from 'react'

const AdminLayout = ({
    children,analytics,team
}) => {
  return (
    <div className='m-10 flex gap-10 h-screen'>
      <div className='float-left bg-amber-400 w-1/2 font-bold text-2xl text-center h-screen text-blue-700'>
        {children}
      </div>
      <div className='float-right flex flex-col gap-10 w-1/2'>
        {analytics}
        {team}
      </div>
        
    </div>
  )
}

export default AdminLayout