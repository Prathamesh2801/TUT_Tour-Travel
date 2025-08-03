import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons'


const people = [
  {
    name: "John Smith",
    p1: "Santorini is one of the most iconic islands in the Aegean Sea,Santorini is one of the most iconic islands in the Aegean Sea,",
    imageUrl:
      'https://hblimg.mmtcdn.com/content/hubble/img/ttd_places/mmt/activities/m_Jalori_Jot_1_l_427_640.jpg',
    price: "3gfghcshjg",
    destination : "Place1",
    linkedinUrl: "#",
  },
  {
    name: "Christopher Wilson",
    p1: "Tour Manager",
        destination : "place2",

    imageUrl:
      'https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_3_l_666_1000.jpg',
    price: "3gfghcshjg",
    linkedinUrl: "#",
  },
  {
    name: "James Miller",
    p1: "Tour Manager",
        destination : "place3",

    imageUrl:
      'https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_3_l_666_1000.jpg',
    price: "3gfghcshjg",
    linkedinUrl: "#",
  },
  // More people...
];

export default function Teams() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
Get to Know Our Associate          </h2>
          <p className="mt-6 text-lg/8 text-gray-400">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <div className='flex flex-col items-start  justify-start w-full'>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl hover:animate-up-down overflow-hidden bg-gray-800"
            >              
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto rounded-sm transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out w-full"
              />
              
              <h3 className="m-3 text-base/7 font-semibold tracking-tight text-yellow-500">
                {person.name}
              </h3>  
              <div className='align-middle'>            
              <FontAwesomeIcon icon={faMapMarkerAlt } className='text-yellow-500' />
              {person.destination}
              </div>  

              <p className="text-sm/6 text-gray-200">{person.p1}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={person.prices}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">X</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          
          ))}
          
        </ul>
        </div>
      </div>
    </div>
  );
}
