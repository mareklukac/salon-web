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
          <div className="contact-adress-information">
            <FontAwesomeIcon
              className="contact-social-sites-icon"
              icon={faPhone}
            />
            <a className="contact-link" href="tel:+421904545542">
              +421 904 545 542
            </a>
          </div>
          <div className="contact-adress-information">
            <FontAwesomeIcon
              className="contact-social-sites-icon"
              icon={faAt}
            />
            <p>maja.lukacovaa@gmail.com</p>
          </div>
          <div className="contact-adress-information">
            <FontAwesomeIcon
              className="contact-social-sites-icon"
              icon={faLocationDot}
            />
            <p>Južná trieda 2/A 04001 Košice, Slovensko</p>
          </div>
          <div className="contact-map">
            <GoogleMapsComponent />
          </div>
          <div className="contact-social-sites">
            <a
              href="https://www.facebook.com/mayabeautykosice"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FontAwesomeIcon
                className="contact-social-sites-icon"
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
                className="contact-social-sites-icon"
                icon={faInstagram}
              />
            </a>
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
