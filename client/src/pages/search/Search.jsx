import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const Search = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get(apiUrl + "/skills")
      .then((res) => {
        setSkills(res.data);
      })
  }, []);
  console.log(skills)

  return (
    <>
      <form action="#" method="post">
        <div className="skills">
          {
            skills.map((skill) => {
              return (
                <div key={skill.id} className="skill">
                  <input type="checkbox" name="skill" value={skill.id} id={skill.id} />
                  <label htmlFor={skill.id}>{skill.name}</label>
                </div>
              )
            })
          }
        </div>
      </form>
    </>
  )
}

export default Search;
