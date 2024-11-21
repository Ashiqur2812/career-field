import React from 'react';
import banner from '../assets/career.jpg';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

const Slider = () => {

    const slideVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <div>
            {/* <div className="carousel w-full mb-8 mt-12">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner} className="w-[50rem] object-cover " />
                    <div className="absolute bottom-5 left-5 text-white bg-opacity-50 bg-gray-800 p-4 rounded">
                        <h2 className="text-2xl font-bold">Plan Your Future with Us</h2>
                    </div>
                </div>
            </div> */}
            <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen p-8">

                <div className="lg:w-1/2 w-full flex justify-center items-center">
                    <img
                        src={banner}
                        className="rounded-lg shadow-lg w-[20rem] lg:w-[25rem] object-cover"
                        alt=""
                    />
                </div>

                <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Welcome to <span className="text-base-200">CareerField</span>
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Unlock your potential with expert career guidance tailored to your
                        aspirations. Discover the right path and take the next step toward a
                        brighter future!
                    </p>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Sign in to Get Started:
                        </h3>
                        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-4">
                            <button className="btn bg-[#E7E7E7] w-full lg:w-auto mb-4 lg:mb-0 text-base e">
                                <FcGoogle />Login with Google
                            </button>
                            <button className="btn bg-[#E7E7E7] w-full lg:w-auto mb-4 lg:mb-0 text-base ">
                                <BsGithub /> Login with GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="mt-8 mb-12">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop
                    spaceBetween={50}
                    slidesPerView={1}
                    className="w-full max-w-5xl mx-auto"
                >
                    
                    <SwiperSlide>
                        <div className="relative">
                            <img src={banner1} alt="" className="w-full h-[400px] object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start px-8">
                                <h2 className="text-white text-3xl md:text-5xl font-bold">Plan Your Future with Us</h2>
                                <p className="text-white text-sm md:text-lg mt-4">
                                    Discover the best career opportunities and counseling services.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                   
                    <SwiperSlide>
                        <div className="relative">
                            <img src={banner2} alt="" className="w-full h-[400px] object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start px-8">
                                <h2 className="text-white text-3xl md:text-5xl font-bold">Expert Career Counseling</h2>
                                <p className="text-white text-sm md:text-lg mt-4">
                                    Get professional advice to unlock your true potential.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                   
                    <SwiperSlide>
                        <div className="relative">
                            <img src={banner3} alt="" className="w-full h-[400px] object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start px-8">
                                <h2 className="text-white text-3xl md:text-5xl font-bold">Build an Outstanding Resume</h2>
                                <p className="text-white text-sm md:text-lg mt-4">
                                    Tailored guidance to make your resume stand out.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div> */}

            {/* <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop
                    className="w-full max-w-7xl"
                >
                   
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <div className="p-8 text-center lg:text-left text-white space-y-6">
                                <h1 className="text-4xl lg:text-6xl font-bold">Empower Your Career</h1>
                                <p className="text-lg">
                                    Unlock the best opportunities with expert career advice and personalized guidance.
                                </p>
                                <button className="btn bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md">
                                    Learn More
                                </button>
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={banner1}
                                    alt="Career Guidance"
                                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                  
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <div className="p-8 text-center lg:text-left text-white space-y-6">
                                <h1 className="text-4xl lg:text-6xl font-bold">Expert Resume Building</h1>
                                <p className="text-lg">
                                    Get professional tips to make your resume stand out and land your dream job.
                                </p>
                                <button className="btn bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md">
                                    Explore Services
                                </button>
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={banner2}
                                    alt="Resume Building"
                                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                  
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <div className="p-8 text-center lg:text-left text-white space-y-6">
                                <h1 className="text-4xl lg:text-6xl font-bold">Ace Your Interviews</h1>
                                <p className="text-lg">
                                    Practice with experts and prepare to impress in your next interview.
                                </p>
                                <button className="btn bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md">
                                    Get Started
                                </button>
                            </div>
                            <div className="overflow-hidden">
                                <img
                                    src={banner3}
                                    alt="Interview Prep"
                                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div> */}

            <div className="bg-gradient-to-r from-gray-800 via-teal-500 to-blue-900 min-h-screen flex items-center justify-center">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop
                    className="w-full max-w-7xl"
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <motion.div
                                className="p-8 text-center lg:text-left text-white space-y-6"
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <h1 className="text-4xl lg:text-6xl font-bold">Empower Your Career</h1>
                                <p className="text-lg">
                                    Unlock the best opportunities with expert career advice and personalized guidance.
                                </p>
                                {/* <motion.button
                                    className="btn bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Learn More
                                </motion.button> */}
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.img
                                    src={banner1}
                                    alt="Career Guidance"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <motion.div
                                className="p-8 text-center lg:text-left text-white space-y-6"
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <h1 className="text-4xl lg:text-6xl font-bold">Expert Resume Building</h1>
                                <p className="text-lg">
                                    Get professional tips to make your resume stand out and land your dream job.
                                </p>
                                {/* <motion.button
                                    className="btn bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Explore Services
                                </motion.button> */}
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.img
                                    src={banner2}
                                    alt="Resume Building"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <motion.div
                                className="p-8 text-center lg:text-left text-white space-y-6"
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <h1 className="text-4xl lg:text-6xl font-bold">Ace Your Interviews</h1>
                                <p className="text-lg">
                                    Practice with experts and prepare to impress in your next interview.
                                </p>
                                {/* <motion.button
                                    className="btn bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get Started
                                </motion.button> */}
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.img
                                    src={banner3}
                                    alt="Interview Prep"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slide 4 */}
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <motion.div
                                className="p-8 text-center lg:text-left text-white space-y-6"
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <h1 className="text-4xl lg:text-6xl font-bold">Ace Your Interviews</h1>
                                <p className="text-lg">
                                    Practice with experts and prepare to impress in your next interview.
                                </p>
                                {/* <motion.button
                                    className="btn bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get Started
                                </motion.button> */}
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.img
                                    src={banner4}
                                    alt="Interview Prep"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;