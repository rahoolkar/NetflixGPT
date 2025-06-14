import { NETFLIX_LOGO_IMG } from "../utils/constants";

function LoginHeader() {
  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-20">
      <img
        className="h-24 mx-20"
        src={NETFLIX_LOGO_IMG}
        alt="netflix-logo"
      />
    </div>
  );
}

export default LoginHeader;
