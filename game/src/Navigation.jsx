import "./App.css";

function Navigation() {
  return (

     
        <div
          style={{ position: "fixed" }}
          className="bg-black w-full flex justify-center gap-8"
        >
          <li className="float-left">
            <a href="#" target="_blank" className="text-white block ">
              Home
            </a>
          </li>
          <li className="float-left">
            <a href="#" target="_blank" className="text-white block ">
              Gerne
            </a>
          </li>
          <li className="float-left">
            <a href="#" target="_blank" className="text-white block ">
              Country
            </a>
          </li>
          <li className="float-left">
            <a href="#" target="_blank" className="text-white block ">
              Movies
            </a>
          </li>
          <div className="mt-5">
            <input
              type="text"
              className="w-64 h-8 pb-2 pl-2 rounded-2xl"
              placeholder="search movies ..."
              name="search"
            />
          </div>

          <div className="flex gap-8">
            <li className="float-left">
              <a href="#" target="_blank" className="text-white block pb-4">
                Series
              </a>
            </li>
            <li className="float-left">
              <a href="#" target="_blank" className="text-white block pb-4">
                Animations
              </a>
            </li>
            <li className="float-left">
              <a href="#" target="_blank" className="text-white block pb-4 ">
                Login/SignUp
              </a>
            </li>
            <a href="#" className="float-left pt-1 mr-3 mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6 w-5 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </a>
          </div>
        </div>
        
        )}

        export default Navigation;
      

