// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
//  const background = URL('../assets/bg1.PNG');
  return (
    <>
      <div className=" w-full h-full bg-black" >
        <div style={{position:'fixed', }} className='bg-black w-full'>
        <ul >
          <li className='float-left'>
            <a href="#" target="_blank" className='text-white block p-4  '>Home</a>
          </li>
          <li className='float-left'>
            <a href="#" target="_blank" className='text-white block p-4'>Gerne</a>
          </li>
          <li className='float-left'>
            <a href="#" target="_blank" className='text-white block p-4 '>Country</a>
          </li>
          <li className='float-left'>
            <a href="#" target="_blank" className='text-white block p-4 '>Movies</a>
          </li>
          
            <input type="text" className="w-64 h-8 pb-2 pl-2 mt-4 rounded-lg" placeholder="search movies ..." name='search'/>
        
          <li className='float-left'>
            <a href="#" target="_blank" className='text-white block p-4'>Series</a>
          </li>
          <li className='float-left'>
            <a href="#" target="_blank" className='text-white block p-4'>Animations</a>
          </li>
          <li className='float-left'>
            <a href="#" target="_blank" className='text-white block p-4 '>Login/SignUp</a>
          </li>
        </ul>
        </div>
        <div>
        <div className='flex justify-center items-center h-screen gap-12'>
            <div className='w-44 h-12 rounded-lg bg-red-500 border-2'>
              <p className='text-center pt-1 text-2xl text-white '>Watch Now</p>
            </div>
            <div className='w-44 h-12 rounded-lg border-red-600 border-2'>
              <p className='text-center pt-1 text-2xl text-white '> Watch Later</p>
            </div>
          </div>
          <div>
          <div>
          <h2 className='text-2xl text-white'>Avatar: The way of Water</h2>
          </div>
          <div>
          <p className='border-2'> Action</p>
          <p> Adventure</p>
          <p> Science fiction</p>
          <p> 2022</p>
          <p> 3:12:04</p>
          <p> 8.5</p>
          </div>
          <div>
          <p className='text-white'>
            Avatar: The Way of Water is a 2021 science fiction action-adventure
             film directed by Ethan Scheiderman and written by Bradley Cooper,
              Derek Hawke, and Christopher Lee. The film stars Jennifer Lawrence, 
            Ryan Reynolds, and Christopher Nolan.
          </p>
          </div>
          <div>
            
          </div>
          
          
        </div>
        </div>
          
        

      </div>
    </>
       
  )
}
export default App
