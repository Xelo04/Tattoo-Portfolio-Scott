import "./myHistory.scss";

const MyHistory = () => {
  return (
    <div className="my-history">
      <div className="text-container">
        <h1 className="oregano-regular">Moja Historia</h1>
        <p>
          Jestem kreatywnym i pełnym energii artystą. Żyje dzięki pasji,
          uwielbiam tworzyć. Projektować – wraz z klientem, by stworzyć
          wymarzony tatuaż. Pragnę stawiać na różnorodność. Moją specjalnością
          jest tatuaż w szkicu, które na pierwszy rzut oka mogą wydawać się
          łatwe ale są bardzo dopracowane. Poza tym styl Celtycki/Nordic,
          Ignorant, small Tatto, Comic/komiksowy, oldschool. Nauka pod okiem
          Mariusza “Pontona” Zaustowicza z Ponton Tatto School w Swarzędzu,
          gdzię ukończyłem oficjalne szkolenie z tatuażu i zdobyłem niezbędną
          wiedzę jak odpowiednio pracować i dbać o miejsce pracy oraz o
          profesjonalizm z jakim należy podchodzić do klienta. Moja kolejna
          podróż odbyła się w Niemczech. Dzięki nabytej wiedzy w stylu Szkic
          podczas szkolenia w Finality Tattoo w Niemczech. Moje ostatnie
          szkolenie odbyłem w studiu Vean Tatto w Poznaniu, gdzie doszlifowałem
          swoją wiedzę teoretyczną jak i praktyczną. Teraz chciałbym doskonalić
          się w swym fachu pod okiem najlepszych!{" "}
          <a href="/gallery">Moje projekty i skończone prace 🙂!</a>
        </p>
      </div>
      <img src="/scott-photos/front.jpeg" alt="profile-picture" />
    </div>
  );
};

export default MyHistory;
