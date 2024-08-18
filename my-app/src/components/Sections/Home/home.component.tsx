import "./home.component.css";
import backroundImage from "../../../assets/titul_BW.png";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <img className="background-image" alt="" src={backroundImage}></img>
      <h1>Maya Beauty Salon</h1>
      <h3>Nadčasová krása, moderná starostlivosť.</h3>
      <button className="order-button">
        <a
          href="https://www.notino.sk/salony/maya-beauty/"
          target="_blank"
          rel="noopener noreferrer"
        >
          REZERVOVAŤ
        </a>
      </button>
    </div>
  );
};

export default Home;
