import React from 'react'

const InitProfile = () => {
  return (
    <div className='mx-auto max-w-[900px] h-screen pt-32 mx-10 px-10'>
      <h1 className='text-center text-3xl font-bold my-10'>プロフィール設定</h1>
      <div className='mx-auto'>
        <h2 className='text-xl font-bold mt-10'>技術</h2>
        <div className='mt-4 flex flex-wrap'>
          <p className='m-1 p-2 bg-slate-200 rounded-full'>サンプル</p>
          <p className='m-1 p-2 bg-slate-200 rounded-full'>フロントエンド</p>
          <p className='m-1 p-2 bg-slate-200 rounded-full'>バックエンド</p>
          <p className='m-1 p-2 bg-slate-200 rounded-full'>インフラ</p>
          <p className='m-1 p-2 bg-slate-200 rounded-full'>Figma</p>
        </div>
      </div>
      <div>
        <h2 className='text-xl font-bold mt-10'>ハッカソン出場経験</h2>
        <div className='mt-4 flex flex-wrap'>
          <p className='m-1 p-2 bg-slate-200 rounded-full'>0回</p>
          <p className='m-1 p-2 bg-slate-200 rounded-full'>1回~3回</p>
          <p className='m-1 p-2 bg-slate-200 rounded-full'>4回~9回</p>
          <p className='m-1 p-2 bg-slate-200 rounded-full'>10回以上</p>
        </div>
      </div>
      <div>
        <h2 className='text-xl font-bold mt-10'>ハッカソンへのスタンス</h2>
        <div className='mt-4 flex flex-wrap'>
          <p className='m-1 p-2 bg-slate-200 rounded-full'>とりあえず出てみたい</p>
          <p className='m-1 p-2 bg-slate-200 rounded-full'>楽しみたい</p>
          <p className='m-1 p-2 bg-slate-200 rounded-full'>賞を狙いたい</p>
          <p className='m-1 p-2 bg-slate-200 rounded-full'>新しい技術を学びたい</p>
          
        </div>
      </div>
      
      
    </div>
  )
}

export default InitProfile;
