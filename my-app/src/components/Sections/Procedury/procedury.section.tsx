import Divider from "../../Layouts/Divider/divider.layout";
import "./procedury.section.css";
import placeholder from "../../../assets/placeholder.png";

const ProcedurySection: React.FC = () => {
  return (
    <div className="procedury-container">
      <h2>PROCEDURY</h2>
      <Divider />
      <div className="procedury-inner-container">
        <div className="procedura-box">
          <h4>Ošetrenia pleti</h4>
          <a href="/procedury">
            <img src={placeholder} alt="procedura"></img>
          </a>
        </div>
        <div className="procedura-box">
          <h4>Prístrojové ošetrenia pleti</h4>
          <a href="/procedury">
            <img src={placeholder} alt="procedura"></img>
          </a>
        </div>
        <div className="procedura-box">
          <h4>Úprava mihalníc a obočia</h4>
          <a href="/procedury">
            <img src={placeholder} alt="procedura"></img>
          </a>
        </div>
        <div className="procedura-box">
          <h4>Permanentný make-up</h4>
          <a href="/procedury">
            <img src={placeholder} alt="procedura"></img>
          </a>
        </div>
        <div className="procedura-box">
          <h4>Plasma Pen</h4>
          <a href="/procedury">
            <img src={placeholder} alt="procedura"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProcedurySection;
