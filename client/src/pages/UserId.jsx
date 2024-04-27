import React from 'react'
import { useParams } from 'react-router-dom';
import icon from '../samples/icon.png'



const userId = () => {
  let { id } = useParams();
  return (
    <div className='mx-auto max-w-[900px] p-8 bg-slate-300	 mx-8 my-8 rounded-md'>
      {/* <h1>{ id }</h1> */}
      <div className='flex  '>
        <img src={icon} alt="icon sample" style={{ width: '80px'}} />
        <h2 className='text-2xl font-bold ml-4'>BIG GYOZA</h2>
        
      </div>
      <div>
          <p className='text-xl font-bold mt-10'>技術</p>
          <div className='flex max-w-full flex-wrap w-4/5	'>
          <p className='mx-2 my-2 bg-white p-1 rounded-lg'>Sample</p>
          <p className='mx-2 my-2 bg-white p-1 rounded-lg'>Sample</p>
          <p className='mx-2 my-2 bg-white p-1 rounded-lg'>Sample</p>
          <p className='mx-2 my-2 bg-white p-1 rounded-lg'>Sample</p>
          <p className='mx-2 my-2 bg-white p-1 rounded-lg'>Sample</p>
          <p className='mx-2 my-2 bg-white p-1 rounded-lg'>Sample</p>
          <p className='mx-2 my-2 bg-white p-1 rounded-lg'>Sample</p>
        </div>
        <div className=''>
        <p className='text-xl font-bold mt-10'>自己紹介</p>
        <p className='mx-2 my-2 bg-white p-1 rounded-lg'>ここに自己紹介テキストが来ます
        サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
        </div>
      </div>
    </div>
    

  )
}

export default userId;
