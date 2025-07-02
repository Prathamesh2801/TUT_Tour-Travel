import { tours } from "./ToursItem";
import { Link } from "react-router-dom";
export default function TourSection() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="font-moderna text-3xl md:text-4xl  tracking-tight text-white mb-8">
            Pathways to Your Perfect Destination
          </h2>
         
          <a
            href="#"
            className="hidden text-sm font-medium text-orange-400 hover:text-indigo-500 md:block"
          >
            Roadmaps to Remarkable
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px">
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                All
              </a>
            </li>
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Domestic
              </a>
            </li>
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                International
              </a>
            </li>
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Exotic
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6  md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {tours.map((product) => (
            <Link to={"/tourDetail/" + product.id}>
              <div key={product.id} className="group relative">
                <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 my-5 group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="size-full object-cover"
                  />
                  <Link
                    to={"/tourDetail/" + product.id}
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-sm"
                  >
                    DETAILS
                  </Link>
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-white">{product.color}</p>
                <p className="mt-1 text-sm font-medium text-white">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="#"
            className="font-medium text-orange-400 hover:text-indigo-500"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
