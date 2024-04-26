import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='wrapper'>
      <h1>ログイン</h1>
      <form action="">
        <label htmlFor="email">メールアドレス</label>
        <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <label htmlFor="password">パスワード</label>
        <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <button type="submit">ログイン</button>
      </form>
      <Link to="/signup" className='toLogin'>新規登録画面へ</Link>
    </div>
  )
};

export default SignIn;
