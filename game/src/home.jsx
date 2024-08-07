import "./App.css";

function Home() {
  const background = "url('../../public/bg1.png')";
  return (
    <>
      <div className=" w-full h-full">
        <div
          style={{
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // height: "100vh",
            backgroundImage: background,
          }}
        >
          <div className="flex justify-center items-center gap-12 h-80 pt-56">
            <div className="w-32 h-10 rounded-lg bg-red-500 flex gap-1 justify-center">
              <p className="text-center pt-1 text-lg text-white ">Watch Now</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="white" className="size-6 w-5 h-7 pt-3 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
</svg>
            </div>
            <div className="w-32 h-10 rounded-lg border-red-600 border-2 flex gap-1 justify-center">
              <p className="text-center pt-1 text-lg text-white ">
                Watch Later
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3.5}
                  stroke="white"
                  className="size-6 w-5 h-7 pt-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
            </div>
          </div>
          <div>
            <div className="ml-28 pb-8">
              <h2 className="text-2xl text-white">Avatar: The way of Water</h2>
            </div>
            <div className="flex gap-4 ml-28 mb-8">
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
                  strokeWidth={4.5}
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
            <div className="pb-6">
              <p className="ml-28 text-white w-96 text-sm">
                The Way of Water is a 2021 science fiction action-adventure film
                directed by Ethan Scheiderman and written by Bradley Cooper,
                Derek Hawke, and Christopher Lee. The film stars Jennifer
                Lawrence, Ryan Reynolds, and Christopher Nolan.
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
export default Home;
