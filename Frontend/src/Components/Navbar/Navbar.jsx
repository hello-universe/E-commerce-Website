import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";

function Navbar({ category, changeCategory }) {
  const {state} = useContext(CartContext);
  const [hasSidebar, setHasSidebar] = useState(true);
  const [hasSearchBar, setHasSearchBar] = useState(false);
  const [hasLargeScreen, setHasLargeScreen] = useState(false);
  const openSidebar = () => {
    setHasSidebar(true);
  };
  const closeSidebar = () => {
    setHasSidebar(false);
  };

  const handleResize = () => {
    // Set hasSidebar to true when screen size hits md breakpoint (tailwindcss)
    setHasSidebar(window.innerWidth >= 900); // Adjust the breakpoint as needed
    setHasLargeScreen(window.innerWidth >= 900);
  };
  useEffect(() => {
    //Run the handleResize() method on the initial render

    handleResize();

    //Adding event listner for resize so that the navbar is visible

    window.addEventListener("resize", handleResize);
    return () => {
      //Cleanup function for the event listner

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-12 w-[96%] xl:w-[81%] mx-auto fixed inset-0 z-10">
      <nav className="w-full mx-auto h-full text-2xl flex justify-between items-center bg-white ">
        {/* If there is search bar then do not display the menu bar */}

        {hasSearchBar ? (
          <></>
        ) : (
          <div className="menu md2:hidden" onClick={openSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
        )}

        {/* If there is search bar and currently it is a small screen then display the back button else do not display it */}

        {hasSearchBar && hasLargeScreen===false? (
          <div className="back-button" onClick={() => setHasSearchBar(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </div>
        ) : (
          <></>
        )}

        {/* LOGO */}
        <Link to='/'>
        <div className="logo text-2xl font-bold  [text-shadow:_0_3px_0_rgb(0_0_0_/_45%)]">
          ECOM
        </div>
        </Link>

        {/* Cart, search button and search bar */}

        <div className="cart-and-search flex gap-8 items-center">

          {/* Cart button and number of items */}

          <Link to='/cart'>
          <div className="cart flex gap-1">
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
            <span className="num-of-items w-[1.6rem] h-[1.6rem] rounded-full bg-red-500  text-white  text-sm flex justify-center items-center">
              {state.count}
            </span>
            </div>
          </Link>
          <div
            className={
              "search-btn-and-bar  flex z-20   items-center   " +
              (hasSearchBar || hasLargeScreen
                ? "absolute right-[0px] w-[92%] md2:w-[35%] xl:w-[48%] 2xl:w-[55%] md2:left-40     bg-[#f1f1f1] outline outline-none  rounded-lg pl-1"
                : "")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              onClick={() => setHasSearchBar(true)}
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>

            {/* If either it is a large screen or hasSearchBar is set to true, then only show the search bar */}

            {hasSearchBar || hasLargeScreen ? (
              <div className="search-bar w-full rounded-lg">
                <input
                  type="text"
                  placeholder="Search the Product"
                  className="text-[1.07rem] pl-2 w-full bg-[#f1f1f1] rounded-lg focus:outline-none"
                />
              </div>
            ) : (
              <></>
            )}
          </div>

          {/* Login and Sign UP buttons */}
          {/* They will be hidden until md2 breakpoint hits */}

          <div className="login bg-black text-xl text-white py-1 px-8 rounded-3xl hidden md2:block">
            Login
          </div>
          <div className="sign-up py-1 px-8 text-xl bg-[#dedede] rounded-3xl border border-slate-300 hidden md2:block">
            Sign Up
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {/* If hasSidebar is true then display the the sidebar else display nothing */}

      {hasSidebar ? (
        <ul
          className={
            "sidebar flex flex-col gap-3 p-3 text-base fixed pt-3 top-0 left-0 z-10 h-screen w-[60%] bg-[#d1d1d1ee] text-slate-800 md2:static md2:flex-row md2:h-auto md2:w-full md2:justify-center md2:bg-white md2:gap-20 md2:text-lg md2:font-normal"
          }
        >
          <li className="close-icon md2:hidden" onClick={closeSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </li>
          <li
            className={
              "py-1.5 pl-2 cursor-pointer md2:p-0 " +
              (category === "men"
                ? !hasLargeScreen
                  ? "selected"
                  : "selected-large"
                : "")
            }
            id="men"
            onClick={(event) => changeCategory(event.target.id)}
          >
            Men's clothing
          </li>
          <li
            className={
              "py-1.5 pl-2 cursor-pointer md2:p-0 " +
              (category === "women"
                ? !hasLargeScreen
                  ? "selected"
                  : "selected-large"
                : "")
            }
            id="women"
            onClick={(event) => changeCategory(event.target.id)}
          >
            Women's clothing
          </li>
          <li
            className={
              "py-1.5 pl-2 cursor-pointer md2:p-0 " +
              (category === "kid"
                ? !hasLargeScreen
                  ? "selected"
                  : "selected-large"
                : "")
            }
            id="kid"
            onClick={(event) => changeCategory(event.target.id)}
          >
            Kids
          </li>
          <li
            className={
              "py-1.5 pl-2 cursor-pointer md2:p-0 " +
              (category === "electronics"
                ? !hasLargeScreen
                  ? "selected"
                  : "selected-large"
                : "")
            }
            id="electronics"
            onClick={(event) => changeCategory(event.target.id)}
          >
            Electronics
          </li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Navbar;
