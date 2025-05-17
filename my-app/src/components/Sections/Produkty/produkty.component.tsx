import React from "react";
import Divider from "../../Layouts/Divider/divider.layout";
import "./produkty.component.css";
import { motion } from "framer-motion";

import biolineLogo from "../../../assets/produkty/logo-bioline.png";
import allisaLogo from "../../../assets/produkty/logo-alissa-beaute.png";

interface Produkt {
  id: number;
  title: string;
  text: string;
  image: string;
  link: string;
}

const produkty: Produkt[] = [
  {
    id: 1,
    title: `Bioline Jatò`,
    text: `V salóne s hrdosťou pracujeme s kozmetikou Bioline Jatò, uznávanou talianskou značkou s viac než 40-ročnou tradíciou v oblasti profesionálnej starostlivosti o pleť. Ich produkty kombinujú prírodné zložky, vedecký výskum a inovatívne technológie, vďaka čomu poskytujú viditeľné a dlhodobé výsledky. Bioline Jatò ponúka riešenia pre všetky typy pleti - od hydratácie, cez anti-aging až po citlivú a problematickú pokožku. Ošetrenia sú navrhnuté tak, aby rešpektovali prirodzené funkcie pokožky a zároveň podporovali jej regeneráciu, rovnováhu a vitalitu. Doprajte si exkluzívnu starostlivosť so značkou, ktorá spája prírodu a vedu pre dokonalý zážitok krásy.`,
    image: biolineLogo,
    link: "https://biolinejato.cz/",
  },
  {
    id: 2,
    title: `Alissa Beauté`,
    text: `V salóne používame kozmetiku Alissa Beauté, renomovanú značku, ktorá spája prírodné extrakty, modernú technológiu a dermokozmetický prístup k starostlivosti o pleť. Produkty tejto talianskej značky sú bez parabénov, minerálnych olejov a geneticky modifikovaných látok - ideálna voľba pre klientky, ktoré hľadajú účinné a zároveň šetrné riešenia. Alissa Beauté ponúka široké portfólio produktov pre rôzne typy a potreby pleti - od hydratácie, výživy až po boj proti vráskam či pigmentovým škvrnám. Každé ošetrenie je zamerané na individualizovaný prístup a dlhodobé výsledky. Objavte silu prírody v kombinácii s kozmetickým know-how vďaka starostlivosti Alissa Beauté - pre zdravú, žiarivú a sviežu pleť.`,
    image: allisaLogo,
    link: "https://www.alissabeaute.com/cs/",
  },
];

const Produkty: React.FC = () => {
  return (
    <div className="produkty-container">
      <h2>PRODUKTY</h2>
      <Divider />
      <div className="produkty-inner-container">
        {produkty.map((produkt, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`produkt ${
                index % 2 === 0 ? "left-image" : "right-image"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="produkt-content">
                <motion.div
                  className="produkt-text-block"
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <span className="produkt-title">{produkt.title}</span>
                  <div className="produkt-text">{produkt.text}</div>
                </motion.div>
                <a href={produkt.link}>
                  <motion.img
                    src={produkt.image}
                    alt={produkt.title}
                    className="produkt-image"
                    initial={{ x: isEven ? -100 : 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.4 }}
                  />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Produkty;
