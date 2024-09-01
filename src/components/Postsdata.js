import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShareFromSquare,
  faBookmark,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";
import { setCommentstatevalue } from "../utils/CommentstateSlice";

const Postsdata = ({ name, image, caption, avatar }) => {
  const [color, setcolor] = useState("black");
  const value = useSelector((store) => store.commentstate.commentstateValue);
  const dispatch = useDispatch();

  const setColor = () => {
    if (color === "red") {
      setcolor("black");
    } else {
      setcolor("red");
      alert("You liked the picture");
    }
  };

  return (
    <div className="border-b-2 p-5 w-full">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img
            src={avatar.length > 1 ? avatar : image}
            alt="img"
            className="rounded-full w-6 h-6 outline-2 outline outline-offset-2 outline-red-600"
          />

          <p className="font-bold">{name}</p>
          <FontAwesomeIcon
            icon={faCircleCheck}
            color="blue"
            title="verified user"
          />
        </div>
        <button className="font-bold text-2xl">...</button>
      </div>

      <img src={image} alt="" className="shadow-lg w-full mt-5" />

      <div className="text-2xl flex justify-between p-2 my-3">
        <div className="flex gap-5">
          <button onClick={setColor}>
            <FontAwesomeIcon icon={faHeart} color={color} />
          </button>
          <button onClick={() => dispatch(setCommentstatevalue(!value))}>
            <FontAwesomeIcon icon={faComment} />
          </button>
          <button>
            <FontAwesomeIcon icon={faShareFromSquare} />
          </button>
        </div>
        <div>
          <button>
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>

      <div>
        <p>
          <span className="font-bold">{name}</span>
          <FontAwesomeIcon icon={faCircleCheck} color="blue" className="mx-2" />

          {caption.length > 1 ? (
            <span>{caption} </span>
          ) : (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis iure dolor esse ullam, ab eos magni tempore harum
              cupiditate reprehenderit.
            </span>
          )}
        </p>
      </div>
      <div>{value ? <Comments /> : null}</div>
    </div>
  );
};

export default Postsdata;
