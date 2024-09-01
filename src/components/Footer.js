import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import Fileupload from "./Fileupload";
import { useDispatch, useSelector } from "react-redux";
import { setUploadstate } from "../utils/UserSlice";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  let value = useSelector((store) => store.user.uploadstate);
  let namevalue = useSelector((store) => store.user.userdetails.name);
  const dispatch = useDispatch();

  return (
    <div className="fixed bottom-0 w-full bg-white z-10 border-t border-gray-300">
      <div className="flex justify-around py-4 items-center">
        <Link to={"/"}>
          <span className="text-3xl hover:text-blue-500 transition-colors duration-300">
            <FontAwesomeIcon icon={faHouse} />
          </span>
        </Link>
        <span className="text-3xl hover:text-blue-500 transition-colors duration-300">
          <button
            onClick={() => {
              namevalue
                ? dispatch(setUploadstate(!value))
                : alert("Please login/signup first");
            }}
          >
            <FontAwesomeIcon icon={faSquarePlus} />
          </button>

          {value ? <Fileupload /> : null}
        </span>
        <Link to={"/signup"}>
          <span className="text-3xl hover:text-blue-500 transition-colors duration-300">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
