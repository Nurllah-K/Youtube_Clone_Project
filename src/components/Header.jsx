import { Link, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FaBell } from "react-icons/fa";
import { PiVideoCameraFill } from "react-icons/pi";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    // console.log(text);
    navigate(`/results?search_query=${text}`);
  };
  return (
    <header className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px] ">
        <img className="w-[50px]" src="/youtube.png" alt="youtube logo" />
        <h1 className="text-3xl max-sm:hidden">Youtube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex items-center  border border-gray-400 rounded-[20px]"
      >
        <input
          className="bg-black outline-none rounded-[20px] px-3 py-1"
          type="text"
        />
        <button className="border-l px-2 ">
          <GoSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400" />
        <PiVideoCameraFill className="hover:text-gray-400" />
      </div>
    </header>
  );
};

export default Header;
