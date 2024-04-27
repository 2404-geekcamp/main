import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='h-screen pt-32'>
      <h1 className='text-center text-3xl font-bold py-10'>ログイン</h1>
      <form action="" className='flex flex-col mx-auto w-[300px]'>
        <label htmlFor="email">メールアドレス</label>
        <input type="email" name="email" id="email" className='mt-[5px] mb-[20px] h-[40px] border-2' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <label htmlFor="password">パスワード</label>
        <input type="password" name="password" id="password" className='mt-[5px] mb-[20px] h-[40px] border-2' onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <button type="submit" className='w-[200px] bg-black text-white mx-auto h-[40px]'>ログイン</button>
      </form>
      <Link to="/signup" className='block text-center mt-[40px] text-blue-500'>新規登録画面へ</Link>
    </div>
  )
};

export default SignIn;
