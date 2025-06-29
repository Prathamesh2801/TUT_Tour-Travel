import { tours } from "./ToursItem";
import { Link } from "react-router-dom";
export default function TourSection() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Trending products
          </h2>
          <a
            href="#"
            className="hidden text-sm font-medium text-orange-400 hover:text-indigo-500 md:block"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
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
