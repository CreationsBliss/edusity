import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Program from "./Components/Program/Program";
import Testimonial from "./Components/Testimonial/Testimonial";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What We Offer"></Title>
        <Program></Program>
        <About></About>
        <Title subTitle="GALLERY" title="Campus Photos"></Title>
        <Campus></Campus>
        <Title subTitle="TESTIMONIALS" title="What Student Says"></Title>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default App;
