import "./home.scss";
import MainHome from "../../components/main-home/MainHome";
import ShortDescription from "../../components/short-description/ShortDescription";

const Home = () => {
  return (
    <div className="home">
      <MainHome />
      <ShortDescription />
    </div>
  );
};

export default Home;
