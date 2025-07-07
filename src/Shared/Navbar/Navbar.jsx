import { useEffect, useState } from "react";
import logo from "../../assets/logo_white.png";
import { useScrollContext } from "../../ScrollContext";

const Navbar = () => {
  const { sectionARef, sectionBRef, sectionCRef } = useScrollContext();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !isSticky) {
        setIsSticky(true);
      } else if (window.scrollY === 0 && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <div
      className={`fixed z-30 top-0 left-0 right-0 ${
        isSticky ? "bg-white" : "bg-transparent"
      }`}
    >
      <div
        className={`navbar px-4 lg:px-16 ${
          isSticky ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52`}
            >
              <li>
                <button
                  onClick={() =>
                    sectionARef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <a>Home</a>
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    sectionBRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <a>Servizi</a>
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    sectionCRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <a>Contattaci</a>
                </button>
              </li>
            </ul>
          </div>
          <div>
            {isSticky ? (
              <img src={logo} className="w-[100px]  bg-cover" alt="" />
            ) : (
              <img src={logo} className="w-[100px]   bg-cover" alt="" />
            )}
          </div>
        </div>
        <div className={`navbar-center hidden lg:flex`}>
          <ul
            className={`menu uppercase font-semibold tracking-wider menu-horizontal px-1 ${
              isSticky ? "text-black" : "text-white"
            }`}
          >
            <li>
              <button
                onClick={() =>
                  sectionARef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <a>Home</a>
              </button>
            </li>

            <li>
              <button
                onClick={() =>
                  sectionBRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <a>Servizi</a>
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  sectionCRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <a>Contattaci</a>
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn bg-mezenda hover:bg-blue-800 duration-500 text-white border-none">
            Get start
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
