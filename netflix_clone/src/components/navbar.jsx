// import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  //   const navigate = useNavigate();

  //   const clickHandler = (e) => {
  //     e.preventDefault();
  //     navigate("/login");
  //   };

  return (
    <header className="absolute w-full bg-gradient-to-b from-black to-transparent z-10">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid flex justify-between items-center p-4">
          <a className="navbar-brand">
            <img
              className="w-24"
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt=""
            />
          </a>

          <div className="navbar">
            <form className="flex items-center" role="search">
              <select className="bg-black bg-opacity-40 border border-gray-400 text-white text-sm px-4 py-2 mr-5">
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="btn bg-red-600 text-white px-4 py-2">
                Signin
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
