import React from 'react'
import '../../styles/SignUp.css'

const SignUp = () => {
  return (
    <div className='wrapper'>
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
      <a href="">ログイン画面へ</a>
    </div>
  )
}

export default SignUp;
