import React from 'react'
import NotFoundPage from '../not-found';
import { notFound } from 'next/navigation';

const DynamicUserIdPage = async({params}) => {
    const {userId} =await params;
    if(userId>10){
        notFound();
    }
  return (
    <div>DynamicUserIdPage {userId}</div>
  )
}

export default DynamicUserIdPage