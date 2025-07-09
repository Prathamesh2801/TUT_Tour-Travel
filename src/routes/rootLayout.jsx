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
import Login from "../components/Login";
import ShowItem from "../components/Contact/ShowItem";
import Grid from "../components/Grid";
// import Blog from "../components/Blog/Blogsection";
import Blog from "../components/Blogs/Blogsection";
import Gallery from "../components/Gallery";
import Hero23 from "../components/Hero23";
import Hero2 from "../components/Blogs/Hero2";
import Hero3 from "../components/Hero3";
import Hero890 from "../components/Contact/Hero890";
export default function rootLayout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero23 /><Teams /><Testimonials /></> }/>
        <Route path="/tours" element={<><TourSection /> </>} />
        <Route path="/tourDetail/:tourID" element={<><TourDetail /></>} />
        <Route path="/contact" element={<><Contact /></>} />
         <Route path="/Tour" element={<Tour />} />
         <Route path="/ShowItem/:Detail89ID" element={<ShowItem />} />        <Route path="/tours" element={<> <TourSection /></>}/>
        <Route path="/tourDetail/:tourID"element={ <>  <TourDetail /></> } />
        <Route path="/gallery"element={ <>  <Gallery /></>} />
        <Route path="/hero23"element={ <>  <Hero23 /></>} />
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <Teams />
              <Testimonials />
            </>
          }
        />
                <Route path="/hero890" element={<>< Hero890/> </>} />

        <Route path="/grid" element={<>< Grid/> </>} />
        <Route path="/tours" element={<><TourSection /> </>} />
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="/tourDetail/:tourID"element={<><TourDetail /></>}/>
        <Route path="/gallery" element={ <><Gallery /></>}/>
        <Route path="/blog" element={<><Blog/></>}/>
       <Route path="/login" element={<><Login/></>}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
