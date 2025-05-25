import "./kontakt.component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Form from "../../Layouts/Form/form.component";
import GoogleMapsComponent from "../../Layouts/Map/google-map.component";

const Kontakt: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-inner-container">
        <div className="contact-adress">
          <h3 className="contact-header">Nájdete ma na:</h3>
          <div className="contact-social-sites">
            <a
              href="https://www.facebook.com/mayabeautykosice"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FontAwesomeIcon
                className="contact-social-sites-icon facebook"
                icon={faFacebook}
              />
            </a>
            <a
              href="https://www.instagram.com/maya_beauty_ke"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FontAwesomeIcon
                className="contact-social-sites-icon instagram"
                icon={faInstagram}
              />
            </a>
          </div>
          <h3 className="contact-header">Kontaktné informácie:</h3>
          <div className="contact-adress-information">
            <FontAwesomeIcon className="contact-adress-icon" icon={faPhone} />
            <a className="contact-link" href="tel:+421911604896">
              +421 911 604 896
            </a>
          </div>
          <div className="contact-adress-information">
            <FontAwesomeIcon className="contact-adress-icon" icon={faAt} />
            <p>maja.lukacovaa@gmail.com</p>
          </div>
          <div className="contact-adress-information">
            <FontAwesomeIcon
              className="contact-adress-icon"
              icon={faLocationDot}
            />
            <p>
              Moldavská cesta 1360/21, 040 11 Košice (budova "Varta" medzi
              Lidlom a Freshom)
            </p>
          </div>
          <div className="contact-map">
            <GoogleMapsComponent />
          </div>
        </div>
      </div>
      <div className="contact-inner-container">
        <Form />
      </div>
    </div>
  );
};

export default Kontakt;
