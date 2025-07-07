import React from "react";
import drop from "../../assets/dot.png";

const Sponser = () => {
   return (
      <div className="relative p-5">
         <div className="absolute overflow-hidden  -top-20">
            <img
               className="bg-cover"
               src="https://templatekits.themewarrior.com/solvero/wp-content/uploads/sites/65/2022/09/dot-pattern-2.png"
               alt=""
            />
         </div>
         <div className=" bg-gry z-20 overflow-hidden md:w-[80%]  py-4 md:py-10 my-[80px] mx-auto flex justify-center items-center">
            <div className="">
               <h3 className="text-5xl font-semibold leading-none">
                  This is sponser section we added some sponser link
               </h3>
            </div>
         </div>
      </div>
   );
};

export default Sponser;
