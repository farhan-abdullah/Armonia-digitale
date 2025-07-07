import { useEffect, useState } from "react";

const Statistics = () => {
  const [count, setCount] = useState(80);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 99) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // Increment every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [count]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count1 < 3.9) {
        setCount1(count1 + 0.9);
      } else {
        clearInterval(interval);
      }
    }, 200); // Increment every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [count1]);

  return (
    <div>
      <div className=" md:h-[117px] w-full bg-[#00B9C5] text-[white] text-center">
        <div className=" flex md:flex-row flex-col items-center justify-center py-8 md:gap-0 gap-8">
          <div className="flex md:flex-row flex-col gap-4  items-center">
            <h1 className="font-extrabold text-5xl">{count}%</h1>
            <p className="text-1xl font-semibold w-1/2">
              Successo nell'acquisizione dei clienti
            </p>
          </div>
          {/* <div className='flex md:flex-row flex-col gap-4  items-center'>
						<h1 className='font-extrabold text-5xl'>25k</h1>
						<p className='text-1xl font-semibold w-1/2'>
							Thousands of successful business
						</p>
					</div> */}
          {/* <div className='flex md:flex-row flex-col gap-4  items-center'>
						<h1 className='font-extrabold text-5xl'>120+</h1>
						<p className='text-1xl font-semibold w-1/2'>
							Total client who love Solvero
						</p>
					</div> */}
          <div className="flex md:flex-row flex-col gap-4 items-center">
            <h1 className="font-extrabold text-5xl">{count1}</h1>
            <p className="text-1xl font-semibold w-1/2">
              Recensioni molto soddisfatte del nostro servizio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
