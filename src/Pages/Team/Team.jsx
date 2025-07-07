import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import farhan from "./../../assets/farhan.jpg";
import shakib from "./../../assets/sakib.jpg";
import wasim from "./../../assets/wasim.jpg";
const Team = () => {
  const teams = [
    {
      name: "Wasim Hoque",
      title: "IT Consultant",
      imageUrl: wasim,
      fb: "https://www.facebook.com/hoquewasim",
      linkedin: "https://www.linkedin.com/in/hoquewasim/",
    },
    {
      name: "Monsur Alam",
      title: "Frontend developer",
      imageUrl: "https://i.ibb.co/d0qJyBP/104.jpg",
      fb: "https://www.facebook.com/monsur2003",
      linkedin: "https://www.linkedin.com/in/monsur2003/",
    },
    {
      name: "Najmus Shakib",
      title: "PR & HR",
      imageUrl: shakib,
      fb: "https://www.facebook.com/shakib.abdullah.14",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Farhan Abdullah",
      title: "Ceo & founder",
      imageUrl: farhan,
      fb: "https://www.facebook.com/farhan.abdullah1996/",
      linkedin: "https://www.linkedin.com/in/farhan-abdullah/",
    },
  ];

  return (
    <div className="md:w-[80%] p-5 mx-auto text-white md:py-[80px]">
      <div>
        <div className="flex  mb-10 md:mb-0 justify-between md:items-center items-start md:flex-row flex-col ">
          <div className="space-y-5 mb-8  max-w-[600px]">
            <p className="text-mezenda uppercase tracking-wider">Team</p>
            <h1 className="text-[white] text-3xl font-semibold">
              Il Nostro Team
            </h1>
            <p>
              Armonia Digitale è un team dinamico, flessibile ed esclusivo.
              Siamo giovani designer e sviluppatori di talento che amano
              conoscere nuove persone in tutto il mondo e offrire servizi di
              qualità.
            </p>
          </div>
          {/* <button className="btn-red">See all</button> */}
        </div>
        <div className="grid md:grid-cols-4 gap-x-3 gap-y-4">
          {teams.map((team, index) => (
            <div key={index}>
              <div className="card md:max-w-[300px] p-3 bg-secondary rounded-lg  border border-tertiary shadow-lg shadow-tertiary/40 h-[400px] ">
                <img
                  className="w-full rounded-lg h-[260px]  bg-cover "
                  src={team.imageUrl}
                  alt=""
                  loading="lazy"
                />
                <div className="my-3">
                  <h2 className="text-[25px] font-bold">{team.name}</h2>
                  <p className="text-[16px] uppercase text-gray-300">
                    {team.title}
                  </p>
                </div>

                <div className="space-x-3">
                  <a
                    href={team.fb}
                    className="p-2 rounded-full border-2 border-mezenda/30 inline-block  hover:bg-mezenda/60 hover:text-black duration-500 "
                  >
                    <FaFacebookF className=""></FaFacebookF>
                  </a>
                  <a
                    href={team.linkedin}
                    className="p-2 rounded-full border-2 border-mezenda/30 inline-block  hover:bg-mezenda/60 hover:text-black duration-500 "
                  >
                    <FaLinkedinIn className=""></FaLinkedinIn>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
