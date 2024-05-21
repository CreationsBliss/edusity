import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Program from "./Components/Program/Program";
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
      </div>
    </div>
  );
};

export default App;
