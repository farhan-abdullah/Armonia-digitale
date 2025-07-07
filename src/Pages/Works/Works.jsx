const Works = () => {
  return (
    <div className="md:w-[80%] p-5  mx-auto text-[#FFFFFF99] mt-5">
      <div className="flex  mb-10 md:mb-0 justify-between md:items-center items-start md:flex-row flex-col ">
        <div className="space-y-5 mb-8  max-w-[600px]">
          <p className="text-mezenda uppercase tracking-wider">Lavori</p>
          <h1 className="text-[white] text-3xl font-semibold">
            I Nostri Progetti
          </h1>
          {/* <p>
            Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
            enim. Adipiscing nunc condimentum risus id. Aquam mattis magna
            facilisi
          </p> */}
        </div>
        {/* <button className="btn-red">See all</button> */}
      </div>
      <div className="grid md:grid-cols-2">
        <div className="">
          <img
            src="https://templatekits.themewarrior.com/solvero/wp-content/uploads/sites/65/elementor/thumbs/work1-puhl6g1plg7tlkauw0cd726zcwplbxrxevlvkrn5h0.jpg"
            alt=""
            className="h-full w-full bg-cover"
            loading="lazy"
          />
        </div>
        <div className=" bg-secondary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10  ">
          <div className="">
            <h1 className="md:text-4xl 2xl:text-5xl  text-2xl font-bold text-[white]">
              Abbiamo sviluppato una web app per un'agenzia di immigrazione/CAF
              & Patronato.
            </h1>
          </div>
          {/* <p className="text-[#FFFFFF99]">
            Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
            enim. Adipiscing nunc condimentum risus id. Aquam mattis magna
            facilisi
          </p> */}
          {/* <button className="btn-secondary">Scopri di più</button> */}
        </div>
        <div className=" bg-gry text-[black] p-5 md:px-10 md:py-20 2xl:px-16 space-y-10">
          <div className="">
            <h1 className="md:text-4xl 2xl:text-5xl text-2xl font-bold ">
              Abbiamo sviluppato un'altra web app per un'organizzazione no
              profit
            </h1>
          </div>
          {/* <p className="">
            Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
            enim. Adipiscing nunc condimentum risus id. Aquam mattis magna
            facilisi
          </p> */}
          {/* <button className="btn-secondary border-tertiary text-tertiary">
            Discover more
          </button> */}
        </div>
        <div className="">
          <img
            src="https://templatekits.themewarrior.com/solvero/wp-content/uploads/sites/65/elementor/thumbs/work3-puhmk1183u3c12a2cxww81rbfmbmd5m78agxx84j90.jpg"
            alt=""
            className="h-full w-full bg-cover"
            loading="lazy"
          />
        </div>
        <div className="">
          <img
            src="https://templatekits.themewarrior.com/solvero/wp-content/uploads/sites/65/elementor/thumbs/work2-puhmjy7pjbzh28e5tep0ikgxngpiq2b07wihhe8pro.jpg"
            alt=""
            className="h-full w-full bg-cover"
            loading="lazy"
          />
        </div>
        <div className=" bg-secondary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10">
          <div className="">
            <h1 className="md:text-4xl 2xl:text-5xl text-2xl  font-bold text-[white]">
              Abbiamo sviluppato una semplice pagina web per una scuola.
            </h1>
          </div>
          {/* <p className="text-[#FFFFFF99]">
            Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
            enim. Adipiscing nunc condimentum risus id. Aquam mattis magna
            facilisi
          </p>
          <button className="btn-secondary">Discover more</button> */}
        </div>
      </div>
    </div>
  );
};

export default Works;
