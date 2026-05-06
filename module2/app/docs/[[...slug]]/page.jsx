import React from 'react'

const DocsPage = async({params}) => {
    const {slug} = await params
  return (
    <div>DocsPage
    <br/>
    slug: {slug}
    </div>
  )
}

export default DocsPage