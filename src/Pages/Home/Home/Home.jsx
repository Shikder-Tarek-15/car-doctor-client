import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <AboutUs />
      </div>
      <h2>This is Home</h2>
    </div>
  );
};

export default Home;
