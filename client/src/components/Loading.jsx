import React from 'react'

export default function Loading() {
  return (
    <div className='max-w-[900px] mx-auto h-screen'>
        <h2 className="text-center text-3xl font-bold py-10">検索結果</h2>
        <div className='flex justify-center items-center mt-[200px] font-bold text-xl'>検索中...</div>
    </div>
  )
}
