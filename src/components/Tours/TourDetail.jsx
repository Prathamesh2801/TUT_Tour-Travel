import { useParams } from "react-router-dom";
import { tours } from "./ToursItem";
import OverViewPage from "../OverViewPage";


export default function TourDetail() {
  const params = useParams();
  console.log(params.tourID);

  const tourItem = tours.find((tourData) => tourData.id == params.tourID);
  console.log(tourItem);
  return (
    <div>
      <OverViewPage imageSrc={tourItem.imageSrc}
        imageAlt={tourItem.imageAlt} name={tourItem.name} price={tourItem.price} rating={tourItem.rating} reviews={tourItem.reviews} longDescription={tourItem.longDescription}>
      </OverViewPage>
    </div>
  );
}