import React, { useEffect, useState } from "react";
import Postsdata from "./Postsdata";
import { useSelector } from "react-redux";
import Loader from "../loading/Loader";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const postData = useSelector((state) => state.user.postData);
  const userData = useSelector((state) => state.user.userdetails);

  useEffect(() => {
    getData();
    console.log("post", postData);
  }, [postData]);

  const getData = async () => {
    // try {
    //   setLoading(true);
    //   const data = await fetch("https://randomuser.me/api/?results=15");
    //   const json = await data.json();
    //   setPosts(json?.results);
    //   setLoading(false);
    // } catch (error) {
    //   console.error("Failed to fetch data", error);
    //   setLoading(false); // Ensure loading is turned off in case of an error
    // }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full relative top-28">
      {postData
        ? postData?.map((post, index) => {
            return (
              <div className="w-[80%] lg:w-[30%] mx-auto mb-20">
                <Postsdata
                  key={99 + index}
                  image={post.postImage}
                  name={userData?.name}
                  caption={post.postCaption}
                  avatar={userData?.avatar}
                />
              </div>
            );
          })
        : null}

      <div className="w-[80%] lg:w-[30%] flex gap-20 justify-between flex-col mx-auto">
        {posts.map((item, index) => {
          return (
            <Postsdata
              key={index}
              name={item.name.first}
              image={item.picture.large}
              caption=""
              avatar=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
