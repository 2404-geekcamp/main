import React from "react";
import { useParams } from "react-router-dom";
import icon from "../samples/icon.png";
import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import axios from "axios";
import CheckButton from "../components/CheckButton.jsx";

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const userIdEdit = () => {
  let { id } = useParams();
  //usestateでもともとの値を設定するといった想定
  const [userName, setUserName] = useState("Big Gyoza");
  const [userProfile, setUserProfile] = useState("でたい");

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
      <Header
        backPath={`/user/${id}`}
        back={"<"}
        forWardPath={""}
        forward={""}
      />
      <div className="mx-auto max-w-[900px] p-8 my-8">
        {/* <h1>{ id }</h1> */}
        <div className="flex justify-between">
          <img src={icon} alt="" style={{ width: "80px", height: "80px" }} />
          <button className="bg-indigo-700 py-4 px-6 h-fit rounded-lg text-white font-bold">
            更新する
          </button>
        </div>
        <div className="w-full">
          <form action="" className="mt-4">
            <label htmlFor="username" className="block mt-4 mb-2">
              名前
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-700 p-2 max-w-full	w-[400px]"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <label htmlFor="input-profile" className="block mt-4 mb-2">
              自己紹介
            </label>
            <textarea
              name="input-profile"
              id="input-profile"
              className="border border-gray-700 h-20 w-[400px] max-w-full resize-none p-2"
              onChange={(e) => setUserProfile(e.target.value)}
              value={userProfile}
            ></textarea>
            <div className="flex flex-col gap-8 mt-8">
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default userIdEdit;
