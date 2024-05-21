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
        <Title></Title>
        <Program></Program>
      </div>
    </div>
  );
};

export default App;
