import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import "./styles.css";

// import required modules
import { Navigation } from 'swiper/modules';

import './Testimonial.css';

const Testimonials = () => {
	const testimonials = [
		{
			name: 'John Doe',
			feedback:
				"I had a fantastic experience with this service. It exceeded my expectations, and I'm very satisfied with the results. The quality of the product and the customer service were outstanding!",
			imageUrl: 'https://i.ibb.co/tQRH5HP/client-5.jpg',
			rating: 5,
		},
		{
			name: 'Jane Smith',
			feedback:
				"This product is truly remarkable. It has made a significant difference in my life, and I'm extremely pleased with the results. The customer service was exceptional.",
			imageUrl: 'https://i.ibb.co/9sPshc6/oliver-ragfelt-kh-V4f-Ty6-D8-unsplash.jpg',
			rating: 4,
		},
		{
			name: 'Robert Johnson',
			feedback:
				"I can't recommend this service enough. The quality of the product is top-notch, and the overall experience has been superb. It's been a game-changer for me.",
			imageUrl: 'https://i.ibb.co/TRDknmp/vinicius-amnx-amano-0-NCjj-D0z-Gnw-unsplash.jpg',
			rating: 5,
		},
		{
			name: 'Emily Wilson',
			feedback:
				"I'm absolutely in love with this service! It's transformed the way I work, and the results have been outstanding. I can't thank the team enough for their exceptional work.",
			imageUrl: 'https://i.ibb.co/BszK1zF/amir-seilsepour-5vg-Sar-Qim-A-unsplash.jpg',
			rating: 5,
		},
		{
			name: 'David Brown',
			feedback:
				"This product has been worth every penny. I'm thoroughly impressed with its performance and the value it offers. Highly recommended to everyone!",
			imageUrl: 'https://i.ibb.co/NFVBqR3/client-3.jpg',
			rating: 4,
		},
		{
			name: 'Sarah Davis',
			feedback:
				"I'm thrilled with the efficiency and effectiveness of this service. It's made a significant difference in my workflow, and I'm a delighted customer.",
			imageUrl: 'https://i.ibb.co/wcMZ1xt/client-2.jpg',
			rating: 4,
		},
		{
			name: 'Your Name',
			feedback:
				'Your feedback goes here. Feel free to share your thoughts and experiences with our product or service.',
			imageUrl: 'https://i.ibb.co/YB36QKc/client-1.jpg',
			rating: 4,
		},
		// Add more testimonials with longer feedback here
	];

	return (
		<div
			className='md:w-full flex justify-center items-start flex-col'
			style={{
				backgroundImage:
					'linear-gradient(#0E0F20CC,#0E0F20CC), url("https://templatekits.themewarrior.com/solvero/wp-content/uploads/sites/65/2022/09/testi-bg.jpg")',
				backgroundSize: 'cover', // You can adjust this property as needed
			}}>
			<div className=' w-[90%]  md:w-[80%] md:p-5  mx-auto py-10'>
				<div className='  flex  mb-10 md:mb-0 justify-between md:items-center items-start md:flex-row flex-col '>
					<div className='space-y-5 mb-8  max-w-[600px]'>
						<p className='text-mezenda uppercase tracking-wider'>Testimonials</p>
						<h1 className='text-[white] text-3xl font-semibold'>Testimonials</h1>
						<p className='text-gray-200'>
							Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
							enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi
						</p>
					</div>
					<button className='btn-red'>See all</button>
				</div>
				<div className=' mx-auto md:my-6 md:flex justify-center items-center flex-col'>
					<Swiper
						navigation={true}
						pagination={true}
						mousewheel={true}
						keyboard={true}
						slidesPerView={1}
						modules={[Navigation]}
						className='my-[60px]'>
						{testimonials.map((testi, index) => (
							<SwiperSlide className='max-w-[100%]' key={index}>
								<div className='flex justify-center flex-col items-center'>
									<img
										src={testi.imageUrl}
										className='md:w-[100px] w-[80px] h-[80px] md:h-[100px] mb-3 rounded-[100%] bg-cover'
										alt=''
										loading='lazy'
									/>
									<div className='w-[70%]'>
										<p className='text-gray-400 text-[14px] md:text-[18px]'>
											{testi.feedback}
										</p>
										<h2 className='text-white font-semibold text-[22px]'>
											{testi.name}
										</h2>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;

// Import Swiper React components

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// export default function App() {
//   return (
//     <>

//     </>
//   );
// }
