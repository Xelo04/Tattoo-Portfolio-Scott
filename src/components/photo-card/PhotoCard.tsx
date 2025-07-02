import "./photoCard.scss";

const PhotoCard = () => {
  return (
    <div className="photo-card">
      <img src="/tatoos/2besties-tatto_ink-edited-2.jpg" alt="" />
      <div className="photo-card-info">
        <h4>Besties Tattoo</h4>
        <p id="date">Data</p>
      </div>
    </div>
  );
};

export default PhotoCard;
