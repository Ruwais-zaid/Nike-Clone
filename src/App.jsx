import React from "react";
import Hero from './section/Hero'
import CustomerReview from './section/CustomerReviews'
import Footer from './section/Footer'
import PopularProducts from './section/PopularProducts'
import Services from './section/Services'
import SpecialOffer from './section/SpecialOffer'
import Subcribe from './section/Subcribe'
import SuperQuality from './section/SuperQuality'
import Nav from './components/Nav'
import Trending from "./section/Trending";
const App=()=>{
  return (
  <main className="relative">
    <Nav/>
  
    <section className="xl:padding-l wide:padding-r padding-b ">
      <Hero/>
    </section>
    <section className="flex justify-center items-center">
      <PopularProducts/>

    </section>
    <section className="padding">
      <Trending/>
      
    </section>
    <section className="padding">
      <SuperQuality/>

    </section>
    <section className="padding-x py-10">
      <Services/>

    </section>
    <section className="padding">
      <SpecialOffer/>

    </section>
    <section className="bg-blue-100 padding">
      <CustomerReview/>

    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subcribe/>

    </section>
    <section className="padding bg-black padding-x padding-t">
      <Footer/>
    </section>

  </main>
  );
}
export default App;