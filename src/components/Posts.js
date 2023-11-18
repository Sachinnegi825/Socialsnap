import React, { useEffect, useState } from "react";
import Postsdata from "./Postsdata";
import { useSelector } from "react-redux";

const Posts = () => {
  const [Posts, setPosts] = useState([]);
  const value = useSelector((store) => store.user.post);
  const namevalue = useSelector((store) => store.user.userdetails.name);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://randomuser.me/api/?results=15");
    const json = await data.json();
    setPosts(json?.results);
  };

  return (
    <div className="w-full relative top-28">
      {value ? (
        <div className="w-[80%] lg:w-[30%] mx-auto mb-20">
          <Postsdata name={namevalue} image={value} />
        </div>
      ) : null}

      <div className="w-[80%] lg:w-[30%] flex gap-20 justify-between flex-col mx-auto">
        {Posts.map((item) => {
          return (
            <Postsdata name={item.name.first} image={item.picture.large} />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
