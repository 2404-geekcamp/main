import React from 'react'
import { useParams } from 'react-router-dom'
import icon from '../samples/icon.png'
import { useState } from 'react'
import Button from '../components/Button'
import { Header } from '../components/Header'

const userIdEdit = () => {
  let { id } = useParams();
  //usestateでもともとの値を設定するといった想定
  const [userName, setUserName] = useState("Big Gyoza")
  const [userProfile,setUserProfile] = useState('でたい') 
  return (
    <>
    <Header backPath={"/user/:id"} back={"<"} forWardPath={""} forward={""} />
    <div className='mx-auto max-w-[900px] p-8 my-8'>
      {/* <h1>{ id }</h1> */}
      <img src={icon} alt="" style={{ width: '80px',height:"80px"}}/>
      <div className="h-[500px] w-full">
        <form action="" className="">
          <label htmlFor="username" className="block">名前</label>
          <input type="text" id="username" className="border-2 border-black h-10 max-w-full	w-[400px]" onChange={(e)=>setUserName(e.target.value)} value={userName}/>
          <label htmlFor="input-profile" className="block">自己紹介</label>
          <textarea name="input-profile" id="input-profile" className="border-2 border-black h-20 w-[400px]	max-w-full h-[250px] " onChange={(e)=>setUserProfile(e.target.value)} value={userProfile}></textarea>
        </form>
      </div>

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
    </>
  )
}

export default userIdEdit;
