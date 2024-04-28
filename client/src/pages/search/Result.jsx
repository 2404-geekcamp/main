import React, { Suspense, useEffect } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import UserPreviewCard from '../../components/search/UserPreviewCard';
import Loading from '../../components/Loading';
import {Header} from '../../components/Header';

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const Result = () => {
  const [users, setUsers] = React.useState([]);
  const params = new URLSearchParams(useLocation().search);
  const skill_ids = params.getAll('skills').map(Number);
  const experience = Number(params.get('experience'));
  const stance = Number(params.get('stance'));

  useEffect(() => {
    console.log(skill_ids, experience, stance);
    axios
      .post(apiUrl + "/search", { skill_ids, experience, stance })
      .then((res) => {
        setUsers(res.data);
      });
  }, []);
  if(users.length === 0){
    return(
      <>
      <Header backPath={"/search"} back={"<"} forWardPath={""} forward={""} title={"検索結果"} />
      <Loading />
      </>
    )
  }

  return (
    <>
    <Header backPath={"/search"} back={"<"} forWardPath={""} forward={""} title={"検索結果"} />
    <div className='max-w-[900px] mx-auto'>
      {users.map((user) => (
        <UserPreviewCard key={user.id} user={user} />
      ))}
    </div>
    </>
  )
}

export default Result;
