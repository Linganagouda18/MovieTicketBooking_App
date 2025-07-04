import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyBookingData, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import BlueCircle from '../components/BlueCircle'
import { GiftIcon, PlayCircleIcon, StarIcon } from 'lucide-react'
import timeFormat from '../lib/timeFormat'
import DateSelect from '../components/DateSelect'
import MovieCard from '../components/MovieCard'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'

const MovieDetails = () => {
  const {id} = useParams()
  const [show , setShow] = useState(null)


  const navigate = useNavigate()
 
  const getShow = async () =>{
    const show = dummyShowsData.find(show => show._id == id)

    if(show) {

      setShow({
        movie : show ,
        dateTime : dummyDateTimeData
      })
    }
  }

  useEffect (() =>{
    getShow()
  },[id])

  return  show ?(
    <div className= '  px-6 md:px-16 lg:px-40 pt-30   md:pt-50'>
      <div className=' relative  flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
        <img src={show.movie.poster_path} className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover' />

        
        <div className=' flex flex-col gap-3'>

          <BlueCircle top='-100px' left='-100px'/>
          <p className='text-red-300'>ENGLISH</p>
          <h1 className='text-4xl font-semibold max-w-96 text-balance'>{show.movie.title}</h1>


          <div className='flex text-center gap-2 text-gray-300'> 
            <StarIcon className='w-5 h-5 text-red-400 fill-red-500' />
            {show.movie.vote_average.toFixed(1)} User Rating 
          </div>


          <p className=' text-gray-400 mt-2 text-sm leading-tight max-w-xl'>{show.movie.overview}</p>

          <p>
            {timeFormat(show.movie.runtime)} -{show.movie.genres.map(genre => genre.name).join(",  ")} - {show.movie.release_date.split('-')[0]}
          </p>
          <div className='flex  gap-4 mt-4 items-center flex-wrap'>
            {/* <button className='py-2.5 px-4 cursor-pointer font-medium hover:bg-red-500  bg-gray-600 rounded-md mt-3 '>Watch Trailer</button>
            <button className='py-2.5 px-4 cursor-pointer font-medium  hover:bg-red-500  bg-red-400 rounded-md mt-3 '>Buy Tickets</button> */}

            <button className='flex items-center gap-2 px-7 py-3 text-sm 
            bg-gray-800 hover:bg-gray-900 transition hover:scale-105 rounded-md font-medium cursor-pointer active:scale-95'>
              <PlayCircleIcon className='w-5 h-5'/>
              Watch Trailer
            </button>
            <a href="#dateSelect" className='px-10 py-3 text-sm bg-red-400  hover:bg-red-500 
            transition rounded-md font-medium cursor-pointer hover:scale-105 active:scale-95'>Buy Tickets</a>
          <button className='bg-gray-700 p-2.5 rounded-full transition mask-clip-stroke active:scale-95'>
              <GiftIcon  className={'w-5 h-5'} />
          </button>
          </div>
        </div>

      </div >


      <p className='text-lg font-medium mt-20'>Your Fav Casts</p>

      <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
        <div className='flex items-center gap-4 w-max px-4'>
          {show.movie.casts.slice(0,8).map((cast,index) => (
            <div key={index}>
               <img src={cast.profile_path} alt="" className=' cursor-pointer rounded-full h-20 md:h-20 aspect-square object-cover'
               onClick={() => window.open(`https://www.google.com/search?q=${cast.name}`)} />
               <p className='font-medium text-xs mt-3'> {cast.name}</p>
              </div>
          ))}
        </div>

      </div>
      <DateSelect dateTime={show.dateTime} id={id} />


      <p className='text-lg font-medium mt-20 mb-8'>You May ALso Like</p>

      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.slice(0,4).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      <div className='flex justify-center mt-20'>
        <button className='px-10 py-3 text-sm bg-red-400 hover:bg-red-500 transition rounded-md font-medium cursor-pointer' onClick={() => {navigate('/movies'); scrollTo(0,0)}}> Show More</button>
      </div>
    </div>
  ) : <Loading />
}

export default MovieDetails
