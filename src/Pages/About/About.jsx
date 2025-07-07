const About = () => {
  return (
    <div className="my-[80px] flex justify-center items-center md:w-[80%] mx-auto p-4 md:p-0">
      <div className="grid grid-cols-1 md:gap-x-5 md:grid-cols-2">
        <div>
          <img
            src="https://templatekits.themewarrior.com/solvero/wp-content/uploads/sites/65/elementor/thumbs/about-sect-puhjksm2lu4f1zq1nmzjuocvg38aocc5vwetj6wfw8.jpg"
            alt=""
          />
        </div>
        <div className="space-y-6 text-white my-auto">
          <span className="text-mezenda tracking-wider uppercase">
            la nostra missione
          </span>
          <h2 className="md:text-[52px] font-bold leading-none">
            La nostra missione è aiutare le aziende a crescere più velocemente
            che mai.
          </h2>
          <p className="text-gray-400">
            La nostra missione è accelerare la crescita del business attraverso
            l’innovazione e la tecnologia. Combiniamo creatività ed esecuzione
            strategica per offrire soluzioni che generano risultati concreti.
          </p>
          {/* <button className="btn-secondary">Learn more</button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
