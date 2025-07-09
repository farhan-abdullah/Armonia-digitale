import logo from "../../assets/logo_white.png";
const Footer = () => {
  return (
    <div className="bg-[#333787] w-full text-[white]">
      <div className="md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 md:pt-40  md:pb-10  md:items-start  md:justify-items-center	">
        <div className=" flex flex-col gap-5 items-center ">
          <img className="md:w-[10rem] w-32" src={logo} alt="" loading="lazy" />
          <p className="md:w-[25rem]">
            Armonia Digitale è un'azienda specializzata nella realizzazione di
            applicazioni web e applicazioni smartphone per aziende e privati.
          </p>
        </div>
        <div className="border border-zinc-500 border-x-[0.5rem] my-4 w-[10rem] mx-auto md:hidden"></div>
        <div className="flex flex-col md:space-y-10 md:pl-0  b">
          <h3 className="font-semibold">Contact Us</h3>
          <p>Via Trieste, 140/A, 30175 Venezia VE</p>
          <p>farhan.abdullah94@gmail.com</p>
          <p>+393896686583</p>
        </div>
        <div className="border border-zinc-500 border-x-[0.5rem] my-4 w-[10rem] mx-auto md:hidden"></div>
        {/* <div className="flex flex-col md:space-y-6 md:pl-0 ">
          <h3 className="font-semibold">Information</h3>
          <p>About</p>
          <p>Customer service</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
        </div> */}
      </div>

      <div className="border border-zinc-500 border-x-[0.5rem] my-4 w-full mx-auto"></div>
      <div className="md:w-[80%] mx-auto flex flex-col md:flex-row justify-evenly md:py-6">
        <div className="text-center">
          <p>© 2025 Armonia Digitale.</p>
        </div>

        {/* <div className="md:flex md:flex-row  lg:gap-5 space-x-2 text-center">
          <a href="">Support</a>
          <a href="">Privacy Statement</a>
          <a href="">Terms of use </a>
          <a href="">Cookies</a>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
