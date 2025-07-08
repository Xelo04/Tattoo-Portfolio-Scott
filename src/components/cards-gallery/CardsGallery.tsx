import { useState, useRef, useEffect } from "react";
import PhotoCard from "../photo-card/PhotoCard";
import PhotoCardModal from "../photo-card/photo-card-modal/PhotoCardModal";
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
  const [height, setHeight] = useState("0px");

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCardClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight;
      setHeight(`${scrollHeight + 50}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="cards-gallery">
      <div
        className="gallery-header"
        onClick={() => setIsOpen(!isOpen)}
        style={{ marginBottom: isOpen ? "0px" : "20px" }} // Add margin-bottom when closed
      >
        <h3>{title}</h3>
        <button
          className="material-icons toggle-button"
          aria-label={isOpen ? "Hide cards" : "Show cards"}
        >
          {isOpen ? "close" : "expand_more"}
        </button>
      </div>
      <div
        className="cards-container"
        ref={containerRef}
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.5s ease, margin-top 0.5s ease",
          paddingTop: isOpen ? "20px" : "0px", // Add margin-top when open
        }}
      >
        <div className="cards">
          {data.map((item) => (
            <PhotoCard
              key={item.id}
              src={item.link}
              title={item.title}
              date={item.date}
              onClick={() => handleCardClick(item.link)}
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <PhotoCardModal imageSrc={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default CardsGallery;
