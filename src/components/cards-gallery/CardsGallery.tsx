import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cards-gallery">
      <div className="gallery-header">
        <h3>{title}</h3>
        <button
          className="material-icons toggle-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Hide cards" : "Show cards"}
        >
          {isOpen ? "close" : "expand_more"}
        </button>
      </div>
      {isOpen && (
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
      )}
    </div>
  );
};

export default CardsGallery;
