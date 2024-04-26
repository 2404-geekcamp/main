import React, { useState } from 'react'
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className=''>
      <h1>新規登録</h1>
      <form action="">
        <label htmlFor="username">ユーザー名</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="email">メールアドレス</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">パスワード</label>
        <input type="password" name="password" id="password" />
        <button type="submit">登録</button>
      </form>
      <Link to="/signin" className='toLogin'>ログイン画面へ</Link>
    </div>
  )
}

export default SignUp;
