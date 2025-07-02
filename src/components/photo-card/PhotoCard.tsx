import "./photoCard.scss";

interface PhotoCardProps {
  src: string;
  title: string;
  date: string;
}

const PhotoCard = ({ src, title, date }: PhotoCardProps) => {
  return (
    <div className="photo-card">
      <img src={src} alt={title} />
      <div className="photo-card-info">
        <h4>{title}</h4>
        <p id="date">{date}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
