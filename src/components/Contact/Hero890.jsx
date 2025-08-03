export default function Hero890() {
  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/3102824/pexels-photo-3102824.jpeg"
        alt="Background"
        className="absolute  w-full h-full object-cover opacity-80"
      />

      {/* Overlay */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-10">
        {/* Left Content */}
        <div className="max-w-lg">
          {/* Search Bar */}

           <div className='w-[1100px] h-[300px] m-4 mt-20 '>
          <div className='m-4'>
            <h1 className='text-7xl m-2 font- text-white-600'>Let us plan you  perfect a </h1>
             <h1 className='text-8xl m-2 font-extrabold text-orange-600'>India Holiday</h1>
              <p className='text-xl'>Tour My India, one of the best travel agencies in India, offers custom-crafted tour packages for unforgettable holiday experiences across the country.</p>

          </div>
           </div>
                     <div className="flex items-center mb-6 bg-white w-[900px] p-2 rounded-md">       
            <input
              type="text"
              placeholder="Madrid"
              className="bg-transparent outline-none px-4 w-full"
            />
            <button className="px-4 py-1 text-white">🔍</button>
          </div>

        </div>
        

        {/* Right Hexagon Grid */}
         
    
      </div>
      
    </div>
  );
}