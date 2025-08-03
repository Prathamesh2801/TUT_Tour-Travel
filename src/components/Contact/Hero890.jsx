import { useNavigate } from 'react-router-dom';
import AboutDetail from "./AboutDetail"

export default function NYCTravelSection() {
   const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700">
            <div className="flex flex-col  sm:flex-row justify-center items-center">
          <p className="text-5xl sm:text-6xl md:text-5xl font-extrabold text-orange-600 m-2">About</p>
          <p className="text-5xl sm:text-6xl md:text-5xl font-bold text-white m-2">Us</p>
        </div>
        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
          We’re a dynamic group of individuals who are passionate about what
          we do and dedicated to delivering the best results for our clients.
        </p>
    <div className="bg-gradient-to-r from-gray-900 to-gray-700   min-h-screen flex items-center justify-center p-6">
      <div className="g-gradient-to-r from-gray-900 to-gray-700  max-w-5xl w-full rounded-xl  flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 w-full">
          <img
            src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" // Replace with real image
            alt="Person sitting on stairs"
            className="w-full h-full object-cover"
          />
        </div>
        

        <div className="md:w-1/2 w-full p-8 space-y-5">
          <h2 className="text-3xl font-semibold text-gray-200">
            Elevate your trip with an  travel expert
          </h2>
          <p className="text-gray-200 text-sm">
            I understand what it’s like to be a tourist in New York City. I’ve spent years
            searching NYC neighborhood by neighborhood, street by street. I’ve moved
            every few months and I’ve planned countless vacations for friends and family.
          </p>

          <h3 className="text-gray-400 font-semibold">About the company</h3>
          <p className="text-gray-300 text-sm">
            With my support, I can bring focus to your trip, help you make the most
            of your travel plans. Need help deciding on shows or restaurants? 
            Overwhelmed by the subway system? I’ve got you. I’ll reduce your stress, 
            save you t            With my support, I can bring focus to your trip, help you make the most
            of your travel plans. Need help deciding on shows or restaurants? 
            Overwhelmed by the subway system? I’ve got you. I’ll reduce your stress, 
            save you time and help you explore the greatest city in the world.
ime and help you explore the greatest city in the world.
          </p>

<button
  onClick={() => navigate('/aboutdetail')}           className="mt-4 px-6 py-2 bg-orange-400 hover:bg-orange-500 text-gray-900 font-semibold rounded">
            START HERE
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}