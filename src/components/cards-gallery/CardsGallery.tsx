import PhotoCard from "../photo-card/PhotoCard";
import "./cardsGallery.scss";

interface CardsGalleryProps {
  title: string;
  data: {
    id: number;
    link: string;
    title: string;
    date: string;
  }[];
}

const CardsGallery = ({ title, data }: CardsGalleryProps) => {
  return (
    <div className="cards-gallery">
      <h3>{title}</h3>
      <div className="cards-container">
        <div className="cards">
          {data.map((item) => (
            <PhotoCard
              key={item.id}
              src={item.link}
              title={item.title}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsGallery;
