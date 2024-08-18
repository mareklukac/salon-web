import "./home-component.css";
import backroundImage from "../../../assets/titul.jpg";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <img className="background-image" alt="" src={backroundImage}></img>
      <h1>Maya Beauty Salon</h1>
      <h3>Teším sa na Vašu návštevu</h3>
      <button className="order-button">OBJEDNAŤ</button>
    </div>
  );
};

export default Home;
