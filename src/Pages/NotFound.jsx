import { Link } from "react-router-dom";
import Title from "../Components/Shared/Title";
const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Title title="404 Not found" />
      <div className="text-center ">
        <img
          src={`${location.origin}/404.gif`}
          alt=""
          className="w-60 mb-6 md:mb-10"
        />
        <Link
          to="/"
          className="px-5 md:px-10 py-2 pb-3 text-sm md:text-base bg-primary-color hover:bg-secondary-color text-white rounded-full"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
