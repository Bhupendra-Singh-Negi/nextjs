import React from 'react'

const DynamicCommentIdPage = ({params}) => {
    const {userId, postId, commentId} = params
  return (
    <div>
        DynamicCommentIdPage
    <br/>
    userId: {userId}
    <br/>
    postId: {postId}
    <br/>
    commentId: {commentId}  
    </div>
  )
}

export default DynamicCommentIdPage