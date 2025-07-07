import banner from "../../assets/banner.jpg";
import { useScrollContext } from "../../ScrollContext";

const Banner = () => {
  const { sectionARef } = useScrollContext();
  //    const containerStyle = {
  //       backgroundImage: `url(${banner})`,
  //       backgroundSize: "cover", // You can adjust this property as needed
  //       backgroundRepeat: "no-repeat",
  //       backgroundPosition: "center center",
  //       // Other CSS properties for the container
  //       width: "100%",
  //       height: "70vh",
  //       display: "relative",
  //    };
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), #0E0F30), url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <>
      <div
        ref={sectionARef}
        className=" md:h-[80vh] py-20 md:py-0 pt-36 md:pt-0 mx-auto flex  items-center text-center md:text-start  text-white"
        style={bgStyle}
      >
        <div className=" w-[720px] md:mx-auto ">
          <h2 className="md:text-[50px] text-[40px] capitalize leading-none tracking-tight md:font-bold font-semibold">
            Rivoluzioniamo la tua presenza online con soluzioni digitali
            complete
          </h2>
          <p className="text-[16px] md:text-[18px]  mt-5">
            Costruiamo e trasformiamo aziende lanciando prodotti digitali e
            esperienze leader di mercato che ne alimentano la crescita.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
