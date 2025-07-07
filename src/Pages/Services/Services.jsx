import { useScrollContext } from "../../ScrollContext";
import ui from "./../../assets//ux.svg";
import front from "./../../assets/front-end.svg";
import svg2 from "./../../assets/seo.svg";
import server from "./../../assets/server.svg";
import socialmedia from "./../../assets/social-media.svg";
import svg1 from "./../../assets/webpages.svg";
const Services = () => {
  // useEffect(() => {
  // 	AOS.init();
  // });
  const { sectionARef, sectionBRef, sectionCRef } = useScrollContext();

  return (
    <div ref={sectionBRef} className="relative overflow-hidden">
      <div className="absolute overflow-hidden  top-0 md:-right-[200px] 2xl:-right-5 my-5">
        <img
          className="bg-cover"
          src="https://templatekits.themewarrior.com/solvero/wp-content/uploads/sites/65/2022/09/dot-pattern-2.png"
          alt=""
        />
      </div>
      <div className="md:w-[80%] relative p-5  mx-auto text-[#FFFFFF99] mt-5">
        <div className="mb-5">
          <div className="space-y-5 mb-8  max-w-[600px]">
            <p className="text-mezenda tracking-wider	">SERVIZI</p>
            <h1 className="text-[white] text-3xl font-semibold">
              I Nostri Servizi
            </h1>
            <p>
              Offriamo un'ampia gamma di soluzioni digitali su misura per le
              esigenze del tuo business:
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-0">
          <div className=" bg-tertiary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10">
            <div className="flex justify-between">
              <h1 className="md:text-4xl 2xl:text-5xl  text-2xl font-bold text-[white]">
                Sviluppo Front-End
              </h1>
              <img className="w-20 md:w-[80px]" src={front} alt="" />
            </div>
            <p className="text-[#FFFFFF99]">
              Realizziamo interfacce eleganti, reattive e interattive per
              garantire un'esperienza fluida al utente.
            </p>
            {/* <button className="btn-primary">Discover more</button> */}
          </div>
          <div className=" bg-secondary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10  ">
            <div className="flex justify-between">
              <h1 className="md:text-4xl 2xl:text-5xl  text-2xl font-bold text-[white]">
                Design <br /> UI/UX
              </h1>
              <img className="w-20 md:w-[80px]" src={ui} alt="" />
            </div>
            <p className="text-[#FFFFFF99]">
              Creiamo design intuitivi e visivamente coinvolgenti che catturano
              l’attenzione e migliorano la fidelizzazione degli utenti.
            </p>
            {/* <button className="btn-primary">Discover more</button> */}
          </div>
          <div className=" bg-secondary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10">
            <div className="flex justify-between">
              <h1 className="md:text-4xl 2xl:text-5xl  text-2xl font-bold text-[white]">
                Sviluppo Back-End
              </h1>
              <img className="w-20 md:w-[80px]" src={server} alt="" />
            </div>
            <p className="text-[#FFFFFF99]">
              Creiamo soluzioni server-side sicure, scalabili e ad alte
              prestazioni.
            </p>
            {/* <button className="btn-primary">Discover more</button> */}
          </div>
          <div className=" bg-pink p-5 md:px-10 md:py-20 2xl:px-16 space-y-10">
            <div className="flex justify-between">
              <h1 className="md:text-4xl 2xl:text-5xl  text-2xl font-bold text-[white]">
                Sviluppo CMS
              </h1>
              <img className="w-20 md:w-[80px]" src={svg1} alt="" />
            </div>
            <p className="text-[#FFFFFF99]">
              Sviluppiamo sistemi di gestione dei contenuti personalizzati per
              offrirti il pieno controllo sui tuoi contenuti.
            </p>
            {/* <button className="btn-primary">Discover more</button> */}
          </div>
          <div className=" bg-tertiary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10">
            <div className="flex justify-between">
              <h1 className="md:text-4xl 2xl:text-5xl text-2xl  font-bold text-[white]">
                Ottimizzazione SEO
              </h1>
              <img className="w-20 md:w-[80px]" src={svg2} alt="" />
            </div>
            <p className="text-[#FFFFFF99]">
              Aumentiamo la tua visibilità online e il posizionamento sui motori
              di ricerca con strategie comprovate.
            </p>
            {/* <button className="btn-primary">Discover more</button> */}
          </div>
          <div className=" bg-secondary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10">
            <div className="flex justify-between">
              <h1 className="md:text-4xl 2xl:text-5xl text-2xl  font-bold text-[white]">
                Digital Marketing
              </h1>
              <img className="w-20 md:w-[80px]" src={socialmedia} alt="" />
            </div>
            <p className="text-[#FFFFFF99]">
              Generiamo traffico, conversioni e consapevolezza del marchio con
              campagne orientate ai risultati.
            </p>
            {/* <button className="btn-primary">Discover more</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
