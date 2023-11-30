import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-center ">
        <img
          src="https://i.ibb.co/B3kQ8q0/404.gif"
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
