import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import Fileupload from "./Fileupload";
import { useDispatch, useSelector } from "react-redux";
import { setUploadstate } from "../utils/UserSlice";

const Footer = () => {
  let value = useSelector((store) => store.user.uploadstate);
  let namevalue = useSelector((store) => store.user.userdetails.name);
  const dispatch = useDispatch();
  console.log("value", value);

  return (
    <div className="sticky bottom-0 w-full bg-white z-10">
      <div className="flex justify-center gap-36 border-t-2 py-4">
        <Link to={"/"}>
          <span className="text-5xl">🏛</span>
        </Link>
        <span className="text-5xl">
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
          <span className="text-5xl">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
