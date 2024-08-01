import "./App.css";
// import Trailer from "./component/Trailer";
import Home from "./home";
import Movies from "./Movies";
import Navigation from "./Navigation";

function App() {
  return (
    <>
    <Navigation/>
     <Home/>
     <Movies/>
     {/* <Trailer/> */}
     <footer className="flex justify-center text-white py-4">
       &copy; GIGI
     </footer>
    </>
  );
}
export default App;
