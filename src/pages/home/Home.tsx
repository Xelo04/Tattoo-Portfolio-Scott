import "./home.scss";
import MainHome from "../../components/main-home/MainHome";
import ShortDescription from "../../components/short-description/ShortDescription";
import CardsGallery from "../../components/cards-gallery/CardsGallery";

const Home = () => {
  return (
    <div className="home">
      <MainHome />
      <ShortDescription />
      <CardsGallery />
    </div>
  );
};

export default Home;
