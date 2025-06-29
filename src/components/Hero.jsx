import { heroImages } from "../static/caroselData";

export default function Hero() {
  return (
    <div className="carousel rounded-box  m-5">
      {heroImages.map((tourImg) => (
        <div className="carousel-item">
          <img src={tourImg} alt="Burger" className="h-60  sm:h-96" />
        </div>
      ))}
    </div>
  );
}
