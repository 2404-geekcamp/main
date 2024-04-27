import React from 'react'

const Result = () => {
  return (
    <div className='max-w-[900px] mx-auto'>
      <h2 className="text-center text-3xl font-bold py-10">検索結果</h2>
      {/* ここからをmapでてんかいすればよい */}
      <div className='mx-10 px-10 border-2 rounded-lg border-black mb-2'>
        <div className='flex justify-between pt-4'>
          <h3 className='font-bold text-xl'>ユーザー名</h3>
          <p className='text-white bg-indigo-700 px-2 rounded-xl '>2 matches</p>
        </div>
        <div className='flex flex-wrap py-4'>
          <p className='bg-slate-200 rounded-xl p-1 mr-4 mb-4'>フロントエンド</p>
          <p className='bg-slate-200 rounded-xl p-1 mr-4 mb-4'>Figma</p>
          <p className='bg-slate-200 rounded-xl p-1 mr-4 mb-4'>Javascript</p>
          <p className='bg-slate-200 rounded-xl p-1 mr-4 mb-4'>フロントエンド</p>
          <p className='bg-slate-200 rounded-xl p-1 mr-4 mb-4'>フロントエンド</p>
        </div>
      </div>
      {/* ここまで */}
      <div className='mx-10 px-10 border-2 rounded-lg border-black'>
        <div className='flex justify-between pt-4'>
          <h3 className='font-bold text-xl'>ユーザー名</h3>
          <p className='text-white bg-indigo-700 px-2 rounded-xl '>2 matches</p>
        </div>
        <div className='flex flex-wrap py-4'>
          <p className='bg-slate-200 rounded-xl p-1 mr-4 mb-4'>フロントエンド</p>
          <p className='bg-slate-200 rounded-xl p-1 mr-4 mb-4'>Figma</p>
          <p className='bg-slate-200 rounded-xl p-1 mr-4 mb-4'>Javascript</p>
          <p className='bg-slate-200 rounded-xl p-1 mr-4 mb-4'>フロントエンド</p>
          <p className='bg-slate-200 rounded-xl p-1 mr-4 mb-4'>フロントエンド</p>
        </div>
      </div>
    </div>
  )
}

export default Result;
