import  {frontCrad}  from "./Hero3.js";
import { useParams } from "react-router-dom";


export default function Hero3() {
  const Displayparams = useParams();
  console.log(Displayparams.frontCradID);
    const DisplayDetail = frontCrad.find((DisplayData) => DisplayData.id == Displayparams.frontCradID);
    if (!DisplayDetail) {
    return <p>Item not found</p>;
      console.log(DisplayDetail);

  }
  return (
    <div className="  shadow-xl bg-black    py-12 px-6 md:px-20">
       {frontCrad.map((carditems) => (

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-auto">
          

          <img
  src={carditems.img1}
            alt="Mountain Top"
            className="w-80  h-64 object-cover border-8  absolute top-0 left-0 z-0 shadow-lg"
          />
          <img
  src={carditems.img2}
            alt="Camp Ground"
            className="w-96 h-64  border-8 border-indigo-100 object-cover mt-24 ml-24 relative z-10 shadow-md"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-4">
         {carditems.header}
          </h2>
          <p className="text-gray-600 mb-6">
            {carditems.Des}
          </p>

          <div className="flex gap-10 mt-6">
            <div>
              <div className="text-indigo-600 text-2xl font-bold">{carditems.num1}</div>
              <div className="text-sm font-medium mt-1 text-gray-300">
               {carditems.p1}
              </div>
              <p className="text-xs text-gray-500">
               {carditems.p2}
              </p>
            </div>
            <div>
              <div className="text-indigo-600 text-2xl font-bold">{carditems.num2}</div>
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
       ))}
    </div>
  );
}