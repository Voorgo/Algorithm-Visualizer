import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full shadow-lg">
      <nav>
        <div className="w-full max-w-6xl flex mx-auto px-3 py-2 justify-between">
          <div className="text-xl font-bold">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="src/assets/logo.png"
                alt="logo"
                width="40px"
                height="40px"
                className="h-[40px]"
              />
              Algo Visualizer
            </Link>
          </div>
          <Link
            to="/info"
            className="px-3 text-lg font-bold py-2 rounded transition-[background] duration-200 hover:bg-gray-200"
          >
            Info
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
