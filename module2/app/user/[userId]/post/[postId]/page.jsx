import React from 'react'

const UserPostIdPage = async ({params}) => {
    const {userId, postId} =await params;
  return (
    <div>UserPostIdPage {userId} {postId}</div>
  )
}

export default UserPostIdPage