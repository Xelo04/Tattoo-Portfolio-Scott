import MainHome from "../../components/main-home/MainHome";
import ShortDescription from "../../components/short-description/ShortDescription";
import GalleriesGallery from "../../components/galleries-gallery/GalleriesGallery";

const Home = () => {
  return (
    <div className="home">
      <MainHome />
      <ShortDescription />
      <GalleriesGallery />
    </div>
  );
};

export default Home;
