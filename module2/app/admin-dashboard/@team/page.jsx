import Link from 'next/link'
import React from 'react'

const Team = () => {
  return (
    <div className='h-screen text-2xl font-bold text-center bg-amber-500 text-blue-700'>
      <Link href="/admin-dashboard/team-doc">Team Doc</Link>
    </div>
  )
}

export default Team