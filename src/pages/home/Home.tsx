import "./home.scss";
import MainHome from "../../components/main-home/MainHome";

const Home = () => {
  return (
    <div className="home">
      <MainHome />
      <section className="short-description">
        <h2>Warto walczyć o swoje marzenia!</h2>
        <p>
          W przyszłości chcę otworzyć własne studio, które mam nadzieję
          zaszczyci mnie Twoją obecnością!
        </p>
      </section>
    </div>
  );
};

export default Home;
