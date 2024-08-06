import bg1 from './assets/bg1.png';
import arrow from './assets/arrow.png';
import Trailer from './component/Trailer';
import Trending from './component/Trending';


const Movies = () => {
    return(
        <div className='bg-black p-8 '>
            <div className='flex  '>
            <h2 className='text-white text-2xl pb-2'>Recently Update</h2>
        
            </div>
            <div className='flex justify-between'>
            <Trailer
            img={bg1}
            title={"The Flash"}
            description={"Series"}
            date={"2nd,july"}/>
             <Trailer
            img={bg1}
            title={"The Flash"}
            description={"Series"}
            date={"2nd,july"}/>
             <Trailer
            img={bg1}
            title={"The Flash"}
            description={"Series"}
            date={"2nd,july"}/>
             <Trailer
            img={bg1}
            title={"The Flash"}
            description={"Series"}
            date={"2nd,july"}/>

            <div className='rounded-full pt-6 '>
               <img src={arrow} alt="" className=' w-12 h-12 rounded-full'/>
            </div>
            </div>
            <div>
            <div className='flex pt-6 flex-row '>
            <h2 className='text-white text-2xl pb-2'>Trending</h2>
            <p className='text-white text-2xl pb-2'>View all </p>
        
            </div>
                {/* <Trending/> */}
            </div>
        </div>
    )
}
export default Movies;