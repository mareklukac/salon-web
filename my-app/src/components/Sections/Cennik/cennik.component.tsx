import Divider from '../../Layouts/Divider/divider.layout';
import ProceduryListComponent from '../../Layouts/Procedury/procedury-list.component';
import './cennik.component.css';

const Cennik: React.FC = () => {
  return (
    <div className='cennik-container'>
      <h2>CENNÍK</h2>
      <Divider />
      <div className='cennik-inner-container'>
        <ProceduryListComponent />
      </div>
    </div>
  )
};

export default Cennik;
