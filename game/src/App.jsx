import Home from './components/home';
import { Outlet, Route, BrowserRouter, Routes } from 'react-router-dom';
import Navig from './components/Navig';
import Footer from './components/Footer';





const Layout = () => {
  return (
    <>
      <Navig />
        <Outlet />
      <Footer />
    </>
  )
}
function App() {
  return (

  <>
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<Layout/>}>

        <Route path='home' element={<Home/>} />
        {/* <Route path='about' element={<About/>} /> */}
        {/* <Route path='contact' element={<Contact />} />  */}

      </Route>
    </Routes>
  </BrowserRouter>
  </>
  )


}

export default App
// import React from 'react'

// function App() {
//   return (
//     <div style={{flex:1, backgroundColor:'red'}}>App</div>
//   )
// }

// export default App
