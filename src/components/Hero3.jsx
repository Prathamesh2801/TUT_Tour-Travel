export default function CampingSection() {
  return (
    <div className="  shadow-xl bg-white    py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-auto">
          <img
  src="https://www.tourmyindia.com/imagess/mumbai-tour.webp"
            alt="Mountain Top"
            className="w-80  h-64 object-cover absolute top-0 left-0 z-0 shadow-lg"
          />
          <img
     src="https://images.pexels.com/photos/27662410/pexels-photo-27662410.jpeg"
            alt="Camp Ground"
            className="w-96 h-64 object-cover mt-24 ml-24 relative z-10 shadow-md"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-4">
            Camper is the best way to find camping tours. Let’s make the most
            memorable adventures.
          </h2>
          <p className="text-gray-600 mb-6">
            Camper Tour is an incredible way to have an adventurous outdoor
            experience of world-renowned national parks and wilderness
            destinations while hiking with only a light daypack and sleeping
            soundly in comfortable, vehicle-accessible camps.
          </p>

          <div className="flex gap-10 mt-6">
            <div>
              <div className="text-indigo-600 text-2xl font-bold">1980</div>
              <div className="text-sm font-medium mt-1 text-gray-300">
                The First Trip We Operated
              </div>
              <p className="text-xs text-gray-500">
                We are in this industry for more than 40 years!
              </p>
            </div>
            <div>
              <div className="text-indigo-600 text-2xl font-bold">1000+</div>
              <div className="text-sm font-medium mt-1 text-gray-300">
                Locations Worldwide
              </div>
              <p className="text-xs text-gray-500">
                We have 1000+ locations for your choices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}