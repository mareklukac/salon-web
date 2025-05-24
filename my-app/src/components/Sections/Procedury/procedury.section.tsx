import Divider from "../../Layouts/Divider/divider.layout";
import "./procedury.section.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { proceduryData } from "../../../assets/procedury/procedury-data.component";

// const procedury = [
//   {
//     id: 1,
//     title: "Ošetrenia pleti",
//     image: placeholder,
//     description: `Túžite po pleti, ktorá je nielen čistá, ale aj hĺbkovo vyživená, zregenerovaná a žiariaca zdravím? V našom salóne veríme, že cesta k dokonalej pleti začína precíznym a individuálne prispôsobeným prístupom. Naše protokolárne ošetrenia pleti sú základom starostlivosti, ktorá prináša viditeľné výsledky a dlhotrvajúce zlepšenie.

// Nejedná sa len o klasické čistenie. Každé protokolárne ošetrenie je starostlivo navrhnutý rituál, ktorý spája pokročilé techniky, prvotriednu kozmetiku a odborné vedomosti našich terapeutiek.

// Čo môžete očakávať:
// - Hĺbkové čistenie a detoxikácia
// - Intenzívna hydratácia a výživa
// - Regenerácia a obnova
// - Individuálny prístup
// - Relaxačný zážitok

// Cesta k zdravej a žiarivej pleti začína tu:

// Naše komplexné kozmetické ošetrenia zahŕňajú starostlivé odlíčenie, tonizáciu, hĺbkové čistenie (manuálne alebo s podporou technológií, podľa typu pleti), aplikáciu sér a koncentrátov, špeciálne masky a záverečnú krémovú starostlivosť. Každý krok je premyslený tak, aby vaša pleť dostala to najlepšie.

// Investujte do krásy, ktorá pramení zo zdravia. Objednajte sa na profesionálne ošetrenie pleti a zažite, ako sa vaša pleť premení na žiarivú a vitálnu vizitku vašej osobnosti.`,
//   },
//   {
//     id: 2,
//     title: "Prístrojové ošetrenia pleti",
//     image: placeholder,
//     description: `Objavte novú dimenziu krásy s našimi prístrojovými ošetreniami

// Túžite po pleti, ktorá žiari zdravím, vitalitou a mladistvým vzhľadom? V našom salóne MAYA beauty veríme, že krása ide ruka v ruke s vedou a inováciami. Preto vám prinášame špičkové prístrojové ošetrenia pleti, ktoré posunú vašu starostlivosť na úplne novú úroveň. Zažite s nami hĺbkovú transformáciu!

// Naše moderné technológie sú navrhnuté tak, aby riešili širokú škálu problémov pleti a prinášali viditeľné a dlhotrvajúce výsledky. Či už vás trápia vrásky, suchá pleť, akné, pigmentové škvrny alebo jednoducho hľadáte spôsob, ako pleti dodať maximálnu dávku výživy a omladenia, u nás nájdete presne to, čo potrebujete.

// Prečo si zamilujete naše prístrojové ošetrenia?

// - Hĺbková obnova a regenerácia: Vďaka inovatívnym technológiám prenikáme tam, kam sa bežná kozmetika nedostane. Aktívne látky sú dopravované hlboko do pokožky, kde môžu pôsobiť s maximálnou účinnosťou.
// - Viditeľné a okamžité výsledky: Pocíťte a uvidíte rozdiel už po prvom ošetrení. Pleť bude hydratovanejšia, pevnejšia, vyhladenejšia a plná jasu.
// - Bezbolestné a relaxačné zážitky: Väčšina našich procedúr je nielen efektívna, ale aj príjemná a relaxačná. Doprajte si chvíľu len pre seba a nechajte sa rozmaznávať.
// - Riešenie pre každú pleť: Naše ošetrenia sú šité na mieru rôznym typom pleti a jej potrebám. Po konzultácii s našou odborníčkou vám odporučíme to najlepšie pre vás.

// Ponorte sa do sveta špičkových technológií:

// Objavte silu Elektroporácie pre hĺbkové zapracovanie účinných látok, pocíťte liftingový efekt Rádiofrekvencie, ktorá stimuluje tvorbu kolagénu, a zažite intenzívnu hydratáciu s Nanohydratáciou. Doprajte si hĺbkové čistenie vďaka Ultrazvukovému ošetreniu a jemnú, ale účinnú exfoliáciu s Hydrabráziou alebo Mikrodermabráziou.

// Pre problematickú pleť a akné je tu Plasma Ozón s jeho silnými antibakteriálnymi a regeneračnými účinkami, zatiaľ čo Cold hlavica pleť upokojuje a zmenšuje póry. A pre celkové zlepšenie stavu pleti a jej vitalizáciu je tu Fotónová terapia s rôznymi farebnými spektrami.

// Každé ošetrenie v našom salóne je podporené najmodernejšími prístrojmi a odbornými vedomosťami nášho tímu. Nechajte nás ukázať vám cestu k pleti, o akej ste vždy snívali.`,
//   },
//   {
//     id: 3,
//     title: "Úprava mihalníc a obočia",
//     image: placeholder,
//     description: `Oči, Ktoré Hovoria Za Všetko: Dokonalá Úprava Obočia a Mihalníc

// Oči sú zrkadlom duše a s nami sa stanú aj vašou najvýraznejšou vizitkou! V našom salóne rozumieme, že dokonalé obočie a podmanivé mihalnice dokážu neuveriteľne zmeniť celý výraz tváre a zvýrazniť vašu prirodzenú krásu. Zabudnite na starosti s každodenným líčením – s našimi profesionálnymi službami sa budete prebúdzať s bezchybným pohľadom!

// Ponúkame komplexné riešenia pre úpravu a farbenie obočia, ktoré precízne vytvarujeme do ideálneho oblúka, zvýrazníme jeho farbu a vyplníme medzery tak, aby dokonale ladilo s vašou tvárou.

// Pudrové Tetovanie Obočia:
// - Dlhotrvajúce, prirodzené a efektívne riešenie
// - Opticky hustejšie obočie
// - Korekcia asymetrie
// - Odolnosť voči vode a potu

// Premeňte Svoje Mihalnice:
// - Farbenie mihalníc: tmavšie a výraznejšie riasy bez riasenky
// - Lash Lifting: zatočené, nadvihnuté mihalnice s efektom riasenky
// - 3D predlžovanie mihalníc: dramatický, hustý vzhľad

// Prečo si nás vybrať?
// - Individuálny prístup
// - Profesionálne produkty
// - Dlhotrvajúci výsledok
// - Úspora času pri líčení

// Doprajte si premenu, ktorá podčiarkne vašu krásu a dodá vám sebavedomie.`,
//   },
//   {
//     id: 4,
//     title: "Permanentný make-up",
//     image: placeholder,
//     description: `Permanentný make-up: Krása, ktorá pretrváva

// Zobuďte sa každé ráno krásna, sebavedomá a pripravená na celý deň – bez potreby líčenia. Permanentný make-up je riešením pre ženy, ktoré túžia po dokonale upravenom vzhľade bez každodenného nanášania mejkapu. V salóne MAYA beauty vám ponúkame precízne a prirodzene pôsobiace ošetrenia, ktoré zvýraznia vašu krásu a ušetria vám množstvo času.

// Čo je permanentný make-up?
// Ide o jemnú mikropigmentáciu, pri ktorej sa do vrchných vrstiev pokožky aplikujú prírodné pigmenty. Výsledkom je efekt nalíčenia, ktorý vydrží mesiace až roky a je možné ho aplikovať na obočie, oči alebo pery.

// Naše služby permanentného make-upu zahŕňajú:
// - Precízne tvarovanie a tieňovanie obočia, ktoré zvýrazní váš pohľad a dodá tvári symetriu.
// - Delikátne linky na viečkach, ktoré opticky zväčšia oči a zvýraznia ich bez potreby každodenného používania ceruzky alebo linky.
// - Prírodné zvýraznenie pier, ktoré dodá farbu a tvar bez potreby rúžu.

// Prečo si vybrať permanentný make-up u nás?
// - Individuálny prístup: Spoločne vyberieme najvhodnejší odtieň a tvar podľa vášho typu pleti a osobného štýlu.
// - Kvalita a bezpečnosť: Používame len certifikované pigmenty a sterilné techniky, aby bol výsledok nielen krásny, ale aj bezpečný.
// - Dlhodobý efekt: Ušetrite čas a energiu, ktoré by ste inak venovali každodennému líčeniu.
// - Profesionálna starostlivosť: Náš skúsený tím sa postará o váš komfort počas celého zákroku a poradí vám so správnou starostlivosťou po aplikácii.

// Doprajte si krásu, ktorá vydrží a nechajte sa rozmaznávať permanentným make-upom, ktorý podčiarkne vašu jedinečnosť. Objednajte sa na konzultáciu ešte dnes a zažite komfort a sebavedomie, ktoré vám táto metóda prináša!`,
//   },
//   {
//     id: 5,
//     title: "Plasma Pen",
//     image: placeholder,
//     description: `Revolúcia v Omladzovaní: Plasma Pen a Fibroblast pre Obnovenú Krásu Pleti

// Túžite po viditeľnom omladení pleti bez chirurgického zákroku? V našom salóne vám prinášame prelomové technológie Plasma Pen a Fibroblast, ktoré predstavujú neinvazívnu revolúciu v estetickej medicíne. S týmito špičkovými metódami dokážeme cielene riešiť vrásky, ochabnutú pleť, jazvy a iné nedokonalosti, s výsledkami, ktoré vás ohromia.

// Plasma Pen & Fibroblast: Inovácia pre Pevnú a Hladkú Pleť
// Technológia Plasma Pen využíva plazmový výboj, ktorý vytvára mikroskopické body na povrchu pokožky. Tento precízny proces okamžite stimuluje sťahovanie kolagénových vlákien a spúšťa intenzívne regeneračné procesy. Cieľom je:

// - Neinvazívny lifting očných viečok (Blefaroplastika bez skalpela): Efektívne redukuje prebytočnú kožu a vyhladzuje vrásky v okolí očí, čím otvára pohľad.
// - Redukcia vrások a jemných liniek: Výrazne vyhladzuje vrásky na čele, okolo úst, na krku a dekolte.
// - Zlepšenie elasticity pleti: Pleť sa stáva viditeľne pevnejšou a pružnejšou.
// - Odstránenie kožných nerovností: Účinné pri redukcii jaziev (napr. po akné), strií, pigmentových škvŕn a drobných kožných výrastkov.

// Procedúra Fibroblast (často synonymum pre ošetrenie Plasma Pen vzhľadom na aktiváciu fibroblastov) cieli na stimuláciu tvorby nových kolagénových a elastínových vlákien. Práve tieto vlákna sú kľúčové pre mladistvý a pevný vzhľad pleti. Po ošetrení dochádza k jej remodelácii, stiahnutiu a viditeľnému omladeniu, ktoré pretrváva dlhodobo.

// Prečo si vybrať ošetrenie Plasma Pen / Fibroblast u nás?
// - Minimálne invazívna metóda: Bez rezov, ihiel a dlhej rekonvalescencie, typickej pre chirurgické zákroky.
// - Viditeľné a dlhotrvajúce výsledky: Už po jednom ošetrení je možné pozorovať výrazné zlepšenie textúry a pevnosti pleti.
// - Presnosť a bezpečnosť: Náš kvalifikovaný personál má rozsiahle skúsenosti s prácou s Plasma Pen a zabezpečuje maximálnu precíznosť a bezpečnosť počas celého procesu.
// - Prirodzený výsledok: Pleť sa omladzuje prirodzenou cestou, bez umelého alebo "napichaného" vzhľadu.
// - Komplexné riešenie: Efektívne rieši viaceré estetické problémy naraz.

// Objavte potenciál vašej pleti s Plasma Pen a Fibroblast a vráťte jej mladistvý vzhľad, po akom túžite. Radi vás privítame na nezáväznej konzultácii, kde posúdime stav vašej pleti a navrhneme najvhodnejší plán ošetrenia.`,
//   },
// ];

const itemHeight = 400;

const Procedury: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxVisible, setMaxVisible] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState<number[]>(
    []
  );

  useEffect(() => {
    const handleResize = () => {
      const availableHeight = window.innerHeight;
      const itemsThatFit = Math.floor(availableHeight / itemHeight);
      setMaxVisible(itemsThatFit || 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProcedury = isExpanded
    ? proceduryData
    : proceduryData.slice(0, maxVisible);

  const toggleDescription = (id: number) => {
    setExpandedDescriptions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="procedury-container">
      <h2>PROCEDÚRY</h2>
      <Divider />

      <div className="procedury-inner-container">
        {visibleProcedury.map((procedura: any, index: any) => (
          <article
            key={procedura.id}
            className={`procedura ${index % 2 === 0 ? "reverse" : ""}`}
          >
            <div className="procedura-content">
              <motion.div
                className="procedura-text-block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3>{procedura.title}</h3>
                {expandedDescriptions.includes(procedura.id) ? (
                  procedura.description
                ) : (
                  <>
                    <p>
                      {procedura.summary.length > 100
                        ? procedura.summary.substring(0, 100) + "..."
                        : procedura.summary}
                    </p>
                    {procedura.summary.length > 100 && (
                      <button
                        className="show-more-btn"
                        onClick={() => toggleDescription(procedura.id)}
                      >
                        Show more
                      </button>
                    )}
                  </>
                )}

                {expandedDescriptions.includes(procedura.id) && (
                  <button
                    className="show-more-btn"
                    onClick={() => toggleDescription(procedura.id)}
                  >
                    Show less
                  </button>
                )}
              </motion.div>
              <motion.img
                src={procedura.image}
                alt={procedura.title}
                className="procedura-image"
                initial={{
                  x: [0, 100, 0],
                  opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              />
            </div>
          </article>
        ))}
      </div>

      {proceduryData.length > maxVisible && (
        <button
          className="toggle-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FontAwesomeIcon
            icon={isExpanded ? faCircleChevronUp : faCircleChevronDown}
            size="3x"
          />
        </button>
      )}
    </div>
  );
};

export default Procedury;
