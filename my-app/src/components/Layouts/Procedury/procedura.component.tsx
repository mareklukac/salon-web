import { IProcedura } from "../../../Utils/Interfaces/procedury.interface";
import "./procedura.component.css";

const ProceduraComponent: React.FC<IProcedura> = (props) => {
  const name = props.name;
  const price = props.price;
  const secondPrice = props.secondPrice;

  return (
    <div className="procedura-component">
      <p>
        {name} - <span>{price}€ {secondPrice ? "/ " + secondPrice + "€" : ""}</span>
      </p>
    </div>
  );
};

export default ProceduraComponent;
