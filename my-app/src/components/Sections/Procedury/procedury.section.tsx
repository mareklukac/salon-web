import Divider from "../../Layouts/Divider/divider.layout";
import "./procedury.section.css";
import placeholder from "../../../assets/placeholder.png";
import { Link } from "react-router-dom";

const ProcedurySection: React.FC = () => {
  return (
    <div className="procedury-container">
      <h2>PROCEDURY</h2>
      <Divider />
      <div className="procedury-inner-container">
        <div className="procedura-box">
          <h4>Ošetrenia pleti</h4>
          <Link to="/proceduryPage">
            <img src={placeholder} alt="procedura"></img>
          </Link>
        </div>
        <div className="procedura-box">
          <h4>Prístrojové ošetrenia pleti</h4>
          <Link to="/proceduryPage">
            <img src={placeholder} alt="procedura"></img>
          </Link>
        </div>
        <div className="procedura-box">
          <h4>Úprava mihalníc a obočia</h4>
          <Link to="/proceduryPage">
            <img src={placeholder} alt="procedura"></img>
          </Link>
        </div>
        <div className="procedura-box">
          <h4>Permanentný make-up</h4>
          <Link to="/proceduryPage">
            <img src={placeholder} alt="procedura"></img>
          </Link>
        </div>
        <div className="procedura-box">
          <h4>Plasma Pen</h4>
          <Link to="/proceduryPage">
            <img src={placeholder} alt="procedura"></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProcedurySection;
