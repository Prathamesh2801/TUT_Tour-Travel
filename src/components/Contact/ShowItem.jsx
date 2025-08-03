import { useParams } from "react-router-dom";
import  { Detail89 }  from "../Contact/Detail";
import OverViewPage from "./OverViewPage";

export default function ShowItem() {
  const Showparams = useParams();
  console.log(Showparams.Detail89ID);

  const travel = Detail89.find((practiceData) => practiceData.id == Showparams.Detail89ID);
    if (!travel) {
    return <p>Item not found</p>;
      console.log(travel);

  }
  return (
 <OverViewPage imageSrc={travel.imageSrc}  imageAlt={travel.imageAlt} name={travel.name} price={travel.price} rating={travel.rating} reviews={travel.reviews} longDescription={travel.longDescription}>
      </OverViewPage>  );
}