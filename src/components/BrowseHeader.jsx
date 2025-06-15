import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUserToken } from "../utils/userTokenSlice";
import { NETFLIX_LOGO_IMG, USER_ICON } from "../utils/constants";

function BrowseHeader() {
  const [isExpand, setIsExpand] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => {
    return store?.userToken?.token?.displayName;
  });

  function handleIconClick() {
    setIsExpand(!isExpand);
  }

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        dispatch(removeUserToken());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  }

  return (
    <div className="fixed top-0 w-full bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="h-24 mx-20" src={NETFLIX_LOGO_IMG} alt="netflix-logo" />
      <div className="flex flex-col p-4 mr-16">
        <img
          onClick={handleIconClick}
          className="rounded p-1 mx-auto h-17 w-17 hover:cursor-pointer"
          src={USER_ICON}
          alt="netflix-profile-icon"
        />
        {isExpand ? (
          <div className="flex flex-col bg-black text-white w-48 py-4 absolute top-22 right-21 z-20">
            <div className="flex items-center p-2 hover:border-2 border-white cursor-pointer">
              <i className="fa-regular fa-user ml-1 mr-5"></i>
              <span>{user ? user : "Account"}</span>
            </div>
            <div className="flex items-center mt-2 p-2 hover:border-2 border-white cursor-pointer">
              <i className="fa-regular fa-circle-question ml-1 mr-4"></i>
              <span>Help Center</span>
            </div>
            <div className="flex items-center mt-2 p-2 hover:border-2 border-white cursor-pointer">
              <i className="fa-solid fa-arrow-right-from-bracket ml-1 mr-4"></i>
              <span onClick={handleSignOut}>Sign out of Netflix</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default BrowseHeader;
