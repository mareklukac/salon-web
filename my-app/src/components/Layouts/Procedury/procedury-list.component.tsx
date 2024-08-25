import "./procedury-list.component.css";
import data from "../../../procedury.json";
import ProceduraComponent from "./procedura.component";
import {
  IProcedura,
  IProcedury,
} from "../../../Utils/Interfaces/procedury.interface";

const ProceduryListComponent: React.FC = () => {
  const proceduryList: IProcedury = data.procedury;
  return (
    <div className="section-container">
      <div className="procedury-component-container">
        <div className="procedury-section">
          <h3>Exkluzívne ošetrenia</h3>
          {proceduryList.exkluzivneOsetrenia.map((item: IProcedura) => (
            <ProceduraComponent
              name={item.name}
              price={item.price}
              secondPrice={item.secondPrice}
            />
          ))}
        </div>
        <div className="procedury-section">
          <h3>Firoblast / PlazmaPen</h3>
          {proceduryList.firoblastPlazmaPen.map((item: IProcedura) => (
            <ProceduraComponent
              name={item.name}
              price={item.price}
              secondPrice={item.secondPrice}
            />
          ))}
        </div>
        <div className="procedury-section">
          <h3>Obočie + Mihalnice</h3>
          {proceduryList.obocieMihalnice.map((item: IProcedura) => (
            <ProceduraComponent
              name={item.name}
              price={item.price}
              secondPrice={item.secondPrice}
            />
          ))}
        </div>
        <div className="procedury-section">
          <h3>Ošetrenie pleti</h3>
          {proceduryList.osetreniePleti.map((item: IProcedura) => (
            <ProceduraComponent
              name={item.name}
              price={item.price}
              secondPrice={item.secondPrice}
            />
          ))}
        </div>
        <div className="procedury-section">
          <h3>PMU: Púdrové tetovanie obočia</h3>
          {proceduryList.pmu.map((item: IProcedura) => (
            <ProceduraComponent
              name={item.name}
              price={item.price}
              secondPrice={item.secondPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProceduryListComponent;
