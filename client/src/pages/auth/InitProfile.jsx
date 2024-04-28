import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SetButton from '../../components/auth/SetButton';

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const InitProfile = () => {

  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get(apiUrl + "/skills")
      .then((res) => {
        setSkills(res.data.data);
      })
  }, []);

  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    axios.get(apiUrl + "/experience_options")
      .then((res) => {
        setExperiences(res.data);
      })
  }, []);

  const navigate = useNavigate();

  const [stances, setStances] = useState([]);
  useEffect(() => {
    axios.get(apiUrl + "/stance_options")
      .then((res) => {
        setStances(res.data);
      })
  }, []);

  const [ userHasSkills, setUserHasSkills ] = useState([]);
  const [ userHasExperiences, setUserHasExperiences ] = useState();
  const [ userHasStances, setUserHasStances ] = useState();

  const handleChangeSkills = (value) => {
    const newSkills = [...userHasSkills, value];
    setUserHasSkills(newSkills);
  }

  const handleChangeExperiences = (value) => {
    setUserHasExperiences(value);
  }

  const handleChangeStances = (value) => {
    setUserHasStances(value);
  }

  const createProfile = () => {
    const createProfile = {
      skill_ids:            userHasSkills,
      experience_option_id: userHasExperiences,
      stance_option_id:     userHasStances
    };
    axios.post(apiUrl + "/create_profile", createProfile)
      .then(res => {
        if(!res.data.success) return;
        navigate("/home");
      });
  }


  return (
    <div className='mx-auto max-w-[900px] h-screen pt-32  px-8' >
      <h1 className='text-center text-3xl font-bold my-10'>プロフィール設定</h1>
      <div className='mx-auto'>
        <h2 className='text-xl font-bold mt-10'>技術</h2>
        <div className='mt-4 flex flex-wrap'>
          {
            skills.map((skill) => {
              return (
                <SetButton key={skill.id} onClick={handleChangeSkills} text={skill.name} id={skill.id} />
              )
            })
          }
        </div>
      </div>

      <div>
        <h2 className='text-xl font-bold mt-10'>ハッカソン出場経験</h2>
        <div className='mt-4 flex flex-wrap'>
          {
            experiences.map((experience) => {
              return (
                <SetButton key={experience.id} onClick={handleChangeExperiences} text={experience.name} id={experience.id} />
              )
            })
          }
        </div>
      </div>
      <div>
        <h2 className='text-xl font-bold mt-10'>ハッカソンへのスタンス</h2>
        <div className='mt-4 flex flex-wrap'>
          {
            stances.map((stance) => {
              return (
                <SetButton key={stance.id} onClick={handleChangeStances} text={stance.name} id={stance.id} />
              )
            })
          }
        </div>
      </div>
      <button onClick={createProfile} className='w-[200px] bg-black text-white mx-auto h-[40px]'>登録</button>
    </div>
  )
}

export default InitProfile;
