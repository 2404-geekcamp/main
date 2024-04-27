import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const Search = () => {
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

  const [stances, setStances] = useState([]);
  useEffect(() => {
    axios.get(apiUrl + "/stance_options")
      .then((res) => {
        setStances(res.data);
      })
  }, []);

  return (
    <>
      <form action="/search/result">
        <div className="skills">
          {skills.map((skill) => {
            return (
              <label key={skill.id}>
                <input type="checkbox" name="skills" value={skill.id} />
                {skill.name}
              </label>
            );
          })}
        </div>

        <div className="experience">
          {experiences.map((experience) => {
            return (
              <label key={experience.id}>
                <input type="radio" name="experiences" value={experience.id} />
                {experience.name}
              </label>
            );
          })}
        </div>

        <div className="stance">
          {stances.map((stance) => {
            return (
              <label key={stance.id}>
                <input type="radio" name="stances" value={stance.id} />
                {stance.name}
              </label>
            );
          })}
        </div>

        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default Search;
