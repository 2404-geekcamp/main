import React, { useState } from 'react'
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='h-screen pt-32'>
      <h1 className='text-center text-3xl font-bold my-10'>新規登録</h1>
      <form action="" className='flex flex-col mx-auto w-[300px]'>
        <label htmlFor="username">ユーザー名</label>
        <input type="text" name="username" id="username" className='mt-[5px] mb-[20px] h-[40px] border-2'/>
        <label htmlFor="email">メールアドレス</label>
        <input type="email" name="email" id="email" className='mt-[5px] mb-[20px] h-[40px] border-2'/>
        <label htmlFor="password">パスワード</label>
        <input type="password" name="password" id="password" className='mt-[5px] mb-[20px] h-[40px] border-2'/>
        <button type="submit" className='w-[200px] bg-black text-white mx-auto h-[40px]'>登録</button>
      </form>
      <Link to="/signin" className='block text-center mt-[40px] text-blue-500'>ログイン画面へ</Link>
    </div>
  )
}

export default SignUp;
