import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons'
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'





export default function Booking() {
  return (
    <div className='bg-gradient-to-b from-gray-800 via-gray-900 to-black'>
        <div className='p-10 boder '>
            <h1 className='text-center sm:text-center text-6xl font-bold'>Why Choose TravelBooker?</h1>
            <p className='m-5 text-center text-2xl text-slate-400'>
We make your travel dreams come true with exceptional service and unforgettable experiences                </p>
        </div>
        <div className='w-[900px] flex flex-col  ml-80 justify-center gap-8'>
            <div className='h-40   flex align-center justify-around'>
                <div className='flex flex-col align-center justify-center  hover:animate-up-down'>
                    <div className='h-20 w-20  ml-20 flex align-center justify-center bg-gradient-to-b from-gray-700 to-purple-950 rounded-full '>
                <FontAwesomeIcon icon={faGlobe} className='text-yellow-500 mt-4  text-4xl' />
                </div>
                <h1 className='font-semibold ml-10 text-yellow-500'>  Global Destinations </h1>
                <p className='text-blue-300 hidden md:block '>We are winnig a  lot of award the by </p>
                </div>
                <div className='flex flex-col align-center justify-center hover:animate-up-down'>
                                        <div className='h-20 w-20  ml-20 flex align-center justify-center bg-gradient-to-b from-gray-700 to-purple-950 rounded-full '>
                <FontAwesomeIcon icon={faShieldAlt} className='text-yellow-500 mt-4  text-4xl' />
                </div>
                <h1 className='font-semibold ml-20 text-yellow-500'>Secured booking</h1>
                <p className='text-blue-300 hidden md:block'>Over 50,000 happy travelers across the world</p>

                </div>
                <div className='flex flex-col align-center justify-center  hover:animate-up-down'>
               <div className='h-20 w-20  ml-10 flex align-center justify-center bg-gradient-to-b from-gray-700 to-purple-950 rounded-full '>
                <FontAwesomeIcon icon={faHeadset} className='text-yellow-500 mt-4  text-4xl' />
                </div>
                <h1 className='font-semibold ml-10 text-yellow-500'>24/7 support</h1>
                <p className='text-blue-300 hidden md:block'>Stay at top-rated hotels,beach </p>

                </div>
            </div>
                        <div className='h-40 flex align-center justify-around'>
                <div className='flex flex-col align-center justify-center  hover:animate-up-down'>
                                   <div className='h-20 w-20  ml-20 flex align-center justify-center bg-gradient-to-b from-gray-700 to-purple-950 rounded-full '>

                <FontAwesomeIcon icon={faPlane} className='text-yellow-500 mt-4  text-4xl' />
                </div>
                <h1 className='font-semibold ml-10 text-yellow-500'>Hassles-Free Flights</h1>
                <p className='text-blue-300 hidden md:block'>Get best deals on  interational flights </p>
                </div>
                <div className='flex flex-col align-center justify-center  hover:animate-up-down'>
                <div className='h-20 w-20  ml-20 flex align-center justify-center bg-gradient-to-b from-gray-700 to-purple-950 rounded-full '>
                <FontAwesomeIcon icon={faAward} className='text-yellow-500 mt-4  text-4xl' />
                </div>
                <h1 className='font-semibold ml-10 text-yellow-500'>Award wining company</h1>
                <p className='text-blue-300 hidden md:block'>Explore the world's places with Us</p>
                </div>
                <div className='flex flex-col align-center justify-center  hover:animate-up-down'>
                <div className='h-20 w-20  ml-20 flex align-center justify-center bg-gradient-to-b from-gray-700 to-purple-950 rounded-full '>
                <FontAwesomeIcon icon={faPersonHiking} className='text-yellow-500 mt-4  text-4xl' />
                </div>
                <h1 className='font-semibold ml-10 text-yellow-500'>Adventure Experts</h1>
                <p className='text-blue-300 hidden md:block'>From trekking to camping  tour </p>

                </div>
            </div>

        </div>
    
    </div>
  )
}
