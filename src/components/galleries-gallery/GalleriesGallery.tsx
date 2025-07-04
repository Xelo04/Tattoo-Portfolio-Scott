import "./galleriesGallery.scss";
import CardsGallery from "../../components/cards-gallery/CardsGallery";
import { tatoosData } from "../../tatooData";

const GalleriesGallery = () => {
  return (
    <div className="galleries-gallery">
      <h2 className="oregano-regular">Moje Dotychczasowe Prace i Projekty:</h2>
      {Object.entries(tatoosData).map(([title, data]) => (
        <CardsGallery key={title} title={title} data={data} />
      ))}
    </div>
  );
};

export default GalleriesGallery;
