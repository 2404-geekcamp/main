import React from 'react'
import Button from '../../components/Button';

const InitProfile = () => {
  return (
    <div className='mx-auto max-w-[900px] h-screen pt-32  px-8' >

      <h1 className='text-center text-3xl font-bold my-10'>プロフィール設定</h1>

      <div className='mx-auto'>
        <h2 className='text-xl font-bold mt-10'>技術</h2>
        <div className='mt-4 flex flex-wrap'>
          <Button text={"フロントエンド"} id={"1"} />
          <Button text={"バックエンド"} id={"2"} />
          <Button text={"インフラ"} id={"3"} />
        </div>
      </div>

      <div>
        <h2 className='text-xl font-bold mt-10'>ハッカソン出場経験</h2>
        <div className='mt-4 flex flex-wrap'>
          <Button text={"0回"} id={"4"} />
          <Button text={"1回~3回"} id={"5"} />
        </div>
      </div>
      <div>
        <h2 className='text-xl font-bold mt-10'>ハッカソンへのスタンス</h2>
        <div className='mt-4 flex flex-wrap'>
          <Button text={"とりあえず楽しみたい"} id={"6"} />
          <Button text={"入賞希望"} id={"7"} />
          <Button text={"がんばる"} id={"8"} />

        </div>
      </div>


    </div>
  )
}

export default InitProfile;
