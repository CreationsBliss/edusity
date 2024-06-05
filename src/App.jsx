import { useState } from "react";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Program from "./Components/Program/Program";
import Testimonial from "./Components/Testimonial/Testimonial";
import Title from "./Components/Title/Title";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What We Offer"></Title>
        <Program></Program>
        <About setPlayState={setPlayState}></About>
        <Title subTitle="GALLERY" title="Campus Photos"></Title>
        <Campus></Campus>
        <Title subTitle="TESTIMONIALS" title="What Student Says"></Title>
        <Testimonial></Testimonial>
        <Title subTitle="CONTACT US" title="Get in Touch"></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <VideoPlayer
        playState={playState}
        setPlayState={setPlayState}
      ></VideoPlayer>
    </div>
  );
};

export default App;
