// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const background = "url('../../public/bg1.png')";
  return (
    <>
      <div className=" w-full h-full">
        <div style={{ position: "fixed" }} className="bg-black w-full">
          <ul>
            <li className="float-left">
              <a href="#" target="_blank" className="text-white block p-4  ">
                Home
              </a>
            </li>
            <li className="float-left">
              <a href="#" target="_blank" className="text-white block p-4">
                Gerne
              </a>
            </li>
            <li className="float-left">
              <a href="#" target="_blank" className="text-white block p-4 ">
                Country
              </a>
            </li>
            <li className="float-left">
              <a href="#" target="_blank" className="text-white block p-4 ">
                Movies
              </a>
            </li>

            <input
              type="text"
              className="w-64 h-8 pb-2 pl-2 mt-4 rounded-lg"
              placeholder="search movies ..."
              name="search"
            />

            <li className="float-left">
              <a href="#" target="_blank" className="text-white block p-4">
                Series
              </a>
            </li>
            <li className="float-left">
              <a href="#" target="_blank" className="text-white block p-4">
                Animations
              </a>
            </li>
            <li className="float-left">
              <a href="#" target="_blank" className="text-white block p-4 ">
                Login/SignUp
              </a>
            </li>
            <a href="#" className="float-left pt-5 mr-3">
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
          </ul>
        </div>
        <div
          style={{
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            backgroundImage: background,
          }}
        >
          <div className="flex justify-center items-center gap-12 h-80 pt-56">
            <div className="w-32 h-10 rounded-lg bg-red-500 ">
              <p className="text-center pt-1 text-lg text-white ">Watch Now</p>
            </div>
            <div className="w-32 h-10 rounded-lg border-red-600 border-2">
              <p className="text-center pt-1 text-lg text-white ">
                Watch Later
              </p>
            </div>
          </div>
          <div>
            <div className="ml-28 pb-8">
              <h2 className="text-2xl text-white">Avatar: The way of Water</h2>
            </div>
            <div className="flex gap-4 ml-28 mb-10">
              <p className=" w-20 bg-white text-center rounded-lg h-8">
                {" "}
                Action
              </p>
              <p className=" w-20 bg-white text-center rounded-lg">
                {" "}
                Adventure
              </p>
              <p className=" w-28 bg-white text-center rounded-lg">
                {" "}
                Science fiction
              </p>
              <p className=" w-20 text-white text-center rounded-lg flex justify-center align-middle gap-1 ">
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                2022
              </p>
              <p className=" w-20 text-white text-center rounded-lg flex justify-center align-middle gap-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 w-5 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                3:12:04
              </p>
              <p className=" w-20 text-white text-center rounded-lg flex justify-center align-middle gap-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 w-5 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                8.5
              </p>
            </div>
            <div>
              <p className="ml-28 text-white w-96 text-sm">
                Avatar: The Way of Water is a 2021 science fiction
                action-adventure film directed by Ethan Scheiderman and written
                by Bradley Cooper, Derek Hawke, and Christopher Lee. The film
                stars Jennifer Lawrence, Ryan Reynolds, and Christopher Nolan.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
