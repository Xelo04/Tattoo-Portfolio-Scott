import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <section className="main-home">
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
          <img src="/scott-photos/main-no-bg-2.png" alt="" />
        </div>
      </section>
      <h2>Warto walczyć o swoje marzenia!</h2>
    </div>
  );
};

export default Home;
