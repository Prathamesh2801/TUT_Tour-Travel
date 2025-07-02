import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Teams from "../components/Teams";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import TourSection from "../components/Tours/TourSection";
import TourDetail from "../components/Tours/TourDetail";
import Tour from "../components/Contact/Tour"
import Contact from "../components/Contact/Contact";
import ShowItem from "../components/Contact/ShowItem";

import Gallery from "../components/Gallery";

export default function rootLayout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><Stats /><Teams /><Testimonials /></> }/>
        <Route path="/tours" element={<><TourSection /> </>} />
        <Route path="/tourDetail/:tourID" element={<><TourDetail /></>} />
        <Route path="/contact" element={<><Contact /></>} />
         <Route path="/Tour" element={<Tour />} />
         <Route path="/ShowItem/:Detail89ID" element={<ShowItem />} />        <Route path="/tours" element={<> <TourSection /></>}/>
        <Route path="/tourDetail/:tourID"element={ <>  <TourDetail /></> } />
        <Route path="/gallery"element={ <>  <Gallery /></>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
