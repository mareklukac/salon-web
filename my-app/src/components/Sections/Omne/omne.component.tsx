import Divider from "../../Layouts/Divider/divider.layout";
import "./omne.component.css";

import { motion } from "framer-motion";

import omnePhoto from "../../../assets/omne_photo2.jpg";

const Omne: React.FC = () => {
  return (
    <div className="omne-container">
      <h2>O MNE</h2>
      <Divider />
      <div className="omne-inner-container">
        <div className="omne-inner-section">
          <motion.img
            className="omne-photo"
            src={omnePhoto}
            alt="profile"
            initial={{ x: [0, 100, 0], opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          />
        </div>
        <motion.div
          className="omne-inner-section omne-inner-paragraph-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3>MÁRIA LUKÁČOVÁ</h3>
          <p>
            Milujem svoju prácu, vďaka ktorej viem dodať ženám sebavedomie,
            doťuknúť ich prirodzenú krásu k dokonalosti, pomôcť pri
            problematických stavoch pleti, dať im pocítiť, že práve tu a práve
            teraz sa venujem len im a ony sú tie dôležité, o ktoré sa chcem
            postarať.
          </p>
          <p>
            Prácu kozmetičky beriem ako poslanie a veľkú zodpovednosť. Každej
            jednej z vás sa snažím dať zo seba, čo najviac a poskytnúť čo
            najväčší relax a vypnutie od každodenného zhonu. V tejto extrémne
            rýchlej a zbesilej dobe je spomalenie veľmi dôležité pre naše
            fyzické aj psychické zdravie a pohodu Ďakujem, že ma aj vy, moje
            skvelé zákazníčky, napĺňate a posúvate svojimi pozitívnymi
            reakciami, spokojnosťou a úsmevom, ktorý po ošetreniach vidím na
            vašich tvárach.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Omne;
