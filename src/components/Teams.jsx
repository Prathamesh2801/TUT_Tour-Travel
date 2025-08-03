const people = [
  {
    name: "John Smith",
    role: "Tour Manager",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelb8fUuXaBiurpGLm5-c3IUrFN6s1qbFF_A&s",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Christopher Wilson",
    role: "CEO",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1cLKQvJgpV7XKuxfkewUWZ59Luzt8vfYlg&s",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "James Miller",
    role: "Travel Consultant",
    imageUrl:"data:image/jpeg;base64,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",
    xUrl: "#",
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
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl bg-gray-800 px-8 py-10"
            >
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto size-48 rounded-full md:size-56"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-sm/6 text-gray-400">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={person.xUrl}
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
  );
}
