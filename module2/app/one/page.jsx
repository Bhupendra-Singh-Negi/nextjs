import Link from 'next/link'
import React from 'react'

const OnePage = () => {
  return (
    <div>
        OnePage
        <br />
        <Link href="/one/two">------Go to TwoPage----------</Link>
        <br />
        <Link href="/three">------Go to ThreePage----------</Link>
    </div>
  )
}

export default OnePage