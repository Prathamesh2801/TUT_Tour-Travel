import React, { useState } from "react";
import  TourDetail  from "./Practice.js";
import { Link } from "react-router-dom";

export default function PracticeCard() {
  const [selectedCategory, setSelectedCategory] = useState("Adventure");

  const filteredTours = TourDetail.filter((TourDetail) => TourDetail.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen  py-8 text-white">
      <div className="text-blue-500 text-sm font-medium mb-6 space-x-4">
        {["Adventure", "Treckking", "Beaches", "Heritages"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`hover:underline ${
              selectedCategory === category ? "text-orange-400 font-bold" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* <div className="max-auto  ">
          <a
            href="#"
            className="hidden text-sm  font-medium text-orange-400 hover:text-indigo-500 md:block"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
           </div> */}
            <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

      <h2 className="text-2xl font-bold ">{selectedCategory} Tours</h2>
      

      <div className="grid grid-cols-1  justify-center items-center sm:grid-cols-2 md:grid-cols-4 gap-0.5">
        {filteredTours.map((product) => (
          <div key={product.id} className=" text-black h-[500px] rounded-lg shadow p-4 group relative">
            <Link to={"/ShowItem/" + product.id}>
              <img
                src={product.imageSrc}  
                alt={product.imageAlt}
                className="h-[400px] w-[450px] object-cover  rounded group-hover:opacity-75"
              />
                                              <Link
                to={"/ShowItem/" + product.id}
                className="absolute ml-20 mt-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-sm"
              >
                DETAILS
              </Link>
            </Link>
            <h3 className="mt-1 text-sm text-white">{product.name}</h3>
            <p className=" text-sm font-medium text-slate-400">{product.price}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}