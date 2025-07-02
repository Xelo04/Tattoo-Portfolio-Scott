import "./mainHome.scss";

const MainHome = () => {
  return (
    <div className="main-home">
      <div className="writings">
        <h3>Cześć, jestem</h3>
        <h1>SCOTT</h1>
        <p>
          Jestem pełnym pasji i energii artystą, który uwielbia tworzyć i
          projektować tatuaże wspólnie z klientami.
        </p>
        <span className="corinthia-regular">Filip Skotarczak</span>
      </div>
      <div className="image">
        <img src="/scott-photos/main-no-bg.png" alt="" />
      </div>
    </div>
  );
};

export default MainHome;
