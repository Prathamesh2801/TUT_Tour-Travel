import React from 'react';

const people = [
  {
    imageUrl:
      'https://hblimg.mmtcdn.com/content/hubble/img/ttd_places/mmt/activities/m_Jalori_Jot_1_l_427_640.jpg',
      p1:"South Holston Lake"
  },
  {
    imageUrl:
      'https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_3_l_666_1000.jpg',
            p1:"The Pinnacle"

  },
  {
    imageUrl:
      'https://images.pexels.com/photos/5176333/pexels-photo-5176333.jpeg',
      p1:"Birthplace Music "

  },
];

export default function About() {
  return (
    <div /*style={{ backgroundColor: '#CDDC39' }}*/ className="bg-gradient-to-r from-gray-900 to-gray-700 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <p className="text-5xl sm:text-6xl md:text-5xl font-extrabold text-orange-600 m-2">Recently</p>
          <p className="text-5xl sm:text-6xl md:text-5xl font-bold text-white m-2">Viewed Trips</p>
        </div>

        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
          We’re a dynamic group of individuals who are passionate about what
          we do and dedicated to delivering the best results for our clients.
        </p>

        <ul
          role="list"
          className="mt-12 grid gap-6 overflow-hiddenaboua sm:grid-cols-2 lg:grid-cols-3 "
        >
          {people.map((person, index) => (
            <li key={index}>
              <img
                src={person.imageUrl}
                alt={`About Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-md shadow-md transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
              />
                <div className="flex items-center justify-between gap-2 mt-2 sm:mt-0">

                <div className="flex items-center   gap-1 w-full">
                  <div className='flex w-full'>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                 

                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                                    <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>

                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg> </div>
                                <p className='flex w-full'>{person.p1}</p>

                </div>
</div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
          Arranging a healthy and beautiful trip is our main goal. We
          consider our success to be our ability to offer users the right
          journey and a beautiful trip.
        </p>
      </div>
    </div>
  );
}
