import "./home.scss";
import MainHome from "../../components/main-home/MainHome";
import ShortDescription from "../../components/short-description/ShortDescription";
import CardsGallery from "../../components/cards-gallery/CardsGallery";
import { tatoosData } from "../../tatooData";

const Home = () => {
  return (
    <div className="home">
      <MainHome />
      <ShortDescription />
      {Object.entries(tatoosData).map(([title, data]) => (
        <CardsGallery key={title} title={title} data={data} />
      ))}
    </div>
  );
};

export default Home;
