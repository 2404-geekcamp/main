
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import {Header} from '../../components/Header'
import CheckButton from "../../components/CheckButton.jsx";


const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const Search = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get(apiUrl + "/skills").then((res) => {
      setSkills(res.data.data);
    });
  }, []);

  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    axios.get(apiUrl + "/experience_options").then((res) => {
      setExperiences(res.data);
    });
  }, []);

  const [stances, setStances] = useState([]);
  useEffect(() => {
    axios.get(apiUrl + "/stance_options").then((res) => {
      setStances(res.data);
    });
  }, []);

  return (
    <>
      <Header backPath={"/home"} back={"<"} title={"検索"} />
      <div className="max-w-[900px] mx-auto">
        
        <form action="/search/result" className="flex flex-col gap-8">
          <div>
            <div className="mb-4 flex gap-4 items-end">
              <h2 className="text-2xl">技術</h2>
              <span className="text-gray-500">複数選択可</span>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {skills.map((skill) => {
                return (
                  <CheckButton
                    key={skill.id}
                    type="checkbox"
                    inputName="skills"
                    value={skill.id}
                    Name={skill.name}
                  ></CheckButton>
                );
              })}
            </div>
          </div>
          <div>
            <div className="mb-4 flex gap-4 items-end">
              <h2 className="text-2xl">経験</h2>
              <span className="text-gray-500">単一選択</span>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {experiences.map((experience) => {
                return (
                  <CheckButton
                    key={experience.id}
                    type="radio"
                    inputName="experience"
                    value={experience.id}
                    Name={experience.name}
                  ></CheckButton>
                );
              })}
            </div>
          </div>
          <div>
            <div className="mb-4 flex gap-4 items-end">
              <h2 className="text-2xl">スタンス</h2>
              <span className="text-gray-500">単一選択</span>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {stances.map((stance) => {
                return (
                  <CheckButton
                    key={stance.id}
                    type="radio"
                    inputName="stance"
                    value={stance.id}
                    Name={stance.name}
                  ></CheckButton>
                );
              })}
            </div>
          </div>
          <button
            type="submit"
            className="py-2 px-6 mt-8 rounded-full border border-gray-700 hover:bg-gray-50"
          >
            Search
          </button>
        </form>
      </div>

    </>
  );
};

export default Search;
