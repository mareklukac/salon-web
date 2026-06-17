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
          <h3>Prístrojové ošetrenia</h3>
          {proceduryList.pristrojoveOsetrenia.map((item: IProcedura) => (
            <ProceduraComponent
              key={item.name}
              name={item.name}
              price={item.price}
              secondPrice={item.secondPrice}
            />
          ))}
        </div>
        <div className="procedury-section">
          <h3>Mihalnice a Obočie</h3>
          {proceduryList.mihalniceObocie.map((item: IProcedura) => (
            <ProceduraComponent
              key={item.name}
              name={item.name}
              price={item.price}
              secondPrice={item.secondPrice}
            />
          ))}
        </div>
        <div className="procedury-section">
          <h3>PMU</h3>
          {proceduryList.pmu.map((item: IProcedura) => (
            <ProceduraComponent
              key={item.name}
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
              key={item.name}
              name={item.name}
              price={item.price}
              secondPrice={item.secondPrice}
            />
          ))}
        </div>
        <div className="procedury-section">
          <h3>Plasma Pen</h3>
          {proceduryList.plazmaPen.map((item: IProcedura) => (
            <ProceduraComponent
              key={item.name}
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
