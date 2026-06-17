import "./App.css";
import Omne from "./components/Sections/Omne/omne.component";
import Kontakt from "./components/Sections/Kontakt/kontakt.component";
import Home from "./components/Sections/Home/home.component";
import Procedury from "./components/Sections/Procedury/procedury.section";
import Produkty from "./components/Sections/Produkty/produkty.component";
import Cennik from "./components/Sections/Cennik/cennik.component";
import Galeria from "./components/Sections/Galeria/galeria.component";
import NavMenu from "./components/Layouts/Navbar/navbar-menu.layout";
import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import loadGTM from "./Utils/functions/loaderGTM";

const useScrollRouting = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const route = (entry.target as HTMLElement).dataset.route;
            const newUrl = `/${route}`;
            if (window.location.pathname !== newUrl) {
              window.history.pushState(null, "", newUrl);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
};

const useCookieConsent = () => {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom right",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },

        analytics: {
          enabled: false,
          autoClear: {
            cookies: [
              {
                name: /^_ga/,
              },
            ],
          },
        },
        marketing: {
          enabled: false,
        },

        functional: {
          enabled: false,
        },
      },

      language: {
        default: "sk",
        translations: {
          sk: {
            consentModal: {
              title: "Používame cookies 🍪",
              description:
                "Používame cookies na fungovanie stránky a analýzu návštevnosti.",
              acceptAllBtn: "Prijať všetko",
              acceptNecessaryBtn: "Len nevyhnutné",
              showPreferencesBtn: "Nastavenia",
            },

            preferencesModal: {
              title: "Nastavenia cookies",

              acceptAllBtn: "Prijať všetko",
              acceptNecessaryBtn: "Len nevyhnutné",
              savePreferencesBtn: "Uložiť nastavenia",

              sections: [
                {
                  title: "Používanie cookies",
                  description: "Vyberte si, ktoré cookies chcete povoliť.",
                },
                {
                  title: "Nevyhnutné cookies",
                  description:
                    "Tieto cookies sú potrebné pre správne fungovanie webu.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Funkčné cookies",
                  description:
                    "Tieto cookies umožňujú používanie pokročilých funkcií webu.",
                  linkedCategory: "functional",
                },
                {
                  title: "Analytické cookies",
                  description:
                    "Pomáhajú nám zlepšovať web pomocou štatistík návštevnosti.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketingové cookies",
                  description:
                    "Pomáhajú nám zlepšovať web pomocou marketingových nástrojov.",
                  linkedCategory: "marketing",
                },
              ],
            },
          },
          en: {
            consentModal: {
              title: "We use cookies 🍪",
              description: "Cookie modal description",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage Individual preferences",
            },
            preferencesModal: {
              title: "Manage cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Accept current selection",
              closeIconLabel: "Close modal",
              sections: [
                {
                  title: "Somebody said ... cookies?",
                  description: "I want one!",
                },
                {
                  title: "Strictly Necessary cookies",
                  description:
                    "These cookies are essential for the proper functioning of the website and cannot be disabled.",

                  linkedCategory: "necessary",
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                  linkedCategory: "analytics",
                },
                {
                  title: "More information",
                  description:
                    'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>',
                },
              ],
            },
          },
        },
      },

      onConsent: ({ cookie }) => {
        console.log("Consent:", cookie);
        const categories = cookie.categories || [];
        if (categories.includes("analytics")) {
          loadGTM();
        }

        if (categories.includes("functional")) {
          console.log("Functional cookies enabled (e.g. maps)");
        }
      },

      onChange: ({ cookie }) => {
        console.log("Changed:", cookie);
      },
    });
  }, []);
};

function App() {
  useScrollRouting();
  useCookieConsent();
  return (
    <>
      <NavMenu />
      <main>
        <section id="home" className="page-section" data-route="home">
          <Home />
        </section>
        <section id="omne" className="page-section" data-route="omne">
          <Omne />
        </section>
        <section id="procedury" className="page-section" data-route="procedury">
          <Procedury />
        </section>
        <section id="produkty" className="page-section" data-route="produkty">
          <Produkty />
        </section>
        <section id="cennik" className="page-section" data-route="cennik">
          <Cennik />
        </section>
        <section id="galeria" className="page-section" data-route="galeria">
          <Galeria />
        </section>
        <section id="kontakt" className="page-section" data-route="kontakt">
          <Kontakt />
        </section>
      </main>
    </>
  );
}

export default App;
