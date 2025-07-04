import { useState, useRef, useEffect } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number | string>(0);

  // Update maxHeight when isOpen or data changes
  useEffect(() => {
    if (isOpen && containerRef.current) {
      setMaxHeight(containerRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isOpen, data]);

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

      {/* Always render container with transition styles */}
      <div
        ref={containerRef}
        className="cards-container"
        style={{
          maxHeight,
          opacity: isOpen ? 1 : 0,
          visibility: maxHeight ? "visible" : "hidden",
        }}
      >
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
