import React, { useEffect, useRef, useState } from "react";
import Divider from "../../Layouts/Divider/divider.layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "./produkty.component.css";
import placeholder from "../../../assets/placeholder.png";

const produkty = [
  {
    id: 1,
    text: `Bear claw donut tootsie roll muffin sesame snaps toffee jujubes. Pastry oat cake gummi bears lollipop tiramisu brownie gingerbread jujubes I love. Gummi bears I love biscuit cake I love jujubes lemon drops gummi bears sweet roll. Cheesecake marzipan marzipan cotton candy halvah. Lemon drops icing dessert jelly-o pie tiramisu toffee dessert muffin. Tiramisu gummies sesame snaps dessert dragée macaroon brownie dragée sugar plum.`,
    image: placeholder,
  },
  {
    id: 2,
    text: `Bear claw donut tootsie roll muffin sesame snaps toffee jujubes. Pastry oat cake gummi bears lollipop tiramisu brownie gingerbread jujubes I love. Gummi bears I love biscuit cake I love jujubes lemon drops gummi bears sweet roll. Cheesecake marzipan marzipan cotton candy halvah. Lemon drops icing dessert jelly-o pie tiramisu toffee dessert muffin. Tiramisu gummies sesame snaps dessert dragée macaroon brownie dragée sugar plum.`,
    image: placeholder,
  },
  {
    id: 3,
    text: `Bear claw donut tootsie roll muffin sesame snaps toffee jujubes. Pastry oat cake gummi bears lollipop tiramisu brownie gingerbread jujubes I love. Gummi bears I love biscuit cake I love jujubes lemon drops gummi bears sweet roll. Cheesecake marzipan marzipan cotton candy halvah. Lemon drops icing dessert jelly-o pie tiramisu toffee dessert muffin. Tiramisu gummies sesame snaps dessert dragée macaroon brownie dragée sugar plum.`,
    image: placeholder,
  },
  {
    id: 4,
    text: `Bear claw donut tootsie roll muffin sesame snaps toffee jujubes. Pastry oat cake gummi bears lollipop tiramisu brownie gingerbread jujubes I love. Gummi bears I love biscuit cake I love jujubes lemon drops gummi bears sweet roll. Cheesecake marzipan marzipan cotton candy halvah. Lemon drops icing dessert jelly-o pie tiramisu toffee dessert muffin. Tiramisu gummies sesame snaps dessert dragée macaroon brownie dragée sugar plum.`,
    image: placeholder,
  },
  {
    id: 5,
    text: `Bear claw donut tootsie roll muffin sesame snaps toffee jujubes. Pastry oat cake gummi bears lollipop tiramisu brownie gingerbread jujubes I love. Gummi bears I love biscuit cake I love jujubes lemon drops gummi bears sweet roll. Cheesecake marzipan marzipan cotton candy halvah. Lemon drops icing dessert jelly-o pie tiramisu toffee dessert muffin. Tiramisu gummies sesame snaps dessert dragée macaroon brownie dragée sugar plum.`,
    image: placeholder,
  },
  {
    id: 6,
    text: `Bear claw donut tootsie roll muffin sesame snaps toffee jujubes. Pastry oat cake gummi bears lollipop tiramisu brownie gingerbread jujubes I love. Gummi bears I love biscuit cake I love jujubes lemon drops gummi bears sweet roll. Cheesecake marzipan marzipan cotton candy halvah. Lemon drops icing dessert jelly-o pie tiramisu toffee dessert muffin. Tiramisu gummies sesame snaps dessert dragée macaroon brownie dragée sugar plum.`,
    image: placeholder,
  },
  {
    id: 7,
    text: `Bear claw donut tootsie roll muffin sesame snaps toffee jujubes. Pastry oat cake gummi bears lollipop tiramisu brownie gingerbread jujubes I love. Gummi bears I love biscuit cake I love jujubes lemon drops gummi bears sweet roll. Cheesecake marzipan marzipan cotton candy halvah. Lemon drops icing dessert jelly-o pie tiramisu toffee dessert muffin. Tiramisu gummies sesame snaps dessert dragée macaroon brownie dragée sugar plum.`,
    image: placeholder,
  },
  {
    id: 8,
    text: `Bear claw donut tootsie roll muffin sesame snaps toffee jujubes. Pastry oat cake gummi bears lollipop tiramisu brownie gingerbread jujubes I love. Gummi bears I love biscuit cake I love jujubes lemon drops gummi bears sweet roll. Cheesecake marzipan marzipan cotton candy halvah. Lemon drops icing dessert jelly-o pie tiramisu toffee dessert muffin. Tiramisu gummies sesame snaps dessert dragée macaroon brownie dragée sugar plum.`,
    image: placeholder,
  },
  {
    id: 9,
    text: `Bear claw donut tootsie roll muffin sesame snaps toffee jujubes. Pastry oat cake gummi bears lollipop tiramisu brownie gingerbread jujubes I love. Gummi bears I love biscuit cake I love jujubes lemon drops gummi bears sweet roll. Cheesecake marzipan marzipan cotton candy halvah. Lemon drops icing dessert jelly-o pie tiramisu toffee dessert muffin. Tiramisu gummies sesame snaps dessert dragée macaroon brownie dragée sugar plum.`,
    image: placeholder,
  },
  {
    id: 10,
    text: `Bear claw donut tootsie roll muffin sesame snaps toffee jujubes. Pastry oat cake gummi bears lollipop tiramisu brownie gingerbread jujubes I love. Gummi bears I love biscuit cake I love jujubes lemon drops gummi bears sweet roll. Cheesecake marzipan marzipan cotton candy halvah. Lemon drops icing dessert jelly-o pie tiramisu toffee dessert muffin. Tiramisu gummies sesame snaps dessert dragée macaroon brownie dragée sugar plum.`,
    image: placeholder,
  },
  {
    id: 11,
    text: `Bear claw donut tootsie roll muffin sesame snaps toffee jujubes. Pastry oat cake gummi bears lollipop tiramisu brownie gingerbread jujubes I love. Gummi bears I love biscuit cake I love jujubes lemon drops gummi bears sweet roll. Cheesecake marzipan marzipan cotton candy halvah. Lemon drops icing dessert jelly-o pie tiramisu toffee dessert muffin. Tiramisu gummies sesame snaps dessert dragée macaroon brownie dragée sugar plum.`,
    image: placeholder,
  },
];

const Produkty: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxVisible, setMaxVisible] = useState(0);
  const itemHeight = 450;
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const availableHeight = window.innerHeight;
      const itemsThatFit = Math.floor(availableHeight / itemHeight);
      setMaxVisible(itemsThatFit);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (isExpanded && sectionRef.current) {
      const offset = 60; // Adjust this to match your fixed navbar height
      const top =
        sectionRef.current.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }

    setIsExpanded(!isExpanded);
  };

  const visibleProducts = isExpanded ? produkty : produkty.slice(0, maxVisible);

  return (
    <div className="produkty-container">
      <h2>PRODUKTY</h2>
      <Divider />

      <div className="produkty-inner-container">
        {visibleProducts.map((produkt, index) => (
          <div
            key={produkt.id}
            className={`produkt ${index % 2 === 0 ? "reverse" : ""}`}
          >
            <div className="produkt-text">{produkt.text}</div>
            <img src={produkt.image} alt="produkt" className="produkt-image" />
          </div>
        ))}
      </div>

      {produkty.length > maxVisible && (
        <button className="toggle-button" onClick={handleToggle}>
          <FontAwesomeIcon
            icon={isExpanded ? faCircleChevronUp : faCircleChevronDown}
            size="3x"
          />
        </button>
      )}
    </div>
  );
};

export default Produkty;
